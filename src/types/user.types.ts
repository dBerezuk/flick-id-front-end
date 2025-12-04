import type { IBaseResponse } from './base.types';
import type { IUserMediaWatchLater } from './user-media-watch-later';
import type { IAuthForm } from '@/services/auth/auth.types';

export interface IUser extends IBaseResponse {
	email: string;
	name?: string;
	avatarFileName?: string;
	isAdmin: boolean;
}

export interface IFullUser extends IUser {
	mediaWatchLaters: IUserMediaWatchLater[];
}

export type TUpdateUserData = Pick<IUser, 'email' | 'name' | 'avatarFileName'> &
	Pick<IAuthForm, 'password'>;

export type TAdminUpdateUserData = Omit<TUpdateUserData, 'password'> & Pick<IUser, 'isAdmin'>;
