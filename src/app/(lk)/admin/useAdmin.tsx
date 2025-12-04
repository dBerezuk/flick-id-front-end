import { useQuery } from '@tanstack/react-query';

import { statisticsService } from '@/services/globals.service';
import type { IStatistics } from '@/types/statistics.types';

export const useAdmin = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['statistics'],
		queryFn: () =>
			statisticsService.get<IStatistics>({
				isAuth: true
			})
	});

	const datesCreatesByDayLastWeekUsers =
		data?.users?.createsByDayLastWeek.map(({ date }) => date) ?? [];
	const countsCreatesByDayLastWeekUsers =
		data?.users?.createsByDayLastWeek.map(({ count }) => count) ?? [];

	const datesCreatesByDayLastWeekMedia =
		data?.media?.createsByDayLastWeek.map(({ date }) => date) ?? [];
	const countsCreatesByDayLastWeekMedia =
		data?.media?.createsByDayLastWeek.map(({ count }) => count) ?? [];

	return {
		data,
		isLoading,
		datesCreatesByDayLastWeekUsers,
		countsCreatesByDayLastWeekUsers,
		datesCreatesByDayLastWeekMedia,
		countsCreatesByDayLastWeekMedia
	};
};
