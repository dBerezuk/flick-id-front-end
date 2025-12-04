import { Skeleton } from '@/ui/skeleton/Skeleton';
import { EnumSkeletonVariable } from '@/ui/skeleton/skeleton.types';

import styles from './Profile.module.scss';

export function ProfileSkeleton() {
	return (
		<>
			<Skeleton
				className={styles.avatarSkeleton}
				variable={EnumSkeletonVariable.SECONDARY}
			/>
			<Skeleton
				className={styles.emailSkeleton}
				variable={EnumSkeletonVariable.SECONDARY}
			/>
		</>
	);
}
