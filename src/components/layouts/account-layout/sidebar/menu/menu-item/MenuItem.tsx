import cn from 'clsx';
import Link from 'next/link';

import type { IMenuItem } from '../menu.types';

import styles from './MenuItem.module.scss';

interface IProps {
	isActive: boolean;
	data: IMenuItem;
}

export function MenuItem({ isActive, data }: IProps) {
	return (
		<li className={cn(styles.item, isActive && styles.active)}>
			<Link href={data.path}>
				<data.Icon
					className={styles.icon}
					size={20}
				/>
				<span>{data.title}</span>
			</Link>
		</li>
	);
}
