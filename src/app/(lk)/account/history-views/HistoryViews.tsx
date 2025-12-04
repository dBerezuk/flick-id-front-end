'use client';

import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';

import { HistoryMediaItem } from '@/components/collections/media-items/account/history-media-item/HistoryMediaItem';
import { Content } from '@/components/layouts/account-layout/content/Content';

import { Skeleton } from '@/ui/skeleton/Skeleton';
import { EnumSkeletonVariable } from '@/ui/skeleton/skeleton.types';

import { usersMediaHistoryService } from '@/services/globals.service';
import type { IUserMediaHistory } from '@/types/user-media-history';

import styles from './HistoryViews.module.scss';

const DynamicHistoryViewsActions = dynamic(
	() => import('./HistoryViewsActions').then(mod => mod.HistoryViewsActions),
	{
		loading: () => (
			<Skeleton
				className={styles.skeletonActions}
				variable={EnumSkeletonVariable.SECONDARY}
			/>
		)
	}
);

export function HistoryViews() {
	const { data, isLoading } = useQuery({
		queryKey: ['all.user.media.history'],
		queryFn: () => usersMediaHistoryService.get<IUserMediaHistory[]>({ isAuth: true })
	});

	return (
		<Content
			titlePage='History views'
			titleSection='History views'
			actions={<DynamicHistoryViewsActions />}
		>
			<div className={styles.history}>
				{isLoading ? (
					<Skeleton
						className={styles.skeletonHistory}
						count={2}
						variable={EnumSkeletonVariable.SECONDARY}
					/>
				) : data?.length ? (
					data.map(history => (
						<HistoryMediaItem
							media={history.media}
							key={history.id}
						/>
					))
				) : (
					<p>The story is empty</p>
				)}
			</div>
		</Content>
	);
}
