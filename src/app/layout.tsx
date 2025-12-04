import type { Metadata, Viewport } from 'next';

import { RootLayout } from '@/components/layouts/root-layout/RootLayout';

import { Providers } from '@/providers/Providers';

import COLORS from '@/constants/color.constants';
import { SITE_NAME, SITE_URL } from '@/constants/seo.constants';

import { montserrat } from '@/assets/fonts';
import { catalogsService } from '@/services/globals.service';
import type { ICatalog } from '@/types/catalog.types';

import '@/styles/styles.scss';

export const metadata: Metadata = {
	icons: {
		icon: '/icons/icon.svg',
		shortcut: '/icons/icon.svg',
		apple: '/icons/icon-256.png',
		other: {
			rel: 'touch-icons',
			url: '/icons/icon-256.png',
			sizes: '256x256',
			type: 'image/png'
		}
	},
	title: {
		absolute: 'Home',
		template: `${SITE_NAME} | %s`
	},
	description: 'Flick.id is the best platform for watching movies.',
	openGraph: {
		type: 'website',
		siteName: 'localhost',
		emails: [`info@flick-id.com`],
		images: [
			{
				url: '/images/og.jpg',
				width: 909,
				height: 500,
				alt: `${SITE_NAME}`
			}
		]
	},
	metadataBase: new URL(SITE_URL),
	applicationName: `${SITE_NAME}`,
	authors: {
		name: 'Denis Berezuk',
		url: 'https://htmllessons.io'
	},
	manifest: '/manifest.json',
	publisher: 'Denis Berezuk',
	formatDetection: {
		telephone: false
	}
};

export const viewport: Viewport = {
	themeColor: COLORS.background
};

export const fetchCache = 'default-cache';

export const revalidate = 180;

export default async function layout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const catalog = await catalogsService.get<ICatalog[]>();

	return (
		<html
			className={montserrat.variable}
			lang='en'
		>
			<body suppressHydrationWarning>
				<Providers>
					<RootLayout catalog={catalog}>{children}</RootLayout>
				</Providers>
			</body>
		</html>
	);
}
