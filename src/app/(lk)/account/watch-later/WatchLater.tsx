'use client';

import { useQuery } from '@tanstack/react-query';

import { WatchLaterMediaItem } from '@/components/collections/media-items/account/watch-later-madia-item/WatchLaterMediaItem';
import { Content } from '@/components/layouts/account-layout/content/Content';

import { Skeleton } from '@/ui/skeleton/Skeleton';
import { EnumSkeletonVariable } from '@/ui/skeleton/skeleton.types';

import { usersMediaWatchLaterService } from '@/services/globals.service';
import type { IUserMediaWatchLaterWithMedia } from '@/types/user-media-watch-later';

import styles from './WatchLater.module.scss';

export function WatchLater() {
	const { data, isLoading } = useQuery({
		queryKey: ['all.user.media.watch.later'],
		queryFn: () =>
			usersMediaWatchLaterService.get<IUserMediaWatchLaterWithMedia[]>({ isAuth: true })
	});

	return (
		<Content
			titlePage='Watch later'
			titleSection='Watch later'
		>
			<div className={styles.watch}>
				{isLoading ? (
					<Skeleton
						className={styles.skeletonWatch}
						count={2}
						variable={EnumSkeletonVariable.SECONDARY}
					/>
				) : data?.length ? (
					data.map(watchLater => (
						<WatchLaterMediaItem
							media={watchLater.media}
							key={watchLater.id}
						/>
					))
				) : (
					<p>See later empty</p>
				)}
			</div>
		</Content>
	);
}
