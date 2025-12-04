class PrivatePages {
	constructor() {}

	readonly ACCOUNT: string = '/account';
	readonly HISTORY_VIEWS: string = `${this.ACCOUNT}/history-views`;
	readonly WATCH_LATER: string = `${this.ACCOUNT}/watch-later`;

	readonly ADMIN: string = '/admin';

	readonly ADMIN_USERS: string = `${this.ADMIN}/users`;

	adminUsersEdit(path: string) {
		return `${this.ADMIN_USERS}/edit/${path}`;
	}

	readonly ADMIN_CATALOGS: string = `${this.ADMIN}/catalogs`;
	readonly ADMIN_CATALOGS_CREATE: string = `${this.ADMIN_CATALOGS}/create`;

	adminCatalogsEdit(path: string): string {
		return `${this.ADMIN_CATALOGS}/edit/${path}`;
	}

	readonly ADMIN_GENRES: string = `${this.ADMIN}/genres`;
	readonly ADMIN_GENRES_CREATE: string = `${this.ADMIN_GENRES}/create`;

	adminGenresEdit(path: string): string {
		return `${this.ADMIN_GENRES}/edit/${path}`;
	}

	readonly ADMIN_MEDIA: string = `${this.ADMIN}/media`;
	readonly ADMIN_MEDIA_CREATE: string = `${this.ADMIN_MEDIA}/create`;

	adminMediaEdit(path: string): string {
		return `${this.ADMIN_MEDIA}/edit/${path}`;
	}
}

export const PRIVATE_PAGES = new PrivatePages();
