import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { type ChangeEvent, useContext } from 'react';

import { MediaContext } from '@/components/media/Media';

import { SORTING_DEFAULT_OPTION_SELECTION, SORTING_SELECTION } from './selection.data';
import type { ISelectionProps } from './selection.types';
import { mediaFiltersService } from '@/services/globals.service';
import type { IMediaFilterData, TMediaFilter } from '@/types/media.types';

type TCatalogSlug = Pick<IMediaFilterData, 'catalogSlug'>;

export const useSelection = (type: ISelectionProps['type']) => {
	const params = useParams<TCatalogSlug>();

	const { onUpdateSearchParams, urlSearchParams } = useContext(MediaContext);

	const filters = useQuery({
		queryKey: ['media.filters'],
		queryFn: () =>
			mediaFiltersService.get<TMediaFilter[], TCatalogSlug>({
				objectQueries: {
					catalogSlug: params.catalogSlug
				}
			}),
		enabled: type === 'filters'
	});

	const data = type === 'filters' ? filters.data : SORTING_SELECTION;

	const getIsChecked = (name: string, value: string | number): boolean => {
		return type === 'sorting' && !urlSearchParams.has(name)
			? value === SORTING_DEFAULT_OPTION_SELECTION
			: urlSearchParams.getAll(name).includes(value.toString());
	};

	const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
		const currentElement = e.currentTarget;

		onUpdateSearchParams(currentElement.name, currentElement.value, type === 'filters' || false);
	};

	return { data, filters, getIsChecked, onSelect };
};
