import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { PRIVATE_PAGES } from '@/config/pages/private-pages.config';

import { viewApiValidate } from '@/utils/view-api-validate';

import { catalogsService } from '@/services/globals.service';
import type { ICatalog, TManageCatalog } from '@/types/catalog.types';

export const useCreate = () => {
	const router = useRouter();

	const form = useForm<TManageCatalog>({
		mode: 'onChange'
	});

	const [isPending, startTransition] = useTransition();

	const { mutate: createCatalog, isPending: isCreateCatalogPending } = useMutation({
		mutationKey: ['catalog.create'],
		mutationFn: (data: TManageCatalog) =>
			catalogsService.post<ICatalog, TManageCatalog>({ isAuth: true, body: data }),
		onSuccess: async () => {
			const { toast } = await import('react-hot-toast');

			startTransition(() => {
				form.reset();

				toast.success('Catalog created', { id: 'created' });

				router.push(PRIVATE_PAGES.ADMIN_CATALOGS);
			});
		},
		onError: (error: Error) => viewApiValidate(error, form.setError)
	});

	const onSubmit = (data: TManageCatalog) => {
		createCatalog(data);
	};

	const isLoading = isPending || isCreateCatalogPending;

	return { form, onSubmit, isLoading };
};
