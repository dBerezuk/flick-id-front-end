import { useMutation } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';

import { authAtom } from '@/store/auth.store';

import { mediaViewsService, usersMediaHistoryService } from '@/services/globals.service';
import type { IMedia } from '@/types/media.types';
import type { TAddUserMediaHistory } from '@/types/user-media-history';

export const useMedia = (media: IMedia) => {
	const { isAuth } = useAtomValue(authAtom);

	const { mutate: updateMediaViews } = useMutation({
		mutationKey: ['update.media.views'],
		mutationFn: () => mediaViewsService.post<IMedia>({ endpoints: `/${media.slug}` })
	});

	const { mutate: addUserMediaHistory } = useMutation({
		mutationKey: ['add.user.media.history'],
		mutationFn: () =>
			usersMediaHistoryService.post<TAddUserMediaHistory>({
				isAuth: true,
				body: {
					mediaId: media.id
				}
			})
	});

	useEffect(() => {
		updateMediaViews();

		isAuth && addUserMediaHistory();
	}, []);
};
