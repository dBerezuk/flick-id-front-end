import { type RefObject, useState } from 'react';

interface IProps {
	playerRef: RefObject<HTMLVideoElement | null>;
}

export function usePlaying({ playerRef }: IProps) {
	const [isPlaying, setIsPlaying] = useState(false);

	const onTogglePlaying = () => {
		const player = playerRef.current;

		if (!player) return;

		if (!isPlaying) {
			player.play();
		} else {
			player.pause();
		}

		setIsPlaying(prev => !prev);
	};

	return { isPlaying, setIsPlaying, onTogglePlaying };
}
