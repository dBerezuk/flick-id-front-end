import type { Metadata } from 'next';

import { Edit } from './Edit';

export const metadata: Metadata = {
	title: 'Edit Genre'
};

export default function Page() {
	return <Edit />;
}
