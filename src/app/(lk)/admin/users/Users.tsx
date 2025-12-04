'use client';

import { Content } from '@/components/layouts/account-layout/content/Content';
import { Table } from '@/components/table/Table';
import { EnumTableHead } from '@/components/table/table.types';

import { PRIVATE_PAGES } from '@/config/pages/private-pages.config';

import { useUsers } from './useUsers';

export function Users() {
	const { data, isLoading, onDelete } = useUsers();

	return (
		<Content
			titlePage='Admin Users'
			titleSection='Users'
		>
			<Table
				type={EnumTableHead.USER}
				data={data?.map(({ id, name, email, isAdmin, createdAt, updatedAt }) => ({
					id,
					name: name ?? '-',
					email: email,
					admin: isAdmin ? 'Yes' : 'No',
					createdAt,
					updatedAt
				}))}
				isLoading={isLoading}
				onEditLink={path => PRIVATE_PAGES.adminUsersEdit(path)}
				onDeleteAction={id => onDelete(id)}
			/>
		</Content>
	);
}
