import { useQuery } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { clearAuthAtom, initAuthAtom } from '@/store/auth.store';

import { usersProfileService } from '@/services/globals.service';
import type { IFullUser } from '@/types/user.types';

export function useProfile() {
	const setInitAuth = useSetAtom(initAuthAtom);
	const setClearAuthAtom = useSetAtom(clearAuthAtom);

	const { data, isSuccess, isError } = useQuery({
		queryKey: ['user.profile'],
		queryFn: () => usersProfileService.get<IFullUser>({ isAuth: true }),
		refetchInterval: 30 * 60000
	});

	useEffect(() => {
		if (isSuccess) {
			setInitAuth(data);
		}
	}, [isSuccess, data]);

	useEffect(() => {
		if (isError) setClearAuthAtom();
	}, [isError]);
}
