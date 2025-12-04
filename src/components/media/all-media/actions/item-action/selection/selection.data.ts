import type { TMediaFilter } from '@/types/media.types';

export const SORTING_DEFAULT_OPTION_SELECTION: string = 'new';

export const SORTING_SELECTION: TMediaFilter[] = [
	['sorting', ['popular', SORTING_DEFAULT_OPTION_SELECTION, 'old']]
];
