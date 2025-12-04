import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useContext } from 'react';

import { PresentationMediaItem } from '@/components/collections/media-items/presentation-media-item/PresentationMediaItem';

import { Skeleton } from '@/ui/skeleton/Skeleton';

import { MediaContext } from '../Media';

import { mediaService } from '@/services/globals.service';
import type { IMediaFilterData, TMediaPaginate } from '@/types/media.types';

import styles from './PopularMedia.module.scss';

interface IProps {
	media: TMediaPaginate;
}

export function PopularMedia({ media }: IProps) {
	const params = useParams<Pick<IMediaFilterData, 'catalogSlug'>>();
	const { urlSearchParams, isSearchParamsUpdated } = useContext(MediaContext);

	const { data, isRefetching } = useQuery({
		queryKey: [`media.popular.${params.catalogSlug || ''}.${urlSearchParams.get('genreId') || ''}`],
		queryFn: () =>
			mediaService.get<TMediaPaginate, IMediaFilterData>({
				objectQueries: {
					catalogSlug: params.catalogSlug,
					sorting: 'popular',
					take: 2,
					genreId: urlSearchParams.get('genreId') || undefined
				}
			}),
		placeholderData: media,
		enabled: isSearchParamsUpdated
	});

	return (
		<section className='container'>
			<h2 className='visually-hidden'>Popular media</h2>
			<div className={styles.media}>
				{isRefetching ? (
					<Skeleton
						className={styles.skeleton}
						count={2}
					/>
				) : data?.items.length ? (
					<>
						{data.items.map(item => (
							<PresentationMediaItem
								media={item}
								key={item.id}
							/>
						))}
						<Skeleton
							className={styles.stub}
							count={data.items.length === 1 ? 1 : 0}
						/>
					</>
				) : (
					<Skeleton
						className={styles.stub}
						count={2}
					/>
				)}
			</div>
		</section>
	);
}
