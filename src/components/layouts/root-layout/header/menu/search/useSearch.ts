import { useMutation } from '@tanstack/react-query';
import { type ChangeEvent, useEffect, useState } from 'react';

import { useDebounce } from '@/hooks/useDebounce';

import type { ISearchProps } from './search.types';
import { mediaService } from '@/services/globals.service';
import type { IMediaFilterData, TMediaPaginate } from '@/types/media.types';

export function useSearch({ isShowSearch, onShowSearch }: ISearchProps) {
	const [searchTerm, setSearchTerm] = useState('');

	const debounceSearchTerm = useDebounce(searchTerm);

	const {
		mutate: searchMedia,
		data,
		isPending,
		isIdle
	} = useMutation({
		mutationKey: ['search.media'],
		mutationFn: () =>
			mediaService.get<TMediaPaginate, IMediaFilterData>({
				objectQueries: {
					search: debounceSearchTerm
				}
			})
	});

	useEffect(() => {
		debounceSearchTerm && searchMedia();
	}, [debounceSearchTerm]);

	const onChangeSearchTerm = (event: ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(event.currentTarget.value);

	const onSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();

		isShowSearch ? searchMedia() : onShowSearch();
	};

	return { data, isPending, isIdle, debounceSearchTerm, onChangeSearchTerm, onSearch };
}
