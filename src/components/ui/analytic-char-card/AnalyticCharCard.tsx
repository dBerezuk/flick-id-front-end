import cn from 'clsx';
import dynamic from 'next/dynamic';

import { Skeleton } from '../skeleton/Skeleton';

import { getAnalyticCharCardOptions } from './analytic-char-card.data';
import type { IAnalyticCharCardProps } from './analytic-char-card.types';

import styles from './AnalyticCharCard.module.scss';

const DynamicChart = dynamic(() => import('react-apexcharts'), {
	loading: () => (
		<Skeleton
			className={styles.skeletonBody}
			style={{
				height: 120
			}}
		/>
	)
});

export function AnalyticCharCard({
	title,
	total,
	series,
	className,
	colors,
	strokeColors,
	labels,
	options,
	isLoading
}: IAnalyticCharCardProps) {
	const initialOptions = getAnalyticCharCardOptions({ colors, strokeColors, labels, options });
	const charHeight = options?.chart?.height ?? initialOptions.chart?.height;

	return (
		<article className={cn(styles.card, className)}>
			<header className={styles.header}>
				<h3 className={styles.title}>{title}</h3>
				{isLoading ? (
					<Skeleton className={styles.skeletonTotal} />
				) : (
					total && (
						<span
							className={styles.total}
							style={{ color: colors[0] }}
						>
							Total {total}
						</span>
					)
				)}
			</header>
			<div className={styles.body}>
				{isLoading ? (
					<Skeleton
						className={styles.skeletonBody}
						style={{
							height: charHeight
						}}
					/>
				) : (
					<div className={styles.body}>
						<DynamicChart
							options={{
								...initialOptions
							}}
							series={series}
							type={options?.chart?.type ?? initialOptions.chart?.type}
							height={charHeight}
						/>
					</div>
				)}
			</div>
		</article>
	);
}
