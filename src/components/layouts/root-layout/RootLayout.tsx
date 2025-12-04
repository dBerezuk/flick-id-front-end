'use client';

import { type PropsWithChildren } from 'react';

import { useProfile } from '@/components/layouts/root-layout/useProfile';

import Header from './header/Header';
import type { ICatalogProps } from './root-layout.types';

export function RootLayout({ children, catalog }: PropsWithChildren & ICatalogProps) {
	useProfile();

	return (
		<>
			<Header catalog={catalog} />
			<main className='pb-5'>{children}</main>
		</>
	);
}
