import { Volume, Volume1, Volume2, VolumeX } from 'lucide-react';

import Button from '@/ui/button/Button';
import { EnumButtonVariable } from '@/ui/button/button.types';

import { ENUM_TYPE_ACTIONS_CONTROLS, type IControlsProps } from '../controls.types';

interface IProps extends Pick<IControlsProps, 'volume' | 'isMuted'> {
	label: string;
	onToggleMutedVolume?: () => void;
	onToggleVisibleBoxActions?: (type?: ENUM_TYPE_ACTIONS_CONTROLS) => void;
}

export function ButtonVolume({
	volume,
	isMuted,
	label,
	onToggleMutedVolume,
	onToggleVisibleBoxActions
}: IProps) {
	const onClick = () =>
		onToggleMutedVolume
			? onToggleMutedVolume()
			: onToggleVisibleBoxActions && onToggleVisibleBoxActions(ENUM_TYPE_ACTIONS_CONTROLS.VOLUME);

	return (
		<Button
			variable={EnumButtonVariable.PLAIN_PRIMARY}
			onClick={onClick}
		>
			<span className='visually-hidden'>{label}</span>
			{isMuted ? (
				<VolumeX size={20} />
			) : volume === 0 ? (
				<Volume size={20} />
			) : volume < 0.4 ? (
				<Volume1 size={20} />
			) : (
				<Volume2 size={20} />
			)}
		</Button>
	);
}
