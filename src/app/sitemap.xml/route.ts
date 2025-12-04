import { type ISitemapField, getServerSideSitemap } from 'next-sitemap';

import { SITE_URL } from '@/constants/seo.constants';

import { PUBLIC_PAGES } from '@/config/pages/public-pages.config';

import { mediaService } from '@/services/globals.service';
import type { TMediaPaginate } from '@/types/media.types';

export async function GET(request: Request) {
	const data = await mediaService.get<TMediaPaginate>();

	const fields: ISitemapField[] = [
		{
			loc: SITE_URL,
			lastmod: new Date().toISOString(),
			changefreq: 'daily',
			priority: 0.9
		}
	];

	if (data.items.length) {
		data.items.forEach(media => {
			fields.push({
				loc: `${SITE_URL}${PUBLIC_PAGES.media(media.slug)}`,
				lastmod: new Date(media.updatedAt).toISOString(),
				changefreq: 'daily',
				priority: 1.0
			});
		});
	}

	return getServerSideSitemap(fields);
}
