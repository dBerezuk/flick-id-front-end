import { useMutation, useQuery } from '@tanstack/react-query';

import { confirmToast } from '@/libs/toast.lib';
import { mediaService } from '@/services/globals.service';
import type { IMedia, IMediaFilterData, TMediaPaginate } from '@/types/media.types';

export const useMedia = () => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: ['media'],
		queryFn: () =>
			mediaService.get<TMediaPaginate, IMediaFilterData>({
				objectQueries: {
					sorting: 'new-created'
				}
			})
	});

	const { mutate: deleteMedia } = useMutation({
		mutationKey: ['media.delete'],
		mutationFn: (id: IMedia['id']) =>
			mediaService.delete<boolean>({
				isAuth: true,
				endpoints: `/${id}`
			}),
		onSuccess: () => refetch()
	});

	const onDelete = (id: IMedia['id']) => {
		confirmToast({
			message: 'Are you sure you want to delete ?',
			buttonActionText: 'Delete',
			buttonAction: () => deleteMedia(id)
		});
	};

	return { data, isLoading, onDelete };
};
