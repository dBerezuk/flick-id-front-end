import { axiosClassic, axiosWithAuth } from '@/api/axios';

import { authHelper } from './auth.helper';
import type { EnumTypeAuth, IAuthForm, IAuthResponse } from './auth.types';

class AuthService {
	public AUTH_PATH: string = '/auth';

	constructor() {}

	async main(type: EnumTypeAuth, formData: IAuthForm) {
		const data = await axiosClassic.post<IAuthResponse>(`${this.AUTH_PATH}/${type}`, formData);

		authHelper.setCookie(data.data.accessToken);

		return data;
	}

	async getNewTokens() {
		const data = await axiosClassic.get<IAuthResponse>(`${this.AUTH_PATH}/new-tokens`);

		authHelper.setCookie(data.data.accessToken);

		return data;
	}

	async logout() {
		const data = await axiosWithAuth.get<boolean>(`${this.AUTH_PATH}/logout`);

		authHelper.removeCookie();

		return data;
	}
}

export const authService = new AuthService();
