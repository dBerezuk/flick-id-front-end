import type { IBasePaginateResponse, IBaseResponse, IBaseSearchParams } from './base.types';
import type { ICatalog } from './catalog.types';

export interface IMedia extends IBaseResponse {
	title: string;
	posterFullFileName?: string;
	posterFileName: string;
	slug: string;
	description: string;
	slogan: string;
	country: string;
	premiere: string;
	mediaFileName: string;
	genreId: IBaseResponse['id'];
	catalogId: IBaseResponse['id'];
}

export type TManageMedia = Omit<IMedia, 'id' | 'createdAt' | 'updatedAt'>;

export type TMediaFilter = [string, string[] | number[]];

export interface IMediaFilterData
	extends Partial<Pick<IMedia, 'genreId' | 'country' | 'premiere'>>,
		IBaseSearchParams {
	sorting?: 'popular' | 'new-created';
	catalogSlug?: ICatalog['slug'];
	search?: string;
}

export type TMediaPaginate = IBasePaginateResponse<IMedia>;
