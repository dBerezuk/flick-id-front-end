import { usePathname } from 'next/navigation';

import { PRIVATE_PAGES } from '@/config/pages/private-pages.config';

import { MenuItem } from './menu-item/MenuItem';
import { MENU_ACCOUNT_DATA, MENU_ADMIN_DATA } from './menu.data';

import styles from './Menu.module.scss';

export function Menu() {
	const pathname = usePathname();

	const isPageAdmin = pathname.includes(PRIVATE_PAGES.ADMIN);

	const menuData = isPageAdmin ? MENU_ADMIN_DATA : MENU_ACCOUNT_DATA;

	return (
		<ul className={styles.menu}>
			{menuData.map(item => (
				<MenuItem
					key={item.title}
					isActive={pathname === item.path}
					data={item}
				/>
			))}
		</ul>
	);
}
