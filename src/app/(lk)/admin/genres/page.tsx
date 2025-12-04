import type { Metadata } from 'next';

import { Genres } from './Genres';

export const metadata: Metadata = {
	title: 'Genres'
};

export default function page() {
	return <Genres />;
}
