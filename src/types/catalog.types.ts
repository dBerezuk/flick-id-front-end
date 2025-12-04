import type { IBaseResponse } from './base.types';

export interface ICatalog extends IBaseResponse {
	title: string;
	slug: string;
}

export type TManageCatalog = Pick<ICatalog, 'title' | 'slug'>;
