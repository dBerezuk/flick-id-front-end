class PathUploadFolders {
	private readonly root: string = '/uploads';

	private readonly media: string = `${this.root}/media`;
	private readonly user: string = `${this.root}/user`;

	constructor() {}

	getMediaFullPosters(path: string): string {
		return `${this.media}/full-posters/` + path;
	}

	getMediaPosters(path: string): string {
		return `${this.media}/posters/` + path;
	}

	getMediaVideos(path: string): string {
		return `${this.media}/videos/` + path;
	}

	getUserAvatars(path: string): string {
		return `${this.user}/avatars/` + path;
	}
}

export const PATH_UPLOAD_FOLDERS = new PathUploadFolders();
