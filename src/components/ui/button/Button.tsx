import cn from 'clsx';
import Link from 'next/link';

import { Loading } from '../loading/Loading';

import type { TButtonComponentProps, TButtonProps, TLinkProps } from './button.types';

import styles from './Button.module.scss';

function Button({
	variable,
	className,
	children,
	isLoading,
	isActive,
	as,
	...rest
}: TButtonComponentProps) {
	const classNameStyles = cn(
		styles.button,
		variable ? styles[variable] : styles.default,
		isActive && styles.active,
		className
	);

	return as === 'link' ? (
		<Link
			className={classNameStyles}
			{...(rest as TLinkProps)}
		>
			{children}
		</Link>
	) : (
		<button
			className={classNameStyles}
			type='button'
			{...(rest as TButtonProps)}
			disabled={isLoading || (rest as TButtonProps).disabled}
		>
			{isLoading ? <Loading /> : children}
		</button>
	);
}

export default Button;
