interface IDataStatistics {
	date: string;
	count: number;
}

interface ICreatesByDayLastWeekStatistics {
	createsByDayLastWeek: IDataStatistics[];
}

interface IUsersStatistics extends ICreatesByDayLastWeekStatistics {
	totalUsers: number;
	totalAdminUsers: number;
}

interface IMediaStatistics extends ICreatesByDayLastWeekStatistics {
	totalMedia: number;
}

export interface IStatistics {
	users: IUsersStatistics;
	media: IMediaStatistics;
}
