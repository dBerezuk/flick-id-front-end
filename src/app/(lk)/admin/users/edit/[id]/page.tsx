import type { Metadata } from 'next';

import { Edit } from './Edit';

export const metadata: Metadata = {
	title: 'Edit User'
};

export default function page() {
	return <Edit />;
}
