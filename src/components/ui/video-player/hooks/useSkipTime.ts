import type { RefObject } from 'react';

interface IProps {
	playerRef: RefObject<HTMLVideoElement | null>;
}

const SKIP_SECONDS_TIME = 10;

export function useSkipTime({ playerRef }: IProps) {
	const onSkipTime = (isNext?: boolean) => {
		const player = playerRef.current;

		if (!player) return;

		if (isNext) {
			player.currentTime += SKIP_SECONDS_TIME;
		} else {
			player.currentTime -= SKIP_SECONDS_TIME;
		}
	};

	return {onSkipTime};
}
