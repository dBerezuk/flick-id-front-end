import cn from 'clsx';
import { useState } from 'react';

import { BoxActions } from './box-actions/BoxActions';
import { Content } from './content/Content';
import { ENUM_TYPE_ACTIONS_CONTROLS, type IControlsProps } from './controls.types';

import styles from './Controls.module.scss';

export function Controls({
	isPlaying,
	currentTime,
	videoTime,
	isMuted,
	volume,
	isProjector,
	onTogglePlaying,
	onSkipTime,
	onChangeVolume,
	onToggleMutedVolume,
	onFullScreen,
	onToggleProjector
}: IControlsProps) {
	const [isVisibledBoxActions, setIsVisibledBoxActions] = useState(false);
	const [typeBoxActions, setTypeBoxActions] = useState<ENUM_TYPE_ACTIONS_CONTROLS>(
		ENUM_TYPE_ACTIONS_CONTROLS.QUALITY
	);

	const onToggleVisibleBoxActions = (type?: ENUM_TYPE_ACTIONS_CONTROLS) => {
		type !== undefined && setTypeBoxActions(type);

		setIsVisibledBoxActions(prev => !prev);
	};

	return (
		<div className={cn(styles.controls, isVisibledBoxActions && styles.visibledBoxActions)}>
			<BoxActions
				type={typeBoxActions}
				isMuted={isMuted}
				volume={volume}
				onChangeVolume={onChangeVolume}
				onToggleMutedVolume={onToggleMutedVolume}
				onToggleVisible={onToggleVisibleBoxActions}
			/>
			<Content
				currentTime={currentTime}
				videoTime={videoTime}
				isPlaying={isPlaying}
				isMuted={isMuted}
				isProjector={isProjector}
				volume={volume}
				onSkipTime={onSkipTime}
				onTogglePlaying={onTogglePlaying}
				onChangeVolume={onChangeVolume}
				onToggleMutedVolume={onToggleMutedVolume}
				onFullScreen={onFullScreen}
				onToggleProjector={onToggleProjector}
				onToggleVisibleBoxActions={onToggleVisibleBoxActions}
			/>
		</div>
	);
}
