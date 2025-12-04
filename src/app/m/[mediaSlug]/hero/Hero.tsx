import Image from 'next/image';

import { Rating } from '@/ui/rating/Rating';

import { PATH_UPLOAD_FOLDERS } from '@/config/path-upload-folders.config';

import { Info } from './Info/Info';
import type { IMedia } from '@/types/media.types';

import styles from './Hero.module.scss';

interface IProps {
	media: IMedia;
}

export function Hero({ media }: IProps) {
	return (
		<section className={styles.hero}>
			<div className={styles.poster}>
				<Image
					src={PATH_UPLOAD_FOLDERS.getMediaPosters(media.posterFileName)}
					width={224}
					height={320}
					quality={100}
					priority
					alt={`poster ${media.title}`}
				/>
				<Rating rating={3.9} />
			</div>
			<Info media={media} />
		</section>
	);
}
