import { type FieldError as TFieldError } from 'react-hook-form';

import styles from './FieldError.module.scss';

interface IProps {
	error: TFieldError | undefined;
}

export function FieldError({ error }: IProps) {
	return (
		<p
			className={styles.error}
			role='status'
			aria-live='polite'
			aria-atomic='true'
		>
			{error?.message}
		</p>
	);
}
