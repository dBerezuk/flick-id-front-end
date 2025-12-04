import { useMutation, useQuery } from '@tanstack/react-query';

import { confirmToast } from '@/libs/toast.lib';
import { genresService } from '@/services/globals.service';
import type { IGenre } from '@/types/genre.types';

export const useGenres = () => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: ['genres'],
		queryFn: () => genresService.get<IGenre[]>()
	});

	const { mutate: deleteGenre } = useMutation({
		mutationKey: ['genre.delete'],
		mutationFn: (id: IGenre['id']) =>
			genresService.delete<boolean>({
				isAuth: true,
				endpoints: `/${id}`
			}),
		onSuccess: () => refetch()
	});

	const onDelete = (id: IGenre['id']) => {
		confirmToast({
			message: 'Are you sure you want to delete ?',
			buttonActionText: 'Delete',
			buttonAction: () => deleteGenre(id)
		});
	};

	return { data, isLoading, onDelete };
};
