'use client';

import { AnalyticCharCard } from '@/ui/analytic-char-card/AnalyticCharCard';

import COLOR_CONSTANTS from '@/constants/color.constants';

import { useAdmin } from './useAdmin';

import styles from './Admin.module.scss';

export function Admin() {
	const {
		data,
		isLoading,
		datesCreatesByDayLastWeekUsers,
		countsCreatesByDayLastWeekUsers,
		datesCreatesByDayLastWeekMedia,
		countsCreatesByDayLastWeekMedia
	} = useAdmin();

	return (
		<div className={styles.inner}>
			<AnalyticCharCard
				title='New users in 7 days'
				total={`${data?.users.totalUsers} users`}
				labels={datesCreatesByDayLastWeekUsers}
				colors={[COLOR_CONSTANTS.green[300]]}
				strokeColors={[COLOR_CONSTANTS.green[500]]}
				isLoading={isLoading}
				series={[
					{
						name: 'Users',
						data: countsCreatesByDayLastWeekUsers
					}
				]}
			/>
			<AnalyticCharCard
				title='New media in 7 days'
				total={`${data?.media.totalMedia} media`}
				labels={datesCreatesByDayLastWeekMedia}
				colors={[COLOR_CONSTANTS.violet[300]]}
				strokeColors={[COLOR_CONSTANTS.violet[500]]}
				isLoading={isLoading}
				series={[
					{
						name: 'Media',
						data: countsCreatesByDayLastWeekMedia
					}
				]}
			/>
		</div>
	);
}
