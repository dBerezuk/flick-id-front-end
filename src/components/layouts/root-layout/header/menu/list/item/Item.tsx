import clsx from 'clsx';
import Link from 'next/link';

import type { IProps } from './item.types';

import styles from './Item.module.scss';

export function Item({ href, isActive, children }: IProps) {
	return (
		<li className={clsx(styles.item, isActive && styles.active)}>
			<Link href={href}>{children}</Link>
		</li>
	);
}
