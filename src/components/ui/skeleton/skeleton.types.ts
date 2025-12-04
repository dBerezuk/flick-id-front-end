import type { CSSProperties } from 'react';

export enum EnumSkeletonVariable {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	DARK = 'dark'
}

export interface ISkeletonProps {
	count?: number;
	className?: string;
	style?: CSSProperties;
	variable?: EnumSkeletonVariable;
}
