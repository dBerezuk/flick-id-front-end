import type { UseFormReturn } from 'react-hook-form';

import Button from '@/ui/button/Button';
import Field from '@/ui/field/Field';

import type { TManageCatalog } from '@/types/catalog.types';

import styles from './ManageForm.module.scss';

interface IProps {
	form: UseFormReturn<TManageCatalog>;
	onSubmit: (data: TManageCatalog) => void;
	isDataLoading?: boolean;
	isFormLoading?: boolean;
}

export function ManageForm({ form, onSubmit, isDataLoading, isFormLoading }: IProps) {
	return (
		<form
			className={styles.form}
			onSubmit={form.handleSubmit(onSubmit)}
		>
			<div>
				<Field
					label='Title'
					placeholder='Enter a title'
					isLoading={isDataLoading}
					error={form.formState.errors.title}
					{...form.register('title', { required: 'Title is a required field' })}
				/>
			</div>
			<div>
				<Field
					label='Slug'
					placeholder='Enter a slug'
					isLoading={isDataLoading}
					error={form.formState.errors.slug}
					{...form.register('slug', { required: 'Slug is a required field' })}
				/>
			</div>
			<Button
				isLoading={isFormLoading}
				disabled={isDataLoading}
				type='submit'
			>
				Save
			</Button>
		</form>
	);
}
