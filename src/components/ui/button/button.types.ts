import type { LinkProps } from 'next/link';
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';

export enum EnumButtonVariable {
	DEFAULT = 'default',
	DEFAULT_MINI = 'default_mini',
	PLAIN = 'plain',
	PLAIN_PRIMARY = 'plain-primary',
	PLAIN_ACCENT = 'plain-accent',
	PLAIN_RED_ACTION = 'plain-red-action',
	CIRCLE = 'circle'
}

interface IButtonBaseProps {
	variable?: EnumButtonVariable;
	isLoading?: boolean;
	isActive?: boolean;
}

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type TLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export type TButtonComponentProps = IButtonBaseProps &
	(
		| (TButtonProps & {
				as?: 'button';
		  })
		| (TLinkProps & {
				as: 'link';
		  })
	);
