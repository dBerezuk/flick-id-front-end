import { useQuery } from '@tanstack/react-query';
import { useParams, usePathname } from 'next/navigation';

import type { ICatalogProps } from '@/components/layouts/root-layout/root-layout.types';

import { PUBLIC_PAGES } from '@/config/pages/public-pages.config';

import { Item } from './item/Item';
import { catalogsService } from '@/services/globals.service';
import type { ICatalog } from '@/types/catalog.types';

import styles from './List.module.scss';

type TParams = Partial<{ catalogSlug: string }>;

export function List({ catalog }: ICatalogProps) {
	const pathname = usePathname();

	const { catalogSlug } = useParams<TParams>();

	const { data } = useQuery<ICatalog[]>({
		queryKey: ['catalogs'],
		queryFn: () => catalogsService.get(),
		placeholderData: catalog
	});

	return (
		<ul className={styles.list}>
			<Item
				href={PUBLIC_PAGES.HOME}
				isActive={pathname === PUBLIC_PAGES.HOME}
			>
				All
			</Item>
			{data?.map(({ id, slug, title }) => (
				<Item
					href={PUBLIC_PAGES.catalog(slug)}
					isActive={slug === catalogSlug}
					key={id}
				>
					{title}
				</Item>
			))}
		</ul>
	);
}
