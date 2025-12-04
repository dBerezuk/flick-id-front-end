import type { Metadata } from 'next';

import { Catalogs } from './Catalogs';

export const metadata: Metadata = {
	title: 'Catalogs'
};

export default function page() {
	return <Catalogs />;
}
