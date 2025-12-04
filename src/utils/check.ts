import type { FetchStatus } from '@tanstack/react-query';

export const isFetching = (status: FetchStatus | undefined): boolean => status === 'fetching';
