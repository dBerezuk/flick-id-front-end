import { useState } from 'react';

interface IProps {
	onUploadFiles: (files: FileList | null) => void;
}

export function useDrag({ onUploadFiles }: IProps) {
	const [dragActive, setDragActive] = useState(false);

	const onDrag = (event: React.DragEvent<HTMLLabelElement>) => {
		event.preventDefault();

		if (event.type === 'dragenter' || event.type === 'dragover') {
			setDragActive(true);
		} else if (event.type === 'dragleave') {
			setDragActive(false);
		}
	};

	const onDrop = (event: React.DragEvent<HTMLLabelElement>) => {
		event.preventDefault();

		setDragActive(false);

		onUploadFiles(event.dataTransfer.files);
	};

	return { dragActive, onDrag, onDrop };
}
