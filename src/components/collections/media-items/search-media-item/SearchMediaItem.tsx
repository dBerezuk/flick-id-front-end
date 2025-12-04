import Image from 'next/image';
import Link from 'next/link';

import { Rating } from '@/ui/rating/Rating';
import { EnumRatingVariable } from '@/ui/rating/rating.types';

import { PUBLIC_PAGES } from '@/config/pages/public-pages.config';
import { PATH_UPLOAD_FOLDERS } from '@/config/path-upload-folders.config';

import { getDateYear } from '@/utils/date-formats';

import type { IMedia } from '@/types/media.types';

import styles from './SearchMediaItem.module.scss';

interface IProps {
	media: IMedia;
}

export function SearchMediaItem({ media }: IProps) {
	return (
		<article className={styles.item}>
			<Link href={PUBLIC_PAGES.media(media.slug)}>
				<Image
					className={styles.image}
					src={PATH_UPLOAD_FOLDERS.getMediaPosters(media.posterFileName)}
					width={60}
					height={60}
					alt={`poster media ${media.title}`}
				/>
				<div className={styles.content}>
					<h2 className={styles.title}>{media.title}</h2>
					<div className={styles.info}>
						<Rating
							rating={3.8}
							variable={EnumRatingVariable.MIN_SIZE}
						/>
						<span className={styles.premiere}>{getDateYear(media.premiere)}</span>
					</div>
				</div>
			</Link>
		</article>
	);
}
