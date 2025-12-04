import { useMutation } from '@tanstack/react-query';
import { useAtomValue, useSetAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/ui/button/Button';
import { EnumButtonVariable } from '@/ui/button/button.types';
import { Skeleton } from '@/ui/skeleton/Skeleton';

import { PRIVATE_PAGES } from '@/config/pages/private-pages.config';
import { PUBLIC_PAGES } from '@/config/pages/public-pages.config';
import { PATH_UPLOAD_FOLDERS } from '@/config/path-upload-folders.config';

import { authAtom, clearAuthAtom } from '@/store/auth.store';

import { authService } from '@/services/auth/auth.service';

import styles from './Profile.module.scss';

export function Profile() {
	const router = useRouter();
	const { user, isLoading } = useAtomValue(authAtom);

	const setClearAuth = useSetAtom(clearAuthAtom);

	const { mutate } = useMutation({
		mutationKey: ['auth.logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			router.replace(PUBLIC_PAGES.HOME);

			setClearAuth();
		}
	});

	return isLoading ? (
		<Skeleton />
	) : (
		<div className={styles.box}>
			<Link
				className={styles.avatar}
				href={PRIVATE_PAGES.ACCOUNT}
			>
				<Image
					src={
						user?.avatarFileName
							? PATH_UPLOAD_FOLDERS.getUserAvatars(user.avatarFileName)
							: process.env.NEXT_PUBLIC_DEFAULT_AVATAR_URL!
					}
					width={48}
					height={48}
					quality={100}
					priority
					alt='You avatar profile'
				/>
			</Link>
			<div>
				<Link
					className={styles.name}
					href={PRIVATE_PAGES.ACCOUNT}
				>
					{user?.name || 'Anonym'}
				</Link>
				<Button
					variable={EnumButtonVariable.PLAIN}
					onClick={() => mutate()}
				>
					Exit
				</Button>
			</div>
		</div>
	);
}
