import cn from 'clsx';
import { Volume, Volume1, Volume2, VolumeX, X } from 'lucide-react';
import type { CSSProperties, ChangeEvent } from 'react';

import Button from '@/ui/button/Button';
import { EnumButtonVariable } from '@/ui/button/button.types';

import { ENUM_TYPE_ACTIONS_CONTROLS } from '../controls.types';

import styles from './BoxActions.module.scss';
import { ButtonVolume } from '../button-volume/ButtonVolume'

interface IProps {
	type: ENUM_TYPE_ACTIONS_CONTROLS;
	volume: number;
	isMuted: boolean;
	onChangeVolume: (event: ChangeEvent<HTMLInputElement>) => void;
	onToggleMutedVolume: () => void;
	onToggleVisible: (type?: ENUM_TYPE_ACTIONS_CONTROLS) => void;
}

export function BoxActions({
	type,
	volume,
	isMuted,
	onChangeVolume,
	onToggleMutedVolume,
	onToggleVisible
}: IProps) {
	return (
		<div className={styles.boxActions}>
			{type === ENUM_TYPE_ACTIONS_CONTROLS.QUALITY ? (
				<ul>
					<li>
						<Button variable={EnumButtonVariable.PLAIN_PRIMARY}>2280p</Button>
					</li>
					<li>
						<Button variable={EnumButtonVariable.PLAIN_PRIMARY}>1440p</Button>
					</li>
					<li>
						<Button variable={EnumButtonVariable.PLAIN_PRIMARY}>1024p</Button>
					</li>
					<li>
						<Button variable={EnumButtonVariable.PLAIN_PRIMARY}>720p</Button>
					</li>
					<li>
						<Button variable={EnumButtonVariable.PLAIN_PRIMARY}>480p</Button>
					</li>
					<li>
						<Button variable={EnumButtonVariable.PLAIN_PRIMARY}>360p</Button>
					</li>
				</ul>
			) : (
				<div className={styles.volume}>
					<ButtonVolume
						volume={volume}
						isMuted={isMuted}
						label='Toggle video muted'
						onToggleMutedVolume={onToggleMutedVolume}
					/>
					<input
						min={0}
						className={cn(isMuted && styles.isMuted)}
						value={isMuted ? 0 : volume}
						max={1}
						step={0.05}
						type='range'
						style={
							{
								'--width-progress': `${volume * 100}%`
							} as CSSProperties
						}
						onChange={onChangeVolume}
					/>
				</div>
			)}
			<Button
				variable={EnumButtonVariable.PLAIN_PRIMARY}
				onClick={() => onToggleVisible()}
			>
				<span className='visually-hidden'>Close box actions</span>
				<X />
			</Button>
		</div>
	);
}
