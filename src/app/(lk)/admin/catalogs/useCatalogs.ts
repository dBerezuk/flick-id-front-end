import { useMutation, useQuery } from '@tanstack/react-query';

import { confirmToast } from '@/libs/toast.lib';
import { catalogsService } from '@/services/globals.service';
import type { ICatalog } from '@/types/catalog.types';

export const useCatalogs = () => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: ['catalogs'],
		queryFn: () => catalogsService.get<ICatalog[]>()
	});

	const { mutate: deleteCatalog } = useMutation({
		mutationKey: ['catalog.delete'],
		mutationFn: (id: ICatalog['id']) =>
			catalogsService.delete<boolean>({
				isAuth: true,
				endpoints: `/${id}`
			}),
		onSuccess: () => refetch()
	});

	const onDelete = (id: ICatalog['id']) => {
		confirmToast({
			message: 'Are you sure you want to delete ?',
			buttonActionText: 'Delete',
			buttonAction: () => deleteCatalog(id)
		});
	};

	return { data, isLoading, onDelete };
};
