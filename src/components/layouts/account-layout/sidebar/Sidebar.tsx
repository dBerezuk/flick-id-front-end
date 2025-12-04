import cn from 'clsx';
import { useAtomValue } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

import { isCollapsedAccountSidebarAtom } from '@/store/account-sidebar.store';

import { Header } from './header/Header';
import { Menu } from './menu/Menu';

import styles from './Sidebar.module.scss';

interface IProps {
	initialIsCollapsedSidebar: boolean;
}

export function Sidebar({ initialIsCollapsedSidebar }: IProps) {
	useHydrateAtoms([[isCollapsedAccountSidebarAtom, initialIsCollapsedSidebar]]);

	const isCollapsed = useAtomValue(isCollapsedAccountSidebarAtom);

	return (
		<aside className={cn(styles.sidebar, isCollapsed && styles.collapsed)}>
			<Header />
			<Menu />
		</aside>
	);
}
