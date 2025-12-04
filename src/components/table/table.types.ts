import type { IBaseResponse } from '@/types/base.types';
import type { ICatalog } from '@/types/catalog.types';

export enum EnumTableHead {
	USER,
	CATALOG,
	GENRE,
	MEDIA
}

export type TTableHead = Record<EnumTableHead, string[]>;

export interface ITableDataItem extends IBaseResponse, Record<string, any> {}

export interface ITableProps {
	type: EnumTableHead;
	data: ITableDataItem[] | undefined;
	isLoading?: boolean;
	onEditLink: (path: string) => string;
	onDeleteAction: (id: ICatalog['id']) => void;
}
