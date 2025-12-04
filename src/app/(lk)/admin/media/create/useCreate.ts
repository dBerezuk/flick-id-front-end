import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import type { IFieldSelectOption } from '@/ui/field/field.types';

import { PRIVATE_PAGES } from '@/config/pages/private-pages.config';

import { viewApiValidate } from '@/utils/view-api-validate';

import { catalogsService, genresService, mediaService } from '@/services/globals.service';
import type { ICatalog } from '@/types/catalog.types';
import type { IGenre } from '@/types/genre.types';
import type { IMedia, TManageMedia } from '@/types/media.types';

export const useCreate = () => {
	const router = useRouter();

	const form = useForm<TManageMedia>({
		mode: 'onChange'
	});

	const [isPending, startTransition] = useTransition();

	const { data: genres, isLoading: isLoadingGenres } = useQuery({
		queryKey: ['genres'],
		queryFn: () => genresService.get<IGenre[]>(),
		select: (data): IFieldSelectOption[] =>
			data.map(({ id, title }) => ({ value: id, label: title }))
	});

	const { data: catalogs, isLoading: isLoadingCatalogs } = useQuery({
		queryKey: ['catalogs'],
		queryFn: () => catalogsService.get<ICatalog[]>(),
		select: (data): IFieldSelectOption[] =>
			data.map(({ id, title }) => ({ value: id, label: title }))
	});

	const { mutate: createMedia, isPending: isCreateMediaPending } = useMutation({
		mutationKey: ['media.create'],
		mutationFn: (data: TManageMedia) =>
			mediaService.post<IMedia, TManageMedia>({ isAuth: true, body: data }),
		onSuccess: async () => {
			const { toast } = await import('react-hot-toast');

			startTransition(() => {
				form.reset();

				toast.success('Media created', { id: 'created' });

				router.push(PRIVATE_PAGES.ADMIN_MEDIA);
			});
		},
		onError: (error: Error) => viewApiValidate(error, form.setError)
	});

	const onSubmit = (data: TManageMedia) => {
		createMedia(data);
	};

	const isDataLoading = isLoadingGenres || isLoadingCatalogs;
	const isLoading = isPending || isCreateMediaPending;

	return { form, genres, catalogs, onSubmit, isDataLoading, isLoading };
};
