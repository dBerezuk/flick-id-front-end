import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { PRIVATE_PAGES } from '@/config/pages/private-pages.config';

import { viewApiValidate } from '@/utils/view-api-validate';

import { genresService } from '@/services/globals.service';
import type { IGenre, TManageGenre } from '@/types/genre.types';

export const useCreate = () => {
	const router = useRouter();

	const form = useForm<TManageGenre>({
		mode: 'onChange'
	});

	const [isPending, startTransition] = useTransition();

	const { mutate: createGenre, isPending: isCreateGenrePending } = useMutation({
		mutationKey: ['genre.create'],
		mutationFn: (data: TManageGenre) =>
			genresService.post<IGenre, TManageGenre>({ isAuth: true, body: data }),
		onSuccess: async () => {
			const { toast } = await import('react-hot-toast');

			startTransition(() => {
				form.reset();

				toast.success('Genre created', { id: 'created' });

				router.push(PRIVATE_PAGES.ADMIN_GENRES);
			});
		},
		onError: (error: Error) => viewApiValidate(error, form.setError)
	});

	const onSubmit = (data: TManageGenre) => {
		createGenre(data);
	};

	const isLoading = isPending || isCreateGenrePending;

	return { form, onSubmit, isLoading };
};
