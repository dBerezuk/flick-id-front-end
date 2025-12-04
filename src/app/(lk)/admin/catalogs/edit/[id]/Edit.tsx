'use client';

import { Content } from '@/components/layouts/account-layout/content/Content';

import { ManageForm } from '../../manage-form/ManageForm';

import { useEdit } from './useEdit';

export function Edit() {
	const { form, onSubmit, isLoading, isEditCatalogPending } = useEdit();

	return (
		<Content
			titlePage='Admin edit catalog'
			titleSection='Edit catalog'
		>
			<ManageForm
				form={form}
				onSubmit={onSubmit}
				isDataLoading={isLoading}
				isFormLoading={isEditCatalogPending}
			/>
		</Content>
	);
}
