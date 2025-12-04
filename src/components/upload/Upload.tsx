import cn from 'clsx';
import { UploadIcon } from 'lucide-react';

import { FieldError } from '@/ui/field-error/FieldError';

import { useUpload } from './hooks/useUpload';
import { Preview } from './preview/Preview';
import { type IUploadProps } from './upload.types';

import styles from './Upload.module.scss';

export function Upload({
	label,
	className,
	isLoading,
	value,
	defaultValue,
	alt,
	folder,
	onChange,
	error
}: IUploadProps) {
	const {
		fun: { onUploadFiles, onClear, onDrag, onDrop },
		state: { dragActive, isUploadLoading }
	} = useUpload({ folder, onChange });

	const isGeneralLoading = isLoading || isUploadLoading;

	return (
		<div className={styles.box}>
			<span className={styles.title}>{label}</span>
			<div className={styles.content}>
				<Preview
					isLoading={isGeneralLoading}
					onClear={onClear}
					value={value}
					folder={folder}
					defaultValue={defaultValue}
					alt={alt}
				/>
				<label
					className={cn(styles.upload, dragActive && styles.active, className)}
					onDragEnter={onDrag}
					onDragLeave={onDrag}
					onDragOver={onDrag}
					onDrop={onDrop}
				>
					<span className='visually-hidden'>{label}</span>
					<UploadIcon />
					<span>Drag or select a file</span>
					<input
						className='visually-hidden'
						type='file'
						key={value}
						onChange={event => onUploadFiles(event.currentTarget.files)}
					/>
				</label>
			</div>
			<FieldError error={error} />
		</div>
	);
}
