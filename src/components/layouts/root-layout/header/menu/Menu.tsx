import cn from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { useOutside } from '@/hooks/useOutside';

import type { ICatalogProps } from '../../root-layout.types';

import { List } from './list/List';
import { Search } from './search/Search';

import styles from './Menu.module.scss';

export function Menu({ catalog }: ICatalogProps) {
	const pathname = usePathname();

	const { ref, isShow, setIsShow } = useOutside<HTMLDivElement>(false);

	useEffect(() => {
		setIsShow(false);
	}, [pathname]);

	return (
		<div
			className={cn(styles.menu, isShow && styles.isVisibledSearch)}
			ref={ref}
		>
			<List catalog={catalog} />
			<Search
				isShowSearch={isShow}
				onShowSearch={() => setIsShow(true)}
			/>
		</div>
	);
}
