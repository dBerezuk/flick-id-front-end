import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Trash2 } from 'lucide-react';

import Button from '@/ui/button/Button';
import { EnumButtonVariable } from '@/ui/button/button.types';

import { isFetching } from '@/utils/check';

import { usersMediaHistoryService } from '@/services/globals.service';
import type { IUserMediaHistory } from '@/types/user-media-history';

export function HistoryViewsActions() {
	const queryClient = useQueryClient();

	const allUserMediaHistory = queryClient.getQueryState<IUserMediaHistory[]>([
		'all.user.media.history'
	]);

	const { mutate, isPending } = useMutation({
		mutationKey: ['clear.all.user.media.history'],
		mutationFn: () => usersMediaHistoryService.delete<boolean>({ isAuth: true }),
		onSuccess: async () => {
			const { toast } = await import('react-hot-toast');

			queryClient.invalidateQueries({ queryKey: ['all.user.media.history'] });

			toast.success('History cleared successfully', { id: 'history-clear' });
		}
	});

	const isLoading = isFetching(allUserMediaHistory?.fetchStatus) || isPending;

	return (
		!!allUserMediaHistory?.data?.length && (
			<Button
				onClick={() => mutate()}
				variable={EnumButtonVariable.PLAIN_RED_ACTION}
				isLoading={isLoading}
			>
				<span className='visually-hidden'>Clear history</span>
				<Trash2 size={22} />
			</Button>
		)
	);
}
