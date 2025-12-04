import { cookies } from 'next/headers';

import { EnumAuthTokens } from '@/services/auth/auth.types';

interface IGetTokens {
	accessToken: string | undefined;
	refreshToken: string | undefined;
}

export const getTokens = async (): Promise<IGetTokens> => {
	const cookiesHeaders = await cookies();

	const accessToken = cookiesHeaders.get(EnumAuthTokens.ACCESS_TOKEN)?.value;
	const refreshToken = cookiesHeaders.get(EnumAuthTokens.REFRESH_TOKEN)?.value;

	return { accessToken, refreshToken };
};
