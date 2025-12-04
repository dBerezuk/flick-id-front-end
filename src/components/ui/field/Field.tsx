import cn from 'clsx';

import { FieldError } from '../field-error/FieldError';
import { Skeleton } from '../skeleton/Skeleton';
import { EnumSkeletonVariable } from '../skeleton/skeleton.types';

import type {
	TFieldComponentProps,
	TInputProps,
	TSelectProps,
	TTextareaProps
} from './field.types';

import styles from './Field.module.scss';

function Field({
	label,
	error,
	className,
	isLoading,
	type = 'text',
	options,
	...rest
}: TFieldComponentProps) {
	const isChoice = type === 'checkbox' || type === 'radio';
	const isTextarea = type === 'textarea';
	const isSelect = type === 'select';

	return (
		<div className={cn(styles.field, isChoice && styles.choice)}>
			<label className={styles.label}>
				{isLoading ? (
					<>
						{label && (
							<Skeleton
								className={styles.titleSkeleton}
								variable={EnumSkeletonVariable.SECONDARY}
							/>
						)}
						{!isChoice && (
							<Skeleton
								className={cn(isTextarea ? styles.textareaSkeleton : styles.inputSkeleton)}
								variable={EnumSkeletonVariable.SECONDARY}
							/>
						)}
					</>
				) : (
					<>
						<span className={styles.title}>{label}</span>
						{isTextarea ? (
							<textarea
								className={cn(styles.textarea, className)}
								{...(rest as TTextareaProps)}
							></textarea>
						) : isSelect ? (
							<select
								className={styles.select}
								defaultValue='default'
								{...(rest as TSelectProps)}
							>
								<option
									value='default'
									disabled
								>
									Select an item
								</option>
								{options?.map(({ value, label }) => (
									<option
										key={value}
										value={value}
									>
										{label}
									</option>
								))}
							</select>
						) : (
							<input
								className={cn(styles.input, className)}
								type={type}
								{...(rest as TInputProps)}
							/>
						)}
					</>
				)}
			</label>
			<FieldError error={error} />
		</div>
	);
}

export default Field;
