import type { Metadata } from 'next';

import { Create } from './Create';

export const metadata: Metadata = {
	title: 'Create Genre'
};

export default function page() {
	return <Create />;
}
