import cn from 'clsx';

import type { IGenre } from '@/types/genre.types';

import styles from './GenreItem.module.scss';

interface IProps {
	id: IGenre['id'];
	title: IGenre['title'];
	isActive?: boolean;
	onSelect: (id: IGenre['id']) => void;
}

export function GenreItem({ id, title, isActive, onSelect }: IProps) {
	return (
		<button
			className={cn(styles.item, isActive && styles.active)}
			onClick={() => onSelect(id)}
			type='button'
		>
			{title}
		</button>
	);
}
