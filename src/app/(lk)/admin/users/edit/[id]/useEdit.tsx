import { useMutation, useQuery } from '@tanstack/react-query';
import { useAtomValue, useSetAtom } from 'jotai';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { authAtom, updateUserAuthAtom } from '@/store/auth.store';

import { viewApiValidate } from '@/utils/view-api-validate';

import { usersService } from '@/services/globals.service';
import type { IFullUser, IUser, TAdminUpdateUserData } from '@/types/user.types';

export const useEdit = () => {
	const { id } = useParams<{ id: string }>();

	const { data, isLoading } = useQuery({
		queryKey: [`user.${id}`],
		queryFn: () =>
			usersService.get<IUser>({
				isAuth: true,
				endpoints: `/${id}`
			})
	});

	useEffect(() => {
		if (!data) return;

		reset({
			email: data.email,
			name: data.name,
			isAdmin: data.isAdmin,
			avatarFileName: data.avatarFileName
		});
	}, [data]);

	const {
		register,
		control,
		reset,
		handleSubmit,
		setError,
		formState: { errors }
	} = useForm<TAdminUpdateUserData>({
		mode: 'onChange'
	});

	const { user } = useAtomValue(authAtom);

	const setUpdateUserAuth = useSetAtom(updateUserAuthAtom);

	const { mutate: updateUser, isPending: isUpdateUserLoading } = useMutation({
		mutationKey: [`update.user.${id}`],
		mutationFn: (data: TAdminUpdateUserData) =>
			usersService.patch<IFullUser>({
				isAuth: true,
				endpoints: `/${id}`,
				body: data
			}),
		onSuccess: async ({ data }) => {
			const { toast } = await import('react-hot-toast');

			data.id === user?.id && setUpdateUserAuth(data);

			toast.success('User updated', { id: 'updated' });
		},
		onError: (error: Error) => viewApiValidate(error, setError)
	});

	const onSubmit = (data: TAdminUpdateUserData) => {
		updateUser(data);
	};

	return { handleSubmit, onSubmit, register, control, errors, isLoading, isUpdateUserLoading };
};
