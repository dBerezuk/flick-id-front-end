import { X } from 'lucide-react';
import { useContext } from 'react';

import Button from '@/ui/button/Button';
import { EnumButtonVariable } from '@/ui/button/button.types';

import { MediaContext } from '../../Media';

export function ResetButton() {
	const { urlSearchParams, searchParams, onClear } = useContext(MediaContext);

	return (
		<Button
			className={!urlSearchParams.size ? 'scale-0 opacity-0' : ''}
			variable={EnumButtonVariable.PLAIN_PRIMARY}
			onClick={onClear}
		>
			<span className='visually-hidden'>Clear filters and sorting a media</span>
			<X />
		</Button>
	);
}
