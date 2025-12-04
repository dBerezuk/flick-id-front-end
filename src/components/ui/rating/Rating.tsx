import cn from 'clsx';
import { Star } from 'lucide-react';

import { EnumRatingVariable, type IRatingProps } from './rating.types';

import styles from './Rating.module.scss';

export function Rating({ rating, variable = EnumRatingVariable.DEFAULT }: IRatingProps) {
	return (
		<span className={cn(styles.rating, styles[variable])}>
			<Star size={variable === EnumRatingVariable.MIN_SIZE ? 14 : 16} />
			{rating}
		</span>
	);
}
