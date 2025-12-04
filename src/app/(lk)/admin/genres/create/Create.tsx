'use client';

import { Content } from '@/components/layouts/account-layout/content/Content';

import { useCreate } from './useCreate';
import { ManageForm } from '@/app/(lk)/admin/genres/manage-form/ManageForm';

export function Create() {
	const { form, onSubmit, isLoading } = useCreate();

	return (
		<Content
			titlePage='Admin create genre'
			titleSection='Create genre'
		>
			<ManageForm
				form={form}
				onSubmit={onSubmit}
				isFormLoading={isLoading}
			/>
		</Content>
	);
}
