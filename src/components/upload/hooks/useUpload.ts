import type { IUploadProps } from '../upload.types';

import { useDrag } from './useDrag';
import { useUploadFile } from './useUploadFile';

export function useUpload({ folder, onChange }: Pick<IUploadProps, 'folder' | 'onChange'>) {
	const { onUploadFiles, isUploadLoading, onClear } = useUploadFile({ folder, onChange });
	const { onDrag, onDrop, dragActive } = useDrag({ onUploadFiles });

	return {
		fun: {
			onUploadFiles,
			onClear,
			onDrag,
			onDrop
		},
		state: {
			isUploadLoading,
			dragActive
		}
	};
}
