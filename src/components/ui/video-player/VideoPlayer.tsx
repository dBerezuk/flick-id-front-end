'use client';

import cn from 'clsx';

import { PATH_UPLOAD_FOLDERS } from '@/config/path-upload-folders.config';

import { Controls } from './Controls/Controls';
import { useVideoPlayer } from './hooks/useVideoPlayer';
import type { IMedia } from '@/types/media.types';

import styles from './VideoPlayer.module.scss';

type TProps = Pick<IMedia, 'mediaFileName'>;

export function VideoPlayer({ mediaFileName }: TProps) {
	const {
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
	} = useVideoPlayer();

	return (
		<div
			className={styles.box}
			ref={boxPlayerRef}
		>
			<video
				className={cn(styles.player, isProjector && styles.projector)}
				src={PATH_UPLOAD_FOLDERS.getMediaVideos(mediaFileName)}
				controlsList='nodownload nodisplay'
				disablePictureInPicture
				controls={false}
				width={1388}
				height={752}
				ref={playerRef}
			>
				Your browser does not support video.
			</video>
			<Controls
				isPlaying={isPlaying}
				currentTime={currentTime}
				videoTime={videoTime}
				isMuted={isMuted}
				volume={volume}
				isProjector={isProjector}
				onTogglePlaying={onTogglePlaying}
				onSkipTime={onSkipTime}
				onChangeVolume={onChangeVolume}
				onToggleMutedVolume={onToggleMutedVolume}
				onFullScreen={onFullScreen}
				onToggleProjector={onToggleProjector}
			/>
		</div>
	);
}
