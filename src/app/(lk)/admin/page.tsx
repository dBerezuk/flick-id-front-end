import type { Metadata } from 'next';

import { Content } from '@/components/layouts/account-layout/content/Content';

import { Admin } from './Admin';

export const metadata: Metadata = {
	title: 'Admin home'
};

export default function page() {
	return (
		<Content
			titlePage='Admin home'
			titleSection='Statistics'
		>
			<Admin />
		</Content>
	);
}
