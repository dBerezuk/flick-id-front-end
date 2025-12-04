class PublicPages {
	constructor() {}

	readonly HOME: string = '/';
	readonly AUTH: string = '/auth';

	catalog(path: string): string {
		return `/catalog/${path}`;
	}

	media(path: string): string {
		return `/m/${path}`;
	}
}

export const PUBLIC_PAGES = new PublicPages();
