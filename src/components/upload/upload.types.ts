import type { FieldError } from 'react-hook-form';

export interface IUploadProps {
	label?: string;
	className?: string;
	isLoading?: boolean;
	value?: string;
	defaultValue: string;
	alt: string;
	folder: EnumUploadFolders;
	onChange: (...event: any[]) => void;
	error?: FieldError;
}

export interface IUpload {
	filenames: string[];
}

export enum EnumUploadFolders {
	USER_AVATARS = '/user/avatars/',

	MEDIA_FULL_POSTERS = '/media/full-posters/',
	MEDIA_POSTERS = '/media/posters/',
	MEDIA_VIDEOS = '/media/videos/'
}

export interface IQueriesUpload {
	folder: EnumUploadFolders;
}
