import { isAxiosError } from 'axios';
import type { UseFormSetError } from 'react-hook-form';

import type { IBaseErrorResponse } from '@/types/base.types';

export const viewApiValidate = (error: Error, setError: UseFormSetError<any>): void => {
	if (!isAxiosError(error)) return;

	const data = error.response?.data as IBaseErrorResponse;

	if (!data.fields) return;

	data.fields.forEach(field => {
		setError(field.property, { type: 'api', message: field.errors[0] });
	});
};
