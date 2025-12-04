import { Skeleton } from '@/ui/skeleton/Skeleton';
import { EnumSkeletonVariable } from '@/ui/skeleton/skeleton.types';

export function SkeletonContent() {
	return (
		<Skeleton
			className='h-72'
			variable={EnumSkeletonVariable.SECONDARY}
		/>
	);
}
