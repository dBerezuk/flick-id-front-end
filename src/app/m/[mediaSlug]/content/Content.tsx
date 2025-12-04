import type { IMedia } from '@/types/media.types';

import styles from './Content.module.scss';
import { VideoPlayer } from '@/ui/video-player/VideoPlayer'

type TProps = Pick<IMedia, 'mediaFileName'>;

export function Content({ mediaFileName }: TProps) {
	return (
		<div className={styles.content}>
			<VideoPlayer mediaFileName={mediaFileName} />
		</div>
	);
}
