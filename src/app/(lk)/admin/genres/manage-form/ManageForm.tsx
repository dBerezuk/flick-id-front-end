import type { UseFormReturn } from 'react-hook-form';

import Button from '@/ui/button/Button';
import Field from '@/ui/field/Field';

import type { TManageCatalog } from '@/types/catalog.types';
import type { TManageGenre } from '@/types/genre.types';

import styles from './ManageForm.module.scss';

interface IProps {
	form: UseFormReturn<TManageGenre>;
	onSubmit: (data: TManageGenre) => void;
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
