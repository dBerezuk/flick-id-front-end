'use client';

import { Content } from './content/Content';
import { Hero } from './hero/Hero';
import { useMedia } from './useMedia';
import type { IMedia } from '@/types/media.types';

import styles from './Media.module.scss';

interface IProps {
	media: IMedia;
}

export function Media({ media }: IProps) {
	useMedia(media);

	return (
		<div className={styles.media}>
			<Hero media={media} />
			<Content mediaFileName={media.mediaFileName} />
		</div>
	);
}
