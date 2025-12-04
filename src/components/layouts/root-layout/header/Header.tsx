'use client';

import dynamic from 'next/dynamic';

import Logo from '@/ui/logo/Logo';
import { Skeleton } from '@/ui/skeleton/Skeleton';

import type { ICatalogProps } from '../root-layout.types';

import { Menu } from './menu/Menu';

import styles from './Header.module.scss';

const DynamicCurrentUser = dynamic(
	() => import('./current-user/CurrentUser').then(mod => mod.CurrentUser),
	{ ssr: false, loading: () => <Skeleton /> }
);

function Header({ catalog }: ICatalogProps) {
	return (
		<header className={styles.header}>
			<div>
				<Logo />
			</div>
			<Menu catalog={catalog} />
			<DynamicCurrentUser />
		</header>
	);
}

export default Header;
