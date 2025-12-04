import type { Metadata } from 'next';

import { Create } from './Create';

export const metadata: Metadata = {
	title: 'Create catalog'
};

export default function page() {
	return <Create />;
}
