import { TABLE_HEAD } from './table.data';
import type { ITableProps } from './table.types';
import { Tr } from './tr/Tr';

import styles from './Table.module.scss';

export function Table({ type, data, isLoading, onEditLink, onDeleteAction }: ITableProps) {
	const selectedTableHead = TABLE_HEAD[type];

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					{selectedTableHead.map(title => (
						<th key={title}>{title}</th>
					))}
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{isLoading ? (
					<>
						<Tr
							head={selectedTableHead}
							isLoading={true}
						/>
						<Tr
							head={selectedTableHead}
							isLoading={true}
						/>
						<Tr
							head={selectedTableHead}
							isLoading={true}
						/>
					</>
				) : (
					data?.map(d => (
						<Tr
							key={d.id}
							data={d}
							head={selectedTableHead}
							onEditLink={onEditLink}
							onDeleteAction={onDeleteAction}
						/>
					))
				)}
			</tbody>
		</table>
	);
}
