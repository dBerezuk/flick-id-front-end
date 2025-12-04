import { useAtomValue } from 'jotai';
import Image from 'next/image';

import { PATH_UPLOAD_FOLDERS } from '@/config/path-upload-folders.config';

import { authAtom } from '@/store/auth.store';

import { ProfileSkeleton } from './ProfileSkeleton';

import styles from './Profile.module.scss';

export function Profile() {
	const { user, isLoading } = useAtomValue(authAtom);

	return (
		<div className={styles.profile}>
			{isLoading ? (
				<ProfileSkeleton />
			) : (
				<>
					<Image
						src={
							user?.avatarFileName
								? PATH_UPLOAD_FOLDERS.getUserAvatars(user.avatarFileName)
								: process.env.NEXT_PUBLIC_DEFAULT_AVATAR_URL!
						}
						width={100}
						height={100}
						quality={100}
						priority
						alt='you avatar profile'
					/>
					<strong>{user?.email}</strong>
				</>
			)}
		</div>
	);
}
