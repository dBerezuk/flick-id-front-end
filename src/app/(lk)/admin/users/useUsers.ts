import { useMutation, useQuery } from '@tanstack/react-query';

import { confirmToast } from '@/libs/toast.lib';
import { usersService } from '@/services/globals.service';
import type { IUser } from '@/types/user.types';

export const useUsers = () => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: ['users'],
		queryFn: () =>
			usersService.get<IUser[]>({
				isAuth: true
			})
	});

	const { mutate: deleteUser } = useMutation({
		mutationKey: ['genre.delete'],
		mutationFn: (id: IUser['id']) =>
			usersService.delete<boolean>({
				isAuth: true,
				endpoints: `/${id}`
			}),
		onSuccess: () => refetch()
	});

	const onDelete = (id: IUser['id']) => {
		confirmToast({
			message: 'Are you sure you want to delete ?',
			buttonActionText: 'Delete',
			buttonAction: () => deleteUser(id)
		});
	};

	return { data, isLoading, onDelete };
};
