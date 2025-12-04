import { type ChangeEvent, type RefObject, useState } from 'react';

interface IProps {
	playerRef: RefObject<HTMLVideoElement | null>;
}

export function useVolume({ playerRef }: IProps) {
	const [volume, setVolume] = useState(1);
	const [isMuted, setIsMuted] = useState(false);

	const onChangeVolume = (event: ChangeEvent<HTMLInputElement>) => {
		const player = playerRef.current;

		if (!player || isMuted) return;

		const value = +event.currentTarget.value;

		setVolume(value);

		player.volume = value;
	};

	const onToggleMutedVolume = () => {
		const player = playerRef.current;

		if (!player) return;

		setIsMuted(prev => !prev);

		player.muted = !player.muted;
	};

	return { volume, isMuted, onChangeVolume, onToggleMutedVolume };
}
