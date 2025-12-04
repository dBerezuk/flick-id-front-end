import Image from 'next/image';
import Link from 'next/link';

import { Rating } from '@/ui/rating/Rating';

import { PUBLIC_PAGES } from '@/config/pages/public-pages.config';
import { PATH_UPLOAD_FOLDERS } from '@/config/path-upload-folders.config';

import { getDateYear } from '@/utils/date-formats';

import type { IMedia } from '@/types/media.types';

import styles from './MediaItem.module.scss';

interface IProps {
	media: IMedia;
}

export function MediaItem({ media }: IProps) {
	return (
		<article className={styles.item}>
			<Link href={PUBLIC_PAGES.media(media.slug)}>
				<Image
					className={styles.image}
					src={PATH_UPLOAD_FOLDERS.getMediaPosters(media.posterFileName)}
					width={216}
					height={291}
					alt={`poster media ${media.title}`}
				/>
				<h3 className={styles.title}>{media.title}</h3>
				<div className={styles.info}>
					<Rating rating={3.8} />
					<span>{getDateYear(media.premiere)}</span>
				</div>
			</Link>
		</article>
	);
}
