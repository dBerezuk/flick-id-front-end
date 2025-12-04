import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useContext } from 'react';

import { useEffectScroll } from '@/hooks/useEffectScroll';

import { MediaContext } from '../Media';

import { mediaService } from '@/services/globals.service';
import type { IMediaFilterData, TMediaPaginate } from '@/types/media.types';

export const useAllMedia = (media: TMediaPaginate) => {
	const params = useParams<Pick<IMediaFilterData, 'catalogSlug'>>();

	const { searchParams, urlSearchParams } = useContext(MediaContext);

	const { data, isRefetching, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
		queryKey: [`media.all.${params.catalogSlug || ''}.${searchParams}`],
		queryFn: ({ pageParam }) =>
			mediaService.get<TMediaPaginate, IMediaFilterData>({
				objectQueries: {
					catalogSlug: params.catalogSlug,
					take: 12,
					skip: pageParam.skip
				},
				stringQueries: `?${searchParams}`
			}),
		initialData: {
			pages: [media],
			pageParams: [{ skip: 0 }]
		},
		initialPageParam: { skip: 0 },
		getNextPageParam: (lastPage, allPages) => {
			const countGetAllMedia = allPages
				.map(page => page.items.length)
				.reduce((acc, length) => acc + length, 0);

			return lastPage.isHasMore ? { skip: countGetAllMedia } : null;
		},
		refetchOnMount: false,
	});

	useEffectScroll({
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage
	});

	const allMedia = data?.pages.flatMap(page => page.items) || [];

	return {
		allMedia,
		isRefetching,
		isFetchingNextPage,
		urlSearchParams
	};
};
