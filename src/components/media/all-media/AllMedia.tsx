import { MediaItem } from '@/components/collections/media-items/media-item/MediaItem';

import { Skeleton } from '@/ui/skeleton/Skeleton';

import { Actions } from './actions/Actions';
import { SORTING_DEFAULT_OPTION_SELECTION } from './actions/item-action/selection/selection.data';
import { useAllMedia } from './useAllMedia';
import type { TMediaPaginate } from '@/types/media.types';

import styles from './AllMedia.module.scss';

interface IProps {
	media: TMediaPaginate;
}

export function AllMedia({ media }: IProps) {
	const { allMedia, isRefetching, isFetchingNextPage, urlSearchParams } = useAllMedia(media);

	return (
		<section className='container'>
			<header className={styles.header}>
				<h2>All {urlSearchParams.get('sorting') || SORTING_DEFAULT_OPTION_SELECTION} media</h2>
				<Actions />
			</header>
			<div className={styles.media}>
				{isRefetching ? (
					<Skeleton
						className={styles.skeleton}
						count={12}
					/>
				) : allMedia?.length ? (
					<>
						{allMedia.map(item => (
							<MediaItem
								media={item}
								key={item.id}
							/>
						))}
						{isFetchingNextPage && (
							<Skeleton
								className={styles.skeleton}
								count={12}
							/>
						)}
					</>
				) : (
					<p>Not found media</p>
				)}
			</div>
		</section>
	);
}
