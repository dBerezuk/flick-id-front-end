// import { plugin } from 'postcss';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

import COLORS from './src/constants/color.constants';

export default {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/libs/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		colors: COLORS,
		extend: {
			animation: {
				open: 'open 0.2s linear'
			},
			keyframes: {
				open: {
					'0%': {
						scale: '1.10',
						opacity: '0',
						transformOrigin: 'top'
					}
				}
			}
		},
		fontFamily: {
			montserrat: ['var(--font-montserrat)']
		},
		container: {
			padding: '1rem',
			center: true,
			screens: {
				'2xl': '88.125rem'
			}
		},
		transitionDelay: {
			DEFAULT: 'ease-in-out'
		},
		transitionDuration: {
			DEFAULT: '200ms'
		}
	},
	plugins: [
		plugin(function ({ addUtilities, addComponents, theme }) {
			addComponents({
				'.title': {
					fontSize: '1.5rem',
					fontWeight: '500'
				}
			});

			addUtilities({
				'.visually-hidden': {
					position: 'absolute !important',
					width: '1px !important',
					height: '1px !important',
					margin: '-1px !important',
					border: '0 !important',
					padding: '0 !important',
					'white-space': 'nowrap !important',
					'clip-path': 'inset(100%) !important',
					clip: 'rect(0, 0, 0, 0) !important',
					overflow: 'hidden !important'
				},
				'.center': {
					display: 'flex',
					alignItems: 'center',
					justifyItems: 'center'
				}
			});
		})
	]
} satisfies Config;
