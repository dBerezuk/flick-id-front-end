'use server';

import * as jose from 'jose';

import type { IAuthPayloadJwtToken } from '@/services/auth/auth.types';

export const jwtVerify = async (
	token: string | undefined
): Promise<IAuthPayloadJwtToken | null> => {
	try {
		if (!token) throw new Error();

		const { payload }: { payload: IAuthPayloadJwtToken } = await jose.jwtVerify(
			token,
			new TextEncoder().encode(process.env.AUTH_SECRET),
			{
				issuer: process.env.AUTH_ISSUER,
				audience: process.env.AUTH_AUDIENCE
			}
		);

		return payload;
	} catch {
		return null;
	}
};
