'use client';

import { createContext } from 'react';

import { AllMedia } from '@/components/media/all-media/AllMedia';
import { PopularMedia } from '@/components/media/popular-media/PopularMedia';

import { Genres } from './genres/Genres';
import { useMediaFilters } from './useMediaFilters';
import type { IGenre } from '@/types/genre.types';
import type { TMediaPaginate } from '@/types/media.types';

interface IProps {
	title: string;
	popularMedia: TMediaPaginate;
	genres: IGenre[];
	media: TMediaPaginate;
}

interface IMediaContext {
	urlSearchParams: URLSearchParams;
	searchParams: string;
	isSearchParamsUpdated: boolean;
	onUpdateSearchParams: (name: string, value: string, isMultiple?: boolean) => void;
	onClear: () => void;
}

export const MediaContext = createContext<IMediaContext>({} as IMediaContext);

export function Media({ title, popularMedia, genres, media }: IProps) {
	const { urlSearchParams, searchParams, onUpdateSearchParams, isSearchParamsUpdated, onClear } =
		useMediaFilters();

	return (
		<MediaContext
			value={{
				urlSearchParams,
				searchParams,
				onUpdateSearchParams,
				isSearchParamsUpdated,
				onClear
			}}
		>
			<h1 className='visually-hidden'>{title}</h1>
			<div className='mb-10'>
				<PopularMedia media={popularMedia} />
			</div>
			<div className='mb-10'>
				<Genres genres={genres} />
			</div>
			<AllMedia media={media} />
		</MediaContext>
	);
}
