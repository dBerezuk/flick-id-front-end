'use client';

import { Content } from '@/components/layouts/account-layout/content/Content';

import { useEdit } from './useEdit';
import { ManageForm } from '@/app/(lk)/admin/genres/manage-form/ManageForm';

export function Edit() {
	const { form, onSubmit, isLoading, isEditGenrePending } = useEdit();

	return (
		<Content
			titlePage='Admin edit genre'
			titleSection='Edit genre'
		>
			<ManageForm
				form={form}
				onSubmit={onSubmit}
				isDataLoading={isLoading}
				isFormLoading={isEditGenrePending}
			/>
		</Content>
	);
}
