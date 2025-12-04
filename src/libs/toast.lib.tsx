import Button from '@/ui/button/Button';

interface IArguments {
	message?: string;
	buttonActionText: string;
	buttonAction: () => void;
}

export const confirmToast = async ({ message, buttonActionText, buttonAction }: IArguments) => {
	const { toast } = await import('react-hot-toast');

	const onAction = (id: any) => {
		buttonAction();

		toast.dismiss(id);
	};

	toast(
		(t: any) => (
			<div>
				{message && <p className='text-center mb-2'>{message}</p>}
				<div className='flex items-center gap-4'>
					<Button
						className='w-full'
						onClick={() => onAction(t.id)}
					>
						{buttonActionText}
					</Button>
					<Button
						className='w-full'
						onClick={() => toast.dismiss(t.id)}
					>
						Cancel
					</Button>
				</div>
			</div>
		),
		{
			removeDelay: 100000
		}
	);
};
