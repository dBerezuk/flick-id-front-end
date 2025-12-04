import type { Metadata } from 'next';

import { Media } from '@/components/media/Media';

import { catalogsService, genresService, mediaService } from '@/services/globals.service';
import type { ICatalog } from '@/types/catalog.types';
import type { IGenre } from '@/types/genre.types';
import type { IMediaFilterData, TMediaPaginate } from '@/types/media.types';
import type { IPage } from '@/types/page.types';

type TProps = IPage<
	Required<Pick<IMediaFilterData, 'catalogSlug'>>,
	Omit<IMediaFilterData, 'catalogSlug' | 'take' | 'skip'>
>;

export async function generateMetadata({ params }: TProps): Promise<Metadata> {
	const endpoints = await params;

	return {
		title: endpoints.catalogSlug
	};
}

export async function generateStaticParams() {
	const catalog = await catalogsService.get<ICatalog[]>();

	return catalog.map(({ slug }) => ({
		catalogSlug: slug
	}));
}

export default async function page({ params, searchParams }: TProps) {
	const endpoints = await params;
	const queryParams = await searchParams;

	const popularMedia = await mediaService.get<TMediaPaginate, IMediaFilterData>({
		objectQueries: {
			sorting: 'popular',
			take: 2,
			catalogSlug: endpoints.catalogSlug,
			genreId: queryParams.genreId
		}
	});

	const genres = await genresService.get<IGenre[]>();

	const media = await mediaService.get<TMediaPaginate, IMediaFilterData>({
		objectQueries: {
			take: 12,
			catalogSlug: endpoints.catalogSlug,
			...queryParams
		}
	});

	return (
		<Media
			title={endpoints.catalogSlug}
			popularMedia={popularMedia}
			genres={genres}
			media={media}
		/>
	);
}
