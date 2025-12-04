import { Filter, ListFilter } from 'lucide-react';

import { useOutside } from '@/hooks/useOutside';

import { ResetButton } from './ResetButton';
import { ItemAction } from './item-action/ItemAction';

import styles from './Actions.module.scss';

export function Actions() {
	const {
		ref: refFilter,
		isShow: isShowFilter,
		setIsShow: setIsShowFilter
	} = useOutside<HTMLLIElement>(false);

	const {
		ref: refSorting,
		isShow: isShowSorting,
		setIsShow: setIsShowSorting
	} = useOutside<HTMLLIElement>(false);

	const onShowFilterToggle = () => setIsShowFilter(prev => !prev);
	const onShowSortingToggle = () => setIsShowSorting(prev => !prev);

	return (
		<div className={styles.box}>
			<ResetButton />
			<ul className={styles.actions}>
				<ItemAction
					ref={refSorting}
					Icon={ListFilter}
					isShow={isShowSorting}
					onShowToggle={onShowSortingToggle}
				/>
				<ItemAction
					ref={refFilter}
					type='filters'
					Icon={Filter}
					isShow={isShowFilter}
					onShowToggle={onShowFilterToggle}
				/>
			</ul>
		</div>
	);
}
