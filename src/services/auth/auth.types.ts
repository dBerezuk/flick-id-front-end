import { EnumCookieKeys } from '@/config/cookies.config';

import type { IBaseResponse } from '@/types/base.types';
import type { IFullUser, IUser } from '@/types/user.types';

export enum EnumAuthTokens {
	ACCESS_TOKEN = EnumCookieKeys.ACCESS_TOKEN,
	REFRESH_TOKEN = EnumCookieKeys.REFRESH_TOKEN
}

export enum EnumTypeAuth {
	REGISTRATION = 'registration',
	LOGIN = 'login'
}

export interface IAuthForm {
	email: string;
	password: string;
}

export interface IAuthTokens {
	accessToken: string;
	refreshToken: string;
}

export interface IAuthResponse extends Pick<IAuthTokens, 'accessToken'> {
	user: IFullUser;
}

export interface IAuthPayloadJwtToken {
	sub: IBaseResponse['id'];
	isAdmin: IUser['isAdmin'];
	type: 'access' | 'refresh';
	iat: number;
	exp: number;
}
