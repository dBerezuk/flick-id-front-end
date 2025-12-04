import { useEffect } from 'react';

interface IProps {
	hasNextPage: boolean;
	isFetchingNextPage: boolean;
	fetchNextPage: () => void;
}

export function useEffectScroll({ fetchNextPage, hasNextPage, isFetchingNextPage }: IProps) {
	useEffect(() => {
		const handleScroll = () => {
			const isBottomScreen =
				window.innerHeight + document.documentElement.scrollTop >=
				document.documentElement.offsetHeight * 0.99;

			if (isBottomScreen && hasNextPage && !isFetchingNextPage) {
				fetchNextPage();
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [hasNextPage, isFetchingNextPage, fetchNextPage]);
}
