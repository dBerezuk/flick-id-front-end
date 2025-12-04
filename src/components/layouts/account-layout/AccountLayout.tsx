'use client';

import type { IAccountLayoutProps } from './account-layout.types';
import { Sidebar } from './sidebar/Sidebar';

import styles from './AccountLayout.module.scss';

export function AccountLayout({ initialIsCollapsedSidebar, children }: IAccountLayoutProps) {
	return (
		<div className='container'>
			<div className={styles.layout}>
				<Sidebar initialIsCollapsedSidebar={initialIsCollapsedSidebar} />
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	);
}
