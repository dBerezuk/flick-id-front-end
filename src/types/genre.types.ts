import type { IBaseResponse } from './base.types';
import type { ICatalog } from '@/types/catalog.types';

export interface IGenre extends IBaseResponse {
	title: string;
}

export type TManageGenre = Pick<IGenre, 'title'>;
