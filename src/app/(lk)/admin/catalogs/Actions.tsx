import { Plus } from 'lucide-react';

import Button from '@/ui/button/Button';
import { EnumButtonVariable } from '@/ui/button/button.types';

import { PRIVATE_PAGES } from '@/config/pages/private-pages.config';

export function Actions() {
	return (
		<Button
			className='!flex items-center gap-x-1'
			as='link'
			href={PRIVATE_PAGES.ADMIN_CATALOGS_CREATE}
			variable={EnumButtonVariable.DEFAULT_MINI}
		>
			Create catalog <Plus size={17} />
		</Button>
	);
}
