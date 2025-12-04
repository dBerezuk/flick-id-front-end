import type { JSX, PropsWithChildren } from 'react';

import styles from './Content.module.scss';

interface IProps extends PropsWithChildren {
	titlePage: string;
	titleSection: string;
	actions?: JSX.Element;
}

export function Content({ titlePage, titleSection, actions, children }: IProps) {
	return (
		<>
			<h1 className='visually-hidden'>{titlePage}</h1>
			<section>
				<header className={styles.header}>
					<h2 className={styles.heading}>{titleSection}</h2>
					{actions}
				</header>
				{children}
			</section>
		</>
	);
}
