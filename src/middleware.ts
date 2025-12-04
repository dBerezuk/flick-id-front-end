import { NextRequest } from 'next/server';

import { PRIVATE_PAGES } from './config/pages/private-pages.config';
import { PUBLIC_PAGES } from './config/pages/public-pages.config';
import { protectAuthPages } from './server-actions/middlewares/protect-auth-pages';
import { protectPrivatePages } from './server-actions/middlewares/protect-private-pages';

export async function middleware(request: NextRequest) {
	const url: URL = new URL(request.url);
	const pathname: string = url.pathname;

	if (pathname.includes(PUBLIC_PAGES.AUTH)) {
		return protectAuthPages(request);
	}

	if (pathname.includes(PRIVATE_PAGES.ACCOUNT) || pathname.includes(PRIVATE_PAGES.ADMIN)) {
		return protectPrivatePages(request);
	}
}

export const config = {
	matcher: ['/auth/:path*', '/account/:path*', '/admin/:path*']
};
