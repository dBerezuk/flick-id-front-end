import { useContext } from 'react';

import { GenreItem } from '@/components/collections/genre-item/GenreItem';

import { MediaContext } from '../Media';

import type { IGenre } from '@/types/genre.types';

import styles from './Genres.module.scss';

interface IProps {
	genres: IGenre[];
}

export function Genres({ genres }: IProps) {
	const { urlSearchParams, onUpdateSearchParams } = useContext(MediaContext);

	const onSelect = (id: IGenre['id']) => onUpdateSearchParams('genreId', id);

	return (
		<div className={styles.genres}>
			<GenreItem
				id=''
				title='All media'
				onSelect={onSelect}
				isActive={!urlSearchParams.get('genreId')}
			/>
			{genres.map(genre => (
				<GenreItem
					id={genre.id}
					title={genre.title}
					onSelect={onSelect}
					isActive={urlSearchParams.get('genreId') === genre.id}
					key={genre.id}
				/>
			))}
		</div>
	);
}
