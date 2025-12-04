import type { Metadata } from 'next';

import { Media } from './Media';

export const metadata: Metadata = {
	title: 'Media'
};

export default function page() {
	return <Media />;
}
