import type { Metadata } from 'next';

import { Media } from '@/components/media/Media';

import { genresService, mediaService } from '@/services/globals.service';
import type { IGenre } from '@/types/genre.types';
import type { IMediaFilterData, TMediaPaginate } from '@/types/media.types';
import type { IPage } from '@/types/page.types';

export const metadata: Metadata = {
	title: 'Home'
};

export default async function page({ searchParams }: IPage<{}, IMediaFilterData>) {
	const queryParams = await searchParams;

	const popularMedia = await mediaService.get<TMediaPaginate, IMediaFilterData>({
		objectQueries: {
			sorting: 'popular',
			take: 2,
			genreId: queryParams.genreId
		}
	});

	const genres = await genresService.get<IGenre[]>();

	const media = await mediaService.get<TMediaPaginate>({
		objectQueries: {
			take: 12,
			skip: 0,
			...queryParams
		}
	});

	return (
		<Media
			title='Home'
			popularMedia={popularMedia}
			genres={genres}
			media={media}
		/>
	);
}
