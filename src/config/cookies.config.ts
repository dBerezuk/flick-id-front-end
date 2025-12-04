import Cookies from 'js-cookie';

export const COOKIE_OPTIONS: Cookies.CookieAttributes = {
	domain: 'localhost',
	sameSite: 'strict',
	expires: 1 / 24,
	secure: false
};

export enum EnumCookieKeys {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken',

	IS_COLLAPSED_ACCOUNT_SIDEBAR = 'isCollapsedAccountSidebar'
}
