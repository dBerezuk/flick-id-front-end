import type { RefObject } from 'react';

interface IProps {
	boxPlayerRef: RefObject<HTMLDivElement | null>;
}

export function useFullScreen({ boxPlayerRef }: IProps) {
	const onFullScreen = () => {
		const boxPlayer = boxPlayerRef.current;

		if (!boxPlayer) return;

		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			boxPlayer.requestFullscreen();
		}
	};

	return { onFullScreen };
}
