import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { viewApiValidate } from '@/utils/view-api-validate';

import { catalogsService } from '@/services/globals.service';
import type { ICatalog, TManageCatalog } from '@/types/catalog.types';

export const useEdit = () => {
	const { id } = useParams<{ id: string }>();

	const queryClient = useQueryClient();

	const { data, isLoading } = useQuery({
		queryKey: [`catalog.${id}`],
		queryFn: () => catalogsService.get<ICatalog>({ endpoints: `/${id}` })
	});

	const form = useForm<TManageCatalog>({
		mode: 'onChange'
	});

	useEffect(() => {
		if (!data) return;

		form.reset({
			title: data.title,
			slug: data.slug
		});
	}, [data]);

	const { mutate: editCatalog, isPending: isEditCatalogPending } = useMutation({
		mutationKey: [`catalog.update.${id}`],
		mutationFn: (data: TManageCatalog) =>
			catalogsService.patch<ICatalog, TManageCatalog>({
				isAuth: true,
				endpoints: `/${id}`,
				body: data
			}),
		onSuccess: async () => {
			const { toast } = await import('react-hot-toast');

			toast.success('Catalog updated', { id: 'updated' });

			queryClient.invalidateQueries({
				queryKey: ['catalogs']
			});
		},
		onError: (error: Error) => viewApiValidate(error, form.setError)
	});

	const onSubmit = (data: TManageCatalog) => {
		editCatalog(data);
	};

	return { form, onSubmit, isLoading, isEditCatalogPending };
};
