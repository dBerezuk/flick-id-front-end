import type { ApexOptions } from 'apexcharts';

export interface IAnalyticCharCardProps {
	title: string;
	total?: string;
	series: ApexOptions['series'];
	className?: string;
	colors: string[];
	strokeColors: string[];
	labels: string[];
	options?: ApexOptions;
	isLoading?: boolean;
}

export type TCharOptions = Pick<
	IAnalyticCharCardProps,
	'colors' | 'strokeColors' | 'labels' | 'options'
>;
