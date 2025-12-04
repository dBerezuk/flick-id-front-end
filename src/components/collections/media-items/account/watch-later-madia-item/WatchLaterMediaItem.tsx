import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/ui/button/Button';
import { EnumButtonVariable } from '@/ui/button/button.types';
import { Rating } from '@/ui/rating/Rating';

import { PUBLIC_PAGES } from '@/config/pages/public-pages.config';
import { PATH_UPLOAD_FOLDERS } from '@/config/path-upload-folders.config';

import { getDateYear } from '@/utils/date-formats';

import { useWatchLaterMediaItem } from './useWatchLaterMediaItem';
import type { IMedia } from '@/types/media.types';

import styles from './../AccountMedia.module.scss';

interface IProps {
	media: IMedia;
}

export function WatchLaterMediaItem({ media }: IProps) {
	const { toggleUserMediaWatchLater, isLoading } = useWatchLaterMediaItem(media.id);

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
						<div className='relative flex justify-center'>
							<Button
								isLoading={isLoading}
								onClick={() => toggleUserMediaWatchLater()}
								variable={EnumButtonVariable.PLAIN_RED_ACTION}
							>
								<Trash2 size={20} />
							</Button>
						</div>
						<Rating rating={3.8} />
						<span>{getDateYear(media.premiere)}</span>
					</div>
				</div>
				<p className={styles.description}>{media.description}</p>
			</div>
		</article>
	);
}
