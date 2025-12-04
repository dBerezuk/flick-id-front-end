import { getDateFullCompact } from '@/utils/date-formats';

import { Header } from './header/Header';
import type { IMedia } from '@/types/media.types';

import styles from './Info.module.scss';

interface IProps {
	media: IMedia;
}

export function Info({ media }: IProps) {
	return (
		<div className={styles.info}>
			<Header
				id={media.id}
				title={media.title}
			/>
			<ul className={styles.list}>
				<li className={styles.item}>
					<strong>Country</strong>
					<span>{media.country}</span>
				</li>
				<li className={styles.item}>
					<strong>Premiere</strong>
					<span>{getDateFullCompact(media.premiere)}</span>
				</li>
				<li className={styles.item}>
					<strong>Slogan</strong>
					<p>{media.slogan}</p>
				</li>
				<li className={styles.item}>
					<strong>Description</strong>
					<p>{media.description}</p>
				</li>
			</ul>
		</div>
	);
}
