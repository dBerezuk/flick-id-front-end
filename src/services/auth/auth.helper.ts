import Cookie from 'js-cookie';

import { COOKIE_OPTIONS } from '@/config/cookies.config';

import { EnumAuthTokens } from './auth.types';

class AuthHelper {
	constructor() {}

	getCookie(): string | undefined {
		return Cookie.get(EnumAuthTokens.ACCESS_TOKEN);
	}

	setCookie(accessToken: string): void {
		Cookie.set(EnumAuthTokens.ACCESS_TOKEN, accessToken, COOKIE_OPTIONS);
	}

	removeCookie(): void {
		Cookie.remove(EnumAuthTokens.ACCESS_TOKEN, COOKIE_OPTIONS);
	}
}

export const authHelper = new AuthHelper();
