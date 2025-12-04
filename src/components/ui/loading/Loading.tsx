import cn from 'clsx';
import { LoaderCircle } from 'lucide-react';

import styles from './Loading.module.scss';

interface IProps {
	isCenter?: boolean;
}

export function Loading({ isCenter = true }: IProps) {
	return <LoaderCircle className={cn(styles.loader, isCenter && 'mx-auto')} />;
}
