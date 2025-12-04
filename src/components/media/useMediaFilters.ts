import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { updateSearchParams } from '@/utils/update-search-params';

export function useMediaFilters() {
	const [isSearchParamsUpdated, setIsSearchParamsUpdated] = useState<boolean>(false);
	const [searchParams, setSearchParams] = useState<string>(useSearchParams().toString());

	const urlSearchParams = new URLSearchParams(searchParams);

	const onUpdateSearchParams = (name: string, value: string, isMultiple?: boolean) => {
		if (isMultiple) {
			if (!urlSearchParams.has(name, value)) {
				urlSearchParams.append(name, value);
			} else {
				urlSearchParams.delete(name, value);
			}
		} else {
			if (value) {
				urlSearchParams.set(name, value);
			} else {
				urlSearchParams.delete(name);
			}
		}

		const strUrlSearchParams = urlSearchParams.toString();

		updateSearchParams(strUrlSearchParams);
		setIsSearchParamsUpdated(true);
		setSearchParams(strUrlSearchParams);
	};

	const onClear = () => {
		updateSearchParams('');
		setIsSearchParamsUpdated(true);
		setSearchParams('');
	};

	return { urlSearchParams, searchParams, onUpdateSearchParams, isSearchParamsUpdated, onClear };
}
