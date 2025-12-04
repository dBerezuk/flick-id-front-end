import Button from '@/ui/button/Button';

import type { IManageFormProps } from './manage-form.types';

export function ButtonSave({
	isFormLoading,
	isDataLoading
}: Pick<IManageFormProps, 'isFormLoading' | 'isDataLoading'>) {
	return (
		<Button
			isLoading={isFormLoading}
			disabled={isDataLoading}
			type='submit'
		>
			Save
		</Button>
	);
}
