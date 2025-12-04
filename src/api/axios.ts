import axios, { AxiosError, type CreateAxiosDefaults } from 'axios';

import type { TAxiosOriginalRequest } from './axios.types';
import { authHelper } from '@/services/auth/auth.helper';
import { authService } from '@/services/auth/auth.service';
import type { IBaseErrorResponse } from '@/types/base.types';

const options: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_URL_API,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
};

const workingError = async (error: AxiosError): Promise<void> => {
	const { toast } = await import('react-hot-toast');

	const data = error.response?.data as IBaseErrorResponse;

	if (
		data &&
		!data.fields &&
		data.message !== 'Invalid refresh token' &&
		typeof window !== 'undefined'
	) {
		toast.error(data.message, { id: 'global-error' });
	}

	throw error;
};

export const axiosClassic = axios.create(options);

axiosClassic.interceptors.response.use(response => response, workingError);

export const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${authHelper.getCookie()}`;

	return config;
});

axiosWithAuth.interceptors.response.use(
	response => response,
	async (error: AxiosError) => {
		const originalRequest = error.config as TAxiosOriginalRequest;

		if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				await authService.getNewTokens();

				return axiosWithAuth.request(originalRequest);
			} catch (error) {
				authHelper.removeCookie();

				throw error;
			}
		}

		await workingError(error);
	}
);
