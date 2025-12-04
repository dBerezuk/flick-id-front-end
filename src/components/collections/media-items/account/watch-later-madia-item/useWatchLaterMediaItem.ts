import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';

import { updateUserItemAuthAtom } from '@/store/auth.store';

import { isFetching } from '@/utils/check';

import { usersMediaWatchLaterService } from '@/services/globals.service';
import type { IMedia } from '@/types/media.types';
import type { TToggleUserMediaWatchLater } from '@/types/user-media-watch-later';

export const useWatchLaterMediaItem = (mediaId: IMedia['id']) => {
	const setUpdateUserItemAuth = useSetAtom(updateUserItemAuthAtom);

	const queryClient = useQueryClient();

	const { mutate: toggleUserMediaWatchLater, isPending } = useMutation({
		mutationKey: ['toggle.user.media.watch.later'],
		mutationFn: () =>
			usersMediaWatchLaterService.post<TToggleUserMediaWatchLater>({
				isAuth: true,
				body: {
					mediaId
				}
			}),
		onSuccess: ({ data }) => {
			queryClient.invalidateQueries({ queryKey: ['all.user.media.watch.later'] });

			setUpdateUserItemAuth('mediaWatchLaters', data, 'mediaId', mediaId);
		}
	});

	const isLoading =
		isFetching(queryClient.getQueryState(['all.user.media.watch.later'])?.fetchStatus) || isPending;

	return {
		toggleUserMediaWatchLater,
		isLoading
	};
};
