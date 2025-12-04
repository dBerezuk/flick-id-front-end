import cn from 'clsx';

import { EnumSkeletonVariable, type ISkeletonProps } from './skeleton.types';

import styles from './Skeleton.module.scss';

export function Skeleton({
	count = 1,
	variable = EnumSkeletonVariable.PRIMARY,
	className,
	style
}: ISkeletonProps) {
	return Array.from({ length: count }).map((_, index) => (
		<div
			className={cn(styles.item, styles[variable], className)}
			style={style}
			key={index}
		/>
	));
}
