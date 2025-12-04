import cn from 'clsx';
import type { LucideIcon } from 'lucide-react';
import type { Ref } from 'react';

import { Selection } from './selection/Selection';

import styles from './ItemAction.module.scss';

interface IProps {
	ref: Ref<HTMLLIElement>;
	type?: 'sorting' | 'filters';
	Icon: LucideIcon;
	isShow: boolean;
	onShowToggle: () => void;
}

export function ItemAction({ ref, type, Icon, isShow, onShowToggle }: IProps) {
	return (
		<li
			className={styles.item}
			ref={ref}
		>
			<button
				className={cn('group', styles.button, isShow && styles.active)}
				type='button'
				onClick={onShowToggle}
			>
				<Icon
					className='group-hover:scale-110'
					size={16}
				/>
			</button>
			{isShow && <Selection type={type} />}
		</li>
	);
}
