import { type Dispatch, type RefObject, type SetStateAction, useEffect, useState } from 'react';

interface IProps {
	playerRef: RefObject<HTMLVideoElement | null>;
	setIsPlaying: Dispatch<SetStateAction<boolean>>;
}

export function useMetadata({ playerRef, setIsPlaying }: IProps) {
	const [currentTime, setCurrentTime] = useState(0);
	const [videoTime, setVideoTime] = useState(0);

	useEffect(() => {
		const player = playerRef.current;

		if (!player) return;

		const onLoadedMetadata = () => {
			setVideoTime(player.duration);
		};

		const onUpdateTime = () => {
			setCurrentTime(player.currentTime);
		};

		const onEnded = () => {
			setIsPlaying(false);
		};

		player.addEventListener('timeupdate', onUpdateTime);
		player.addEventListener('ended', onEnded);

		if (player.readyState >= 1) {
			onLoadedMetadata();
		} else {
			player.addEventListener('loadedmetadata', onLoadedMetadata);
		}

		return () => {
			player.removeEventListener('timeupdate', onUpdateTime);
			player.removeEventListener('loadedmetadata', onLoadedMetadata);
			player.removeEventListener('ended', onEnded);
		};
	}, []);

	return { currentTime, videoTime };
}
