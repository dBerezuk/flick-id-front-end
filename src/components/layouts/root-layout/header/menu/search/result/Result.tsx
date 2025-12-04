import cn from 'clsx';

import { SearchMediaItem } from '@/components/collections/media-items/search-media-item/SearchMediaItem';

import { Skeleton } from '@/ui/skeleton/Skeleton';
import { EnumSkeletonVariable } from '@/ui/skeleton/skeleton.types';

import type { TMediaPaginate } from '@/types/media.types';

import styles from './Result.module.scss';

interface IProps {
	isShow: boolean;
	isPending: boolean;
	data: TMediaPaginate | undefined;
}

export function Result({ isShow, isPending, data }: IProps) {
	return (
		<div className={cn(styles.result, isShow && styles.isVisibledResult)}>
			{isPending ? (
				<Skeleton
					className={styles.skeleton}
					variable={EnumSkeletonVariable.DARK}
					count={1}
				/>
			) : data?.items.length ? (
				data.items.map(media => (
					<SearchMediaItem
						media={media}
						key={media.id}
					/>
				))
			) : (
				<p className={styles.text}>Not found media</p>
			)}
		</div>
	);
}
