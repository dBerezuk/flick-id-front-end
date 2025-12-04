import type { Metadata } from 'next';

import { HistoryViews } from './HistoryViews';

export const metadata: Metadata = {
	title: 'History views'
};

export default function page() {
	return <HistoryViews />;
}
