import { useRef } from 'react';

import { useEffects } from './useEffects';
import { useFullScreen } from './useFullScreen';
import { useMetadata } from './useMetadata';
import { usePlaying } from './usePlaying';
import { useSkipTime } from './useSkipTime';
import { useVolume } from './useVolume';

export function useVideoPlayer() {
	const boxPlayerRef = useRef<HTMLDivElement>(null);
	const playerRef = useRef<HTMLVideoElement>(null);

	const { isPlaying, setIsPlaying, onTogglePlaying } = usePlaying({ playerRef });

	const { onSkipTime } = useSkipTime({ playerRef });

	const { volume, isMuted, onChangeVolume, onToggleMutedVolume } = useVolume({ playerRef });

	const { currentTime, videoTime } = useMetadata({ playerRef, setIsPlaying });

	const { onFullScreen } = useFullScreen({ boxPlayerRef });

	const { isProjector, onToggleProjector } = useEffects();

	return {
		boxPlayerRef,
		playerRef,
		isPlaying,
		volume,
		isMuted,
		currentTime,
		videoTime,
		isProjector,
		onTogglePlaying,
		onSkipTime,
		onChangeVolume,
		onToggleMutedVolume,
		onFullScreen,
		onToggleProjector
	};
}
