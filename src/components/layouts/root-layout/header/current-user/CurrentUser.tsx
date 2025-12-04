import { useAtomValue } from 'jotai';

import Button from '@/ui/button/Button';

import { PUBLIC_PAGES } from '@/config/pages/public-pages.config';

import { authAtom } from '@/store/auth.store';

import { Profile } from './profile/Profile';

export function CurrentUser() {
	const { isAuth } = useAtomValue(authAtom);

	return (
		<div>
			{isAuth ? (
				<Profile />
			) : (
				<Button
					as='link'
					href={PUBLIC_PAGES.AUTH}
				>
					Login
				</Button>
			)}
		</div>
	);
}
