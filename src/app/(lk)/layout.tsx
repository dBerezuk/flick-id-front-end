import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import { AccountLayout } from '@/components/layouts/account-layout/AccountLayout';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

import { EnumCookieKeys } from '@/config/cookies.config';

export const metadata: Metadata = {
	...NO_INDEX_PAGE
};

export default async function layout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookie = await cookies();
	const initialIsCollapsedSidebar =
		cookie.get(EnumCookieKeys.IS_COLLAPSED_ACCOUNT_SIDEBAR)?.value === 'true';

	return (
		<AccountLayout initialIsCollapsedSidebar={initialIsCollapsedSidebar}>{children}</AccountLayout>
	);
}
