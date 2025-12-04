'use client';

import { Content } from '@/components/layouts/account-layout/content/Content';

import { ManageForm } from '../../manage-form/ManageForm';

import { useEdit } from './useEdit';

export function Edit() {
	const { form, genres, catalogs, onSubmit, isDataLoading, isLoading } = useEdit();

	return (
		<Content
			titlePage='Admin update media'
			titleSection='Update media'
		>
			<ManageForm
				form={form}
				initGenreOptions={genres}
				initCatalogOptions={catalogs}
				onSubmit={onSubmit}
				isDataLoading={isDataLoading}
				isFormLoading={isLoading}
			/>
		</Content>
	);
}
