import type { UseFormReturn } from 'react-hook-form';

import type { IFieldSelectOption } from '@/ui/field/field.types';

import type { TManageMedia } from '@/types/media.types';

export interface IManageFormProps {
	form: UseFormReturn<TManageMedia>;
	initGenreOptions?: IFieldSelectOption[];
	initCatalogOptions?: IFieldSelectOption[];
	onSubmit: (data: TManageMedia) => void;
	isDataLoading?: boolean;
	isFormLoading?: boolean;
}
