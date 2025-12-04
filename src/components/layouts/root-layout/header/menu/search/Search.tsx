import { Search as SearchIcon } from 'lucide-react';

import Button from '@/ui/button/Button';
import { EnumButtonVariable } from '@/ui/button/button.types';
import Field from '@/ui/field/Field';

import { Result } from './result/Result';
import type { ISearchProps } from './search.types';
import { useSearch } from './useSearch';

import styles from './Search.module.scss';

export function Search({ isShowSearch, onShowSearch }: ISearchProps) {
	const { data, isPending, isIdle, debounceSearchTerm, onChangeSearchTerm, onSearch } = useSearch({
		isShowSearch,
		onShowSearch
	});

	return (
		<>
			<search>
				<form
					className={styles.box}
					id='search-form'
				>
					<Field
						onChange={onChangeSearchTerm}
						placeholder='Enter your request'
					/>
				</form>
				<Button
					className={styles.button}
					form='search-form'
					type={isShowSearch ? 'submit' : 'button'}
					isLoading={isPending}
					isActive={isShowSearch}
					onClick={onSearch}
					variable={EnumButtonVariable.CIRCLE}
				>
					<span className='visually-hidden'>search</span>
					<SearchIcon />
				</Button>
			</search>
			<Result
				isShow={!!(isShowSearch && debounceSearchTerm && !isIdle)}
				data={data}
				isPending={isPending}
			/>
		</>
	);
}
