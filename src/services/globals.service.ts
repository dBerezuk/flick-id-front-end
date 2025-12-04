import type { RawAxiosRequestHeaders } from 'axios';

import { axiosClassic, axiosWithAuth } from '@/api/axios';

interface IGlobalsQueries<T> {
	isAuth?: boolean;
	endpoints?: string;
	stringQueries?: string;
	objectQueries?: T;
	body?: Record<string, any>;
	headers?: RawAxiosRequestHeaders;
}

class GlobalsService {
	private URL: string;

	constructor(url: string) {
		this.URL = url;
	}

	async get<T, K = {}>({
		isAuth,
		endpoints = '',
		stringQueries = '',
		objectQueries = {} as K,
		headers
	}: IGlobalsQueries<K> = {}) {
		const { data } = await (isAuth ? axiosWithAuth : axiosClassic).get<T>(
			this.URL + endpoints + stringQueries,
			{
				params: objectQueries,
				headers
			}
		);

		return data;
	}

	async post<T, K = {}>({
		isAuth,
		endpoints = '',
		stringQueries = '',
		objectQueries = {} as K,
		body,
		headers
	}: IGlobalsQueries<K> = {}) {
		return await (isAuth ? axiosWithAuth : axiosClassic).post<T>(
			this.URL + endpoints + stringQueries,
			body,
			{
				params: objectQueries,
				headers
			}
		);
	}

	async patch<T, K = {}>({
		isAuth,
		endpoints = '',
		stringQueries = '',
		objectQueries = {} as K,
		body,
		headers
	}: IGlobalsQueries<K> = {}) {
		return await (isAuth ? axiosWithAuth : axiosClassic).patch<T>(
			this.URL + endpoints + stringQueries,
			body,
			{
				params: objectQueries,
				headers
			}
		);
	}

	async put<T, K = {}>({
		isAuth,
		endpoints = '',
		stringQueries = '',
		objectQueries = {} as K,
		body,
		headers
	}: IGlobalsQueries<K> = {}) {
		return await (isAuth ? axiosWithAuth : axiosClassic).put<T>(
			this.URL + endpoints + stringQueries,
			body,
			{
				params: objectQueries,
				headers
			}
		);
	}

	async delete<T, K = {}>({
		isAuth,
		endpoints = '',
		stringQueries = '',
		objectQueries = {} as K,
		headers
	}: IGlobalsQueries<K> = {}) {
		return await (isAuth ? axiosWithAuth : axiosClassic).delete<T>(
			this.URL + endpoints + stringQueries,
			{
				params: objectQueries,
				headers
			}
		);
	}
}

export const filesService = new GlobalsService('/files');
export const usersService = new GlobalsService('/users');
export const usersProfileService = new GlobalsService('/users/profile');

export const catalogsService = new GlobalsService('/catalog');
export const genresService = new GlobalsService('/genres');
export const mediaService = new GlobalsService('/media');
export const mediaFiltersService = new GlobalsService('/media/filters');
export const mediaViewsService = new GlobalsService('/media/views');

export const usersMediaHistoryService = new GlobalsService('users/media/history');
export const usersMediaWatchLaterService = new GlobalsService('users/media/watch-later');

export const statisticsService = new GlobalsService('statistics');
