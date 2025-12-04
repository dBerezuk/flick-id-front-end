import { atom } from 'jotai';

import { authHelper } from '@/services/auth/auth.helper';
import type { IFullUser } from '@/types/user.types';

interface IAuthStore {
	isAuth: boolean;
	isLoading: boolean;
	user: IFullUser | null;
}

export const authAtom = atom<IAuthStore>({
	isAuth: !!authHelper.getCookie(),
	isLoading: true,
	user: null
});

export const loadingStartAuthAtom = atom(null, (get, set) => {
	set(authAtom, {
		...get(authAtom),
		isLoading: true
	});
});

export const initAuthAtom = atom(null, (_, set, user: IFullUser) => {
	set(authAtom, {
		isAuth: true,
		isLoading: false,
		user: user
	});
});

export const updateUserAuthAtom = atom(null, (get, set, user: IFullUser) => {
	set(authAtom, {
		...get(authAtom),
		user: user
	});
});

export const updateUserItemAuthAtom = atom(
	null,
	(get, set, field: keyof IFullUser, data: any, itemFieldName?: string, itemFieldValue?: any) => {
		const auth = get(authAtom);
		const user = auth.user;

		if (!user || (!data && (!itemFieldName || !itemFieldValue))) return;

		const fieldValue = user[field];

		let updatedValue;

		if (Array.isArray(fieldValue)) {
			updatedValue = data
				? [...fieldValue, data]
				: fieldValue.filter(item => item[itemFieldName as keyof typeof item] !== itemFieldValue);
		} else {
			updatedValue = data;
		}

		set(authAtom, {
			...auth,
			user: {
				...user,
				[field]: updatedValue
			}
		});
	}
);

export const clearAuthAtom = atom(null, (_, set) => {
	set(authAtom, {
		isAuth: false,
		isLoading: false,
		user: null
	});
});
