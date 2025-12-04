'use client';

import { Content } from '@/components/layouts/account-layout/content/Content';

import { ManageForm } from '../manage-form/ManageForm';

import { useCreate } from './useCreate';

export function Create() {
	const { form, genres, catalogs, onSubmit, isDataLoading, isLoading } = useCreate();

	return (
		<Content
			titlePage='Admin create media'
			titleSection='Create media'
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
