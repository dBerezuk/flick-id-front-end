'use client';

import { Content } from '@/components/layouts/account-layout/content/Content';
import { Table } from '@/components/table/Table';
import { EnumTableHead } from '@/components/table/table.types';

import { PRIVATE_PAGES } from '@/config/pages/private-pages.config';

import { Actions } from './Actions';
import { useCatalogs } from './useCatalogs';

export function Catalogs() {
	const { data, isLoading, onDelete } = useCatalogs();

	return (
		<Content
			titlePage='Admin Catalogs'
			titleSection='Catalogs'
			actions={<Actions />}
		>
			<Table
				type={EnumTableHead.CATALOG}
				data={data?.map(({ slug, ...rest }) => rest)}
				isLoading={isLoading}
				onEditLink={path => PRIVATE_PAGES.adminCatalogsEdit(path)}
				onDeleteAction={id => onDelete(id)}
			/>
		</Content>
	);
}
