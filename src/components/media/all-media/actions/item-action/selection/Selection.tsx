import Field from '@/ui/field/Field';
import { Skeleton } from '@/ui/skeleton/Skeleton';
import { EnumSkeletonVariable } from '@/ui/skeleton/skeleton.types';

import { SORTING_DEFAULT_OPTION_SELECTION } from './selection.data';
import type { ISelectionProps } from './selection.types';
import { useSelection } from './useSelection';

import styles from './Selection.module.scss';

export function Selection({ type = 'sorting' }: ISelectionProps) {
	const { data, filters, getIsChecked, onSelect } = useSelection(type);

	return (
		<div className={styles.box}>
			{filters.isLoading ? (
				<Skeleton
					className='h-5'
					variable={EnumSkeletonVariable.DARK}
					count={3}
				/>
			) : (
				<ul>
					{!!data?.length &&
						data.map(data => (
							<li
								className={styles.item}
								key={data[0]}
							>
								<strong className={styles.title}>{data[0]}</strong>
								<ul>
									{data[1].map(item => (
										<li
											className={styles.childItem}
											key={item}
										>
											<Field
												type={type === 'filters' ? 'checkbox' : 'radio'}
												name={data[0]}
												value={
													type === 'sorting' && item === SORTING_DEFAULT_OPTION_SELECTION
														? ''
														: item
												}
												onChange={onSelect}
												label={item.toString()}
												defaultChecked={getIsChecked(data[0], item)}
											/>
										</li>
									))}
								</ul>
							</li>
						))}
				</ul>
			)}
		</div>
	);
}
