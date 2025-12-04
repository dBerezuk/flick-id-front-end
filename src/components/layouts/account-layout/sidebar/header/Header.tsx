import { Actions } from './actions/Actions';
import { Profile } from './profile/Profile';

import styles from './Header.module.scss';

export function Header() {
	return (
		<header className={styles.header}>
			<Actions />
			<Profile />
		</header>
	);
}
