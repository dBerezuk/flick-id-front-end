import dynamic from 'next/dynamic';

import { Skeleton } from '@/ui/skeleton/Skeleton';
import { EnumSkeletonVariable } from '@/ui/skeleton/skeleton.types';

import type { IMedia } from '@/types/media.types';

import styles from './Header.module.scss';

const DynamicActions = dynamic(() => import('./actions/Actions').then(mod => mod.Actions), {
	ssr: false,
	loading: () => (
		<Skeleton
			className='!w-[1.375rem] aspect-square !h-auto'
			variable={EnumSkeletonVariable.SECONDARY}
		/>
	)
});

type TProps = Pick<IMedia, 'id' | 'title'>;

export function Header({ id, title }: TProps) {
	return (
		<header className={styles.header}>
			<h2 className={styles.title}>{title}</h2>
			<DynamicActions id={id} />
		</header>
	);
}
