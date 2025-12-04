import { Film } from 'lucide-react';
import Link from 'next/link';

import { SITE_NAME } from '@/constants/seo.constants';

import { PUBLIC_PAGES } from '@/config/pages/public-pages.config';

import styles from './Logo.module.scss';

function Logo() {
	return (
		<Link
			className={styles.logo}
			href={PUBLIC_PAGES.HOME}
		>
			<Film
				className={styles.icon}
				size={28}
			/>
			{SITE_NAME}
		</Link>
	);
}

export default Logo;
