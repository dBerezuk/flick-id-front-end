import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { PUBLIC_PAGES } from '@/config/pages/public-pages.config';

import { initAuthAtom } from '@/store/auth.store';

import { viewApiValidate } from '@/utils/view-api-validate';

import { authService } from '@/services/auth/auth.service';
import { EnumTypeAuth, type IAuthForm } from '@/services/auth/auth.types';

const useAuth = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [isLogin, setLogin] = useState<boolean>(
		searchParams.has('type') ? searchParams.get('type') === 'login' : true
	);

	const authType = isLogin ? EnumTypeAuth.LOGIN : EnumTypeAuth.REGISTRATION;

	const onSelectTypeAuth = () => {
		setLogin(prev => !prev);

		router.push(pathname + `?type=${isLogin ? 'registration' : 'login'}`);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		reset
	} = useForm<IAuthForm>({
		mode: 'onChange'
	});

	const [isPending, startTransition] = useTransition();

	const setInitAuth = useSetAtom(initAuthAtom);

	const { mutate, isPending: isAuthPending } = useMutation({
		mutationKey: [`auth.${authType}`],
		mutationFn: (data: IAuthForm) => authService.main(authType, data),
		onSuccess: async ({ data }) => {
			const { toast } = await import('react-hot-toast');

			startTransition(() => {
				reset();

				setInitAuth(data.user);

				toast.success('You are logged in');

				router.push(PUBLIC_PAGES.HOME);
			});
		},
		onError: (error: Error) => viewApiValidate(error, setError)
	});

	const isLoading = isAuthPending || isPending;

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data);
	};

	return {
		isLogin,
		setLogin,
		register,
		isLoading,
		handleSubmit,
		errors,
		onSubmit,
		onSelectTypeAuth
	};
};

export default useAuth;
