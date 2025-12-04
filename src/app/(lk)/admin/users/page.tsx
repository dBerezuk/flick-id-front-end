import type { Metadata } from 'next';

import { Users } from './Users';

export const metadata: Metadata = {
	title: 'Users'
};

export default function page() {
	return <Users />;
}
