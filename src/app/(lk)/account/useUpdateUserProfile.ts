import { useMutation } from '@tanstack/react-query';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { authAtom, updateUserAuthAtom } from '@/store/auth.store';

import { viewApiValidate } from '@/utils/view-api-validate';

import { usersProfileService } from '@/services/globals.service';
import type { IFullUser, TUpdateUserData } from '@/types/user.types';

export function useUpdateUserProfile() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		setError,
		reset
	} = useForm<TUpdateUserData>({
		mode: 'onChange'
	});

	const { user, isLoading } = useAtomValue(authAtom);

	useEffect(() => {
		reset({
			email: user?.email || '',
			name: user?.name || '',
			avatarFileName: user?.avatarFileName || ''
		});
	}, [user]);

	const setUpdateUserAuth = useSetAtom(updateUserAuthAtom);

	const { mutate: updateUserProfile, isPending: isUpdateUserProfileLoading } = useMutation({
		mutationKey: ['update.user.profile'],
		mutationFn: (data: TUpdateUserData) =>
			usersProfileService.patch<IFullUser>({
				isAuth: true,
				body: data
			}),
		onSuccess: async ({ data }) => {
			const { toast } = await import('react-hot-toast');

			setUpdateUserAuth(data);

			toast.success('Profile updated', { id: 'updated' });
		},
		onError: (error: Error) => viewApiValidate(error, setError)
	});

	const onSubmit = (data: TUpdateUserData) => {
		updateUserProfile(data);
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		control,
		errors,
		isLoading,
		isUpdateUserProfileLoading
	};
}
