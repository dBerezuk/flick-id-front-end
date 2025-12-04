'use client';

import { Content } from '@/components/layouts/account-layout/content/Content';

import { ManageForm } from '../manage-form/ManageForm';

import { useCreate } from './useCreate';

export function Create() {
	const { form, onSubmit, isLoading } = useCreate();

	return (
		<Content
			titlePage='Admin create catalog'
			titleSection='Create catalog'
		>
			<ManageForm
				form={form}
				onSubmit={onSubmit}
				isFormLoading={isLoading}
			/>
		</Content>
	);
}
