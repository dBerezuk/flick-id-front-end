import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect, useTransition } from 'react';
import { useForm } from 'react-hook-form';

import type { IFieldSelectOption } from '@/ui/field/field.types';

import { viewApiValidate } from '@/utils/view-api-validate';

import { catalogsService, genresService, mediaService } from '@/services/globals.service';
import type { ICatalog } from '@/types/catalog.types';
import type { IGenre } from '@/types/genre.types';
import type { IMedia, TManageMedia } from '@/types/media.types';

export const useEdit = () => {
	const { id } = useParams<{ id: string }>();

	const form = useForm<TManageMedia>({
		mode: 'onChange'
	});

	const [isPending, startTransition] = useTransition();

	const { data: media, isLoading: isLoadingMedia } = useQuery({
		queryKey: [`media.${id}`],
		queryFn: () =>
			mediaService.get<IMedia>({
				isAuth: true,
				endpoints: `/by-id/${id}`
			})
	});

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

	useEffect(() => {
		if (!(media && genres && catalogs)) return;

		form.reset({
			title: media.title,
			slug: media.slug,
			country: media.country,
			slogan: media.slogan,
			description: media.description,
			premiere: media.premiere.substring(0, 10),
			genreId: media.genreId,
			catalogId: media.catalogId,
			posterFileName: media.posterFileName,
			posterFullFileName: media.posterFullFileName,
			mediaFileName: media.mediaFileName
		});
	}, [media, genres, catalogs]);

	const { mutate: updateMedia, isPending: isUpdateMediaPending } = useMutation({
		mutationKey: ['media.update'],
		mutationFn: (data: TManageMedia) =>
			mediaService.patch<IMedia, TManageMedia>({ isAuth: true, endpoints: `/${id}`, body: data }),
		onSuccess: async () => {
			const { toast } = await import('react-hot-toast');

			startTransition(() => {
				toast.success('Media updated', { id: 'updated' });
			});
		},
		onError: (error: Error) => viewApiValidate(error, form.setError)
	});

	const onSubmit = (data: TManageMedia) => {
		updateMedia(data);
	};

	const isDataLoading = isLoadingMedia || isLoadingGenres || isLoadingCatalogs;
	const isLoading = isPending || isUpdateMediaPending;

	return { form, genres, catalogs, onSubmit, isDataLoading, isLoading };
};
