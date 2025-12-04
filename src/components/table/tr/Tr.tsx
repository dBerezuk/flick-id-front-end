import { Pencil, X } from 'lucide-react';

import Button from '@/ui/button/Button';
import { EnumButtonVariable } from '@/ui/button/button.types';
import { Skeleton } from '@/ui/skeleton/Skeleton';

import type { ITableDataItem } from '../table.types';

import type { ITrProps } from './tr.types';

import styles from './Tr.module.scss';

export function Tr({ data, head, isLoading, onEditLink, onDeleteAction }: ITrProps) {
	return (
		<tr className={styles.tr}>
			{head?.map(title => (
				<td key={title}>
					{isLoading ? (
						<Skeleton className={styles.skeletonData} />
					) : (
						data?.[title.toLocaleLowerCase() as keyof ITableDataItem]
					)}
				</td>
			))}
			<td className={styles.actions}>
				<div>
					{isLoading ? (
						<Skeleton
							className={styles.skeletonButton}
							count={2}
						/>
					) : (
						<>
							{onEditLink && data && (
								<Button
									as='link'
									href={onEditLink(data.id)}
									variable={EnumButtonVariable.PLAIN_RED_ACTION}
								>
									<Pencil size={18} />
								</Button>
							)}
							{onDeleteAction && data && (
								<Button
									variable={EnumButtonVariable.PLAIN_RED_ACTION}
									onClick={() => onDeleteAction(data.id)}
								>
									<X size={18} />
								</Button>
							)}
						</>
					)}
				</div>
			</td>
		</tr>
	);
}
