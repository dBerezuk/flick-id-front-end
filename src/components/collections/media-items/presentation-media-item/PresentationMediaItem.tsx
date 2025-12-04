import cn from 'clsx';
import { CirclePlay } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { PUBLIC_PAGES } from '@/config/pages/public-pages.config';
import { PATH_UPLOAD_FOLDERS } from '@/config/path-upload-folders.config';

import type { IMedia } from '@/types/media.types';

import styles from './PresentationMediaItem.module.scss';

interface Props {
	media: IMedia;
}

export function PresentationMediaItem({ media }: Props) {
	return (
		<article className={cn(styles.item, 'group')}>
			<Link href={PUBLIC_PAGES.media(media.slug)}>
				{media.posterFullFileName && (
					<div className={styles.images}>
						<div className={styles.image}>
							<Image
								className={'group-hover:scale-105'}
								src={PATH_UPLOAD_FOLDERS.getMediaFullPosters(media.posterFullFileName)}
								fill
								sizes='100%, 100%'
								quality={100}
								priority
								alt={`full poster media ${media.title}`}
							/>
						</div>
						<Image
							className={styles.shadow}
							src={PATH_UPLOAD_FOLDERS.getMediaFullPosters(media.posterFullFileName)}
							fill
							sizes='100%, 100%'
							quality={100}
							priority
							alt={`colored shadow from full poster media ${media.title}`}
						/>
					</div>
				)}
				<div className={styles.content}>
					<h3>{media.title}</h3>
					<div className='group-hover:opacity-100'>
						<CirclePlay className='group-hover:scale-110' />
						<span>Let's watch a movie</span>
					</div>
				</div>
			</Link>
		</article>
	);
}
