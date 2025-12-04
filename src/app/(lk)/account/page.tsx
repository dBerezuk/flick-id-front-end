import type { Metadata } from 'next';

import { Account } from './Account';

export const metadata: Metadata = {
	title: 'My account'
};

export default function page() {
	return <Account />;
}
