import { useAtom } from 'jotai';
import Cookie from 'js-cookie';
import { PanelLeftClose } from 'lucide-react';

import Button from '@/ui/button/Button';
import { EnumButtonVariable } from '@/ui/button/button.types';

import { EnumCookieKeys } from '@/config/cookies.config';

import { isCollapsedAccountSidebarAtom } from '@/store/account-sidebar.store';

import styles from './ControlButton.module.scss';

export function ControlButton() {
	const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAccountSidebarAtom);

	const onToggleCollapse = () => {
		const isNegativeCollapsed = !isCollapsed;

		Cookie.set(EnumCookieKeys.IS_COLLAPSED_ACCOUNT_SIDEBAR, String(isNegativeCollapsed));

		setIsCollapsed(isNegativeCollapsed);
	};

	return (
		<Button
			className={styles.button}
			variable={EnumButtonVariable.PLAIN_PRIMARY}
			onClick={onToggleCollapse}
		>
			<span className='visually-hidden'>Toggle state sidebar</span>
			<PanelLeftClose size={22} />
		</Button>
	);
}
