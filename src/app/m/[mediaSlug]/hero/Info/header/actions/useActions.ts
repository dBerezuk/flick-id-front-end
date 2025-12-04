import { useMutation } from '@tanstack/react-query';
import { useAtomValue, useSetAtom } from 'jotai';

import { authAtom, updateUserItemAuthAtom } from '@/store/auth.store';

import { usersMediaWatchLaterService } from '@/services/globals.service';
import type { IMedia } from '@/types/media.types';
import type { TToggleUserMediaWatchLater } from '@/types/user-media-watch-later';

export const useActions = (id: IMedia['id']) => {
	const { user, isLoading, isAuth } = useAtomValue(authAtom);
	const setUpdateUserItemAuth = useSetAtom(updateUserItemAuthAtom);

	const isAddedToWatchLater = user?.mediaWatchLaters.some(watchLater => watchLater.mediaId === id);

	const { mutate: toggleUserMediaWatchLater, isPending } = useMutation({
		mutationKey: ['toggle.user.media.watch.later'],
		mutationFn: () =>
			usersMediaWatchLaterService.post<TToggleUserMediaWatchLater>({
				isAuth: true,
				body: {
					mediaId: id
				}
			}),
		onSuccess: ({ data }) => {
			setUpdateUserItemAuth('mediaWatchLaters', data, 'mediaId', id);
		}
	});

	return { isAuth, isLoading, isAddedToWatchLater, isPending, toggleUserMediaWatchLater };
};
