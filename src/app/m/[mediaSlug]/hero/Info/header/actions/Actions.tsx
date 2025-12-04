import { Heart } from 'lucide-react';

import Button from '@/ui/button/Button';
import { EnumButtonVariable } from '@/ui/button/button.types';
import { Skeleton } from '@/ui/skeleton/Skeleton';
import { EnumSkeletonVariable } from '@/ui/skeleton/skeleton.types';

import { PUBLIC_PAGES } from '@/config/pages/public-pages.config';

import { useActions } from './useActions';
import type { IMedia } from '@/types/media.types';

import styles from './Actions.module.scss';

type TProps = Pick<IMedia, 'id'>;

export function Actions({ id }: TProps) {
	const { isAuth, isLoading, isAddedToWatchLater, isPending, toggleUserMediaWatchLater } =
		useActions(id);

	return (
		<div className={styles.actions}>
			{isAuth && isLoading ? (
				<Skeleton
					className='!w-[1.375rem] aspect-square !h-auto'
					variable={EnumSkeletonVariable.SECONDARY}
				/>
			) : (
				<Button
					as={isAuth ? 'button' : 'link'}
					href={PUBLIC_PAGES.AUTH}
					isActive={isAddedToWatchLater}
					isLoading={isPending}
					variable={EnumButtonVariable.PLAIN_ACCENT}
					onClick={() => isAuth && toggleUserMediaWatchLater()}
				>
					<span className='visually-hidden'>
						{isAuth ? 'Add media to watch later' : 'Redirect on auth page'}
					</span>
					<Heart size={22} />
				</Button>
			)}
		</div>
	);
}
