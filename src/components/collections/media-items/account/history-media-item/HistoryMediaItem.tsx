import Image from 'next/image';
import Link from 'next/link';

import { Rating } from '@/ui/rating/Rating';

import { PUBLIC_PAGES } from '@/config/pages/public-pages.config';
import { PATH_UPLOAD_FOLDERS } from '@/config/path-upload-folders.config';

import { getDateYear } from '@/utils/date-formats';

import type { IMedia } from '@/types/media.types';

import styles from './../AccountMedia.module.scss';

interface IProps {
	media: IMedia;
}

export function HistoryMediaItem({ media }: IProps) {
	return (
		<article className={styles.item}>
			<Link
				className={styles.link}
				href={PUBLIC_PAGES.media(media.slug)}
			></Link>
			<Image
				className={styles.image}
				src={PATH_UPLOAD_FOLDERS.getMediaPosters(media.posterFileName)}
				width={80}
				height={80}
				alt={`poster media ${media.title}`}
			/>
			<div className={styles.content}>
				<div>
					<h3 className={styles.title}>{media.title}</h3>
					<div className={styles.info}>
						<Rating rating={3.8} />
						<span>{getDateYear(media.premiere)}</span>
					</div>
				</div>
				<p className={styles.description}>{media.description}</p>
			</div>
		</article>
	);
}
