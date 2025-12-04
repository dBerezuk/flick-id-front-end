import type { ChangeEvent } from 'react'

export enum ENUM_TYPE_ACTIONS_CONTROLS {
	QUALITY,
	VOLUME
}

export interface IControlsProps {
	isPlaying: boolean;
	currentTime: number;
	videoTime: number;
	isMuted: boolean;
	volume: number;
	isProjector: boolean;
	onTogglePlaying: () => void;
	onSkipTime: (isNext?: boolean) => void;
	onChangeVolume: (event: ChangeEvent<HTMLInputElement>) => void;
	onToggleMutedVolume: () => void;
	onFullScreen: () => void;
	onToggleProjector: () => void;
}
