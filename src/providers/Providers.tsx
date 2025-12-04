'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'jotai';
import type { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

import COLORS from '@/constants/color.constants';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			refetchOnWindowFocus: false
		},
		mutations: {
			retry: 1
		}
	}
});

export function Providers({ children }: PropsWithChildren) {
	return (
		<Provider>
			<QueryClientProvider client={queryClient}>
				{children}
				<Toaster toastOptions={{
					style: {
						backgroundColor: COLORS.dark,
						color: 'white'
					}
				}} />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</Provider>
	);
}
