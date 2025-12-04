import { useAtomValue } from 'jotai';
import { Settings2, SquareUserRound } from 'lucide-react';
import { usePathname } from 'next/navigation';

import Button from '@/ui/button/Button';
import { EnumButtonVariable } from '@/ui/button/button.types';
import { Skeleton } from '@/ui/skeleton/Skeleton';
import { EnumSkeletonVariable } from '@/ui/skeleton/skeleton.types';

import { PRIVATE_PAGES } from '@/config/pages/private-pages.config';

import { authAtom } from '@/store/auth.store';

import { ControlButton } from './control-button/ControlButton';

import styles from './Actions.module.scss';

export function Actions() {
	const pathname = usePathname();

	const isPageAdmin = pathname.includes(PRIVATE_PAGES.ADMIN);

	const { user, isLoading } = useAtomValue(authAtom);

	return (
		<div className={styles.actions}>
			{isLoading ? (
				<Skeleton
					className={styles.skeleton}
					variable={EnumSkeletonVariable.SECONDARY}
				/>
			) : (
				user?.isAdmin && (
					<Button
						href={isPageAdmin ? PRIVATE_PAGES.ACCOUNT : PRIVATE_PAGES.ADMIN}
						as='link'
						variable={EnumButtonVariable.PLAIN_PRIMARY}
					>
						<span className='visually-hidden'>{isPageAdmin ? 'Account' : 'Admin'}</span>
						{isPageAdmin ? <SquareUserRound size={22} /> : <Settings2 size={22} />}
					</Button>
				)
			)}
			<ControlButton />
		</div>
	);
}
