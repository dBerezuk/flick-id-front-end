import type { Metadata } from 'next';

import { Media } from './Media';
import { mediaService } from '@/services/globals.service';
import type { IMedia, TMediaPaginate } from '@/types/media.types';
import type { IPage } from '@/types/page.types';

export type TProps = IPage<{ mediaSlug: string }>;

export async function generateMetadata({ params }: TProps): Promise<Metadata> {
	const endpoints = await params;

	return {
		title: endpoints.mediaSlug
	};
}

export async function generateStaticParams() {
	const media = await mediaService.get<TMediaPaginate>();

	return media.items.map(({ slug }) => ({
		mediaSlug: slug
	}));
}

export default async function Page({ params }: TProps) {
	const endpoints = await params;

	const media = await mediaService.get<IMedia>({ endpoints: `/${endpoints.mediaSlug}` });

	return <Media media={media} />;
}
