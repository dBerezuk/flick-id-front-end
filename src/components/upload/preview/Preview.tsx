import { Trash } from 'lucide-react';
import Image from 'next/image';

import { Skeleton } from '@/ui/skeleton/Skeleton';
import { EnumSkeletonVariable } from '@/ui/skeleton/skeleton.types';

import type { IPreviewProps } from './preview.types';
import { usePreview } from './usePreview';

import styles from './Preview.module.scss';

export function Preview({ isLoading, value, folder, defaultValue, alt, onClear }: IPreviewProps) {
	const { isVideo, src } = usePreview({ value, defaultValue, folder });

	return isLoading ? (
		<Skeleton
			className={styles.mediaSkeleton}
			variable={EnumSkeletonVariable.SECONDARY}
		/>
	) : (
		<div className={styles.preview}>
			{isVideo === 'mp4' ? (
				<video
					className={styles.media}
					width={128}
					height={128}
					src={src}
					autoPlay
					muted
					loop
				>
					Your browser does not support the video tag.
				</video>
			) : (
				<Image
					className={styles.media}
					src={src}
					width={128}
					height={128}
					priority
					alt={alt}
				/>
			)}
			{value && (
				<button
					className={styles.clear}
					type='button'
					onClick={onClear}
				>
					<Trash size={18} />
				</button>
			)}
		</div>
	);
}
