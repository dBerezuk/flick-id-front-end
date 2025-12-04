import type { ApexOptions } from 'apexcharts';

import type { TCharOptions } from './analytic-char-card.types';

export const getAnalyticCharCardOptions = ({
	colors,
	strokeColors,
	labels,
	options
}: TCharOptions): ApexOptions => {
	return {
		chart: {
			type: 'area',
			height: 120,
			sparkline: {
				enabled: true
			},
			animations: {
				enabled: true
			}
		},
		stroke: {
			width: 1,
			curve: 'smooth',
			colors: strokeColors
		},
		markers: {
			size: 0
		},
		colors: colors,
		fill: {
			type: 'gradient',
			gradient: {
				type: 'vertical',
				opacityFrom: 1,
				opacityTo: 0.9
			}
		},
		tooltip: {
			theme: 'dark',
			style: {
				fontFamily: 'montserrat'
			},
			fixed: {
				enabled: false
			},
			x: {
				show: true,
				format: 'dd MMM'
			}
		},
		xaxis: {
			type: 'datetime'
		},
		labels,
		...options
	};
};
