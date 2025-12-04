'use server';

import { NextRequest, NextResponse } from 'next/server';

import { PUBLIC_PAGES } from '@/config/pages/public-pages.config';

import { getTokens } from './utils/get-tokens.util';
import { jwtVerify } from './utils/jwt-verify.util';
import { EnumAuthTokens } from '@/services/auth/auth.types';

export const protectPrivatePages = async (request: NextRequest) => {
	const { accessToken, refreshToken } = await getTokens();

	const verifiedAccessTokenData = await jwtVerify(accessToken);
	const verifiedRefreshTokenData = await jwtVerify(refreshToken);

	if (!verifiedAccessTokenData && !verifiedRefreshTokenData) {
		request.cookies.delete(EnumAuthTokens.ACCESS_TOKEN);
		request.cookies.delete(EnumAuthTokens.REFRESH_TOKEN);

		return NextResponse.redirect(new URL(PUBLIC_PAGES.AUTH, request.url));
	}

	return NextResponse.next();
};
