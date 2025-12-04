'use client';

import { Content } from '@/components/layouts/account-layout/content/Content';
import { Table } from '@/components/table/Table';
import { EnumTableHead } from '@/components/table/table.types';

import { PRIVATE_PAGES } from '@/config/pages/private-pages.config';

import { Actions } from './Actions';
import { useMedia } from './useMedia';

export function Media() {
	const { data, isLoading, onDelete } = useMedia();

	return (
		<Content
			titlePage='Admin Media'
			titleSection='Media'
			actions={<Actions />}
		>
			<Table
				type={EnumTableHead.MEDIA}
				data={data?.items.map(({ id, title, createdAt, updatedAt }) => ({
					id,
					title,
					createdAt,
					updatedAt
				}))}
				isLoading={isLoading}
				onEditLink={path => PRIVATE_PAGES.adminMediaEdit(path)}
				onDeleteAction={onDelete}
			/>
		</Content>
	);
}
