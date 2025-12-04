import localFont from 'next/font/local';

export const montserrat = localFont({
	src: [
		{
			path: './montserrat/Montserrat-Bold.woff2',
			weight: '700'
		},
		{
			path: './montserrat/Montserrat-SemiBold.woff2',
			weight: '600'
		},
		{
			path: './montserrat/Montserrat-Medium.woff2',
			weight: '500'
		},
		{
			path: './montserrat/Montserrat-Regular.woff2',
			weight: '400'
		},
		{
			path: './montserrat/Montserrat-Light.woff2',
			weight: '300'
		},
		{
			path: './montserrat/Montserrat-Thin.woff2',
			weight: '200'
		}
	],
	fallback: ['sans-serif'],
	variable: '--font-montserrat'
});
