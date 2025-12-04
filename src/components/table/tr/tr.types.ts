import type { ITableDataItem, ITableProps } from '../table.types';

export interface ITrProps
	extends Partial<Pick<ITableProps, 'isLoading' | 'onEditLink' | 'onDeleteAction'>> {
	head: string[];
	data?: ITableDataItem;
}
