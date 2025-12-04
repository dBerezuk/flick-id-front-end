import { Maximize, Pause, Play, Projector, SkipBack, SkipForward } from 'lucide-react';

import Button from '@/ui/button/Button';
import { EnumButtonVariable } from '@/ui/button/button.types';

import { getTime } from '../../video-player.util';
import { ButtonVolume } from '../button-volume/ButtonVolume';
import { ENUM_TYPE_ACTIONS_CONTROLS, type IControlsProps } from '../controls.types';

import styles from './Content.module.scss';

interface IProps extends IControlsProps {
	onToggleVisibleBoxActions: (type?: ENUM_TYPE_ACTIONS_CONTROLS) => void;
}

export function Content({
	currentTime,
	videoTime,
	isPlaying,
	isMuted,
	isProjector,
	volume,
	onSkipTime,
	onTogglePlaying,
	onFullScreen,
	onToggleProjector,
	onToggleVisibleBoxActions
}: IProps) {
	return (
		<div className={styles.content}>
			<div className={styles.actions}>
				<strong className={styles.time}>
					{getTime(currentTime)} / {getTime(videoTime)}
				</strong>
			</div>
			<div className={styles.playing}>
				<Button
					variable={EnumButtonVariable.PLAIN_PRIMARY}
					onClick={() => onSkipTime()}
				>
					<span className='visually-hidden'>Skip back video</span>
					<SkipBack size={20} />
				</Button>
				<Button
					variable={EnumButtonVariable.CIRCLE}
					onClick={onTogglePlaying}
				>
					<span className='visually-hidden'>Playing video</span>
					{isPlaying ? <Pause size={20} /> : <Play size={20} />}
				</Button>
				<Button variable={EnumButtonVariable.PLAIN_PRIMARY}>
					<span className='visually-hidden'>Skip forward video</span>
					<SkipForward
						size={20}
						onClick={() => onSkipTime(true)}
					/>
				</Button>
			</div>
			<div className={styles.actions}>
				<div className={styles.quality}>
					<span className='visually-hidden'>Open video quality selection</span>
					<Button
						variable={EnumButtonVariable.PLAIN_PRIMARY}
						onClick={() => onToggleVisibleBoxActions(ENUM_TYPE_ACTIONS_CONTROLS.QUALITY)}
					>
						720p
					</Button>
				</div>
				<Button
					variable={EnumButtonVariable.PLAIN_ACCENT}
					isActive={isProjector}
					onClick={onToggleProjector}
				>
					<span className='visually-hidden'>Toggle mode projector</span>
					<Projector size={20} />
				</Button>
				<ButtonVolume
					volume={volume}
					isMuted={isMuted}
					label='Open video volume selection'
					onToggleVisibleBoxActions={onToggleVisibleBoxActions}
				/>
				<Button variable={EnumButtonVariable.PLAIN_PRIMARY}>
					<span className='visually-hidden'>Toggle video fullscreen</span>
					<Maximize
						size={20}
						onClick={onFullScreen}
					/>
				</Button>
			</div>
		</div>
	);
}
