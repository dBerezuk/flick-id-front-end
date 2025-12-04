import type { Metadata } from 'next';

import { WatchLater } from './WatchLater';

export const metadata: Metadata = {
	title: 'Watch later'
};

export default function page() {
	return <WatchLater />;
}
