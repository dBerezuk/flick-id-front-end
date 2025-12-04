import { type PropsWithChildren } from 'react';

export interface IProps extends PropsWithChildren {
	href: string;
	isActive?: boolean;
}
