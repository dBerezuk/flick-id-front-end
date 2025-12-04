import {
	BetweenHorizontalEnd,
	ChartColumnIncreasing,
	Clapperboard,
	FolderClock,
	Popcorn,
	SquareUserRound,
	Users
} from 'lucide-react';

import { PRIVATE_PAGES } from '@/config/pages/private-pages.config';

import type { IMenuItem } from './menu.types';

export const MENU_ACCOUNT_DATA: IMenuItem[] = [
	{
		Icon: SquareUserRound,
		title: 'Profile',
		path: PRIVATE_PAGES.ACCOUNT
	},
	{
		Icon: FolderClock,
		title: 'History views',
		path: PRIVATE_PAGES.HISTORY_VIEWS
	},
	{
		Icon: Popcorn,
		title: 'Watch later',
		path: PRIVATE_PAGES.WATCH_LATER
	}
];

export const MENU_ADMIN_DATA: IMenuItem[] = [
	{
		Icon: ChartColumnIncreasing,
		title: 'Home',
		path: PRIVATE_PAGES.ADMIN
	},
	{
		Icon: Users,
		title: 'Users',
		path: PRIVATE_PAGES.ADMIN_USERS
	},
	{
		Icon: BetweenHorizontalEnd,
		title: 'Catalogs',
		path: PRIVATE_PAGES.ADMIN_CATALOGS
	},
	{
		Icon: BetweenHorizontalEnd,
		title: 'Genres',
		path: PRIVATE_PAGES.ADMIN_GENRES
	},
	{
		Icon: Clapperboard,
		title: 'Media',
		path: PRIVATE_PAGES.ADMIN_MEDIA
	}
];
