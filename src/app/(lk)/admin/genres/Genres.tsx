'use client';

import { Content } from '@/components/layouts/account-layout/content/Content';
import { Table } from '@/components/table/Table';
import { EnumTableHead } from '@/components/table/table.types';

import { PRIVATE_PAGES } from '@/config/pages/private-pages.config';

import { useGenres } from './useGenres';
import { Actions } from '@/app/(lk)/admin/genres/Actions';

export function Genres() {
	const { data, isLoading, onDelete } = useGenres();

	return (
		<Content
			titlePage='Admin Genres'
			titleSection='Genres'
			actions={<Actions />}
		>
			<Table
				type={EnumTableHead.GENRE}
				data={data}
				isLoading={isLoading}
				onEditLink={path => PRIVATE_PAGES.adminGenresEdit(path)}
				onDeleteAction={id => onDelete(id)}
			/>
		</Content>
	);
}
