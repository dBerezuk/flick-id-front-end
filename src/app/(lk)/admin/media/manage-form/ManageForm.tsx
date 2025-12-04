import dynamic from 'next/dynamic';

import { Fields } from './Fields';
import type { IManageFormProps } from './manage-form.types';

import styles from './ManageForm.module.scss';

const DynamicButtonSave = dynamic(() => import('./ButtonSave').then(mod => mod.ButtonSave));
const DynamicUploads = dynamic(() => import('./Uploads').then(mod => mod.Uploads));

export function ManageForm({
	form,
	initGenreOptions,
	initCatalogOptions,
	onSubmit,
	isDataLoading,
	isFormLoading
}: IManageFormProps) {
	return (
		<form
			className={styles.form}
			onSubmit={form.handleSubmit(onSubmit)}
		>
			<Fields
				form={form}
				initCatalogOptions={initCatalogOptions}
				initGenreOptions={initGenreOptions}
				isDataLoading={isDataLoading}
			/>
			<DynamicUploads
				form={form}
				isDataLoading={isDataLoading}
			/>
			<DynamicButtonSave
				isFormLoading={isFormLoading}
				isDataLoading={isDataLoading}
			/>
		</form>
	);
}
