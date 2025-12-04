import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { viewApiValidate } from '@/utils/view-api-validate';

import { genresService } from '@/services/globals.service';
import type { IGenre, TManageGenre } from '@/types/genre.types';

export const useEdit = () => {
	const { id } = useParams<{ id: string }>();

	const queryClient = useQueryClient();

	const { data, isLoading } = useQuery({
		queryKey: [`genre.${id}`],
		queryFn: () => genresService.get<IGenre>({ endpoints: `/${id}` })
	});

	const form = useForm<TManageGenre>({
		mode: 'onChange'
	});

	useEffect(() => {
		if (!data) return;

		form.reset({
			title: data.title
		});
	}, [data]);

	const { mutate: editGenre, isPending: isEditGenrePending } = useMutation({
		mutationKey: [`genre.update.${id}`],
		mutationFn: (data: TManageGenre) =>
			genresService.patch<IGenre, TManageGenre>({
				isAuth: true,
				endpoints: `/${id}`,
				body: data
			}),
		onSuccess: async () => {
			const { toast } = await import('react-hot-toast');

			toast.success('Genre updated', { id: 'updated' });

			queryClient.invalidateQueries({
				queryKey: ['genres']
			});
		},
		onError: (error: Error) => viewApiValidate(error, form.setError)
	});

	const onSubmit = (data: TManageGenre) => {
		editGenre(data);
	};

	return { form, onSubmit, isLoading, isEditGenrePending };
};
