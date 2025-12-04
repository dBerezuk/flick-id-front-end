import { PATH_UPLOAD_FOLDERS } from '@/config/path-upload-folders.config';

import { EnumUploadFolders } from '../upload.types';

import type { IPreviewProps } from './preview.types';

export const usePreview = ({
	value,
	defaultValue,
	folder
}: Pick<IPreviewProps, 'value' | 'defaultValue' | 'folder'>) => {
	const isVideo = value?.split('.').at(-1);
	let src: string = defaultValue;

	if (value) {
		switch (folder) {
			case EnumUploadFolders.USER_AVATARS:
				src = PATH_UPLOAD_FOLDERS.getUserAvatars(value);
				break;
			case EnumUploadFolders.MEDIA_FULL_POSTERS:
				src = PATH_UPLOAD_FOLDERS.getMediaFullPosters(value);
				break;
			case EnumUploadFolders.MEDIA_POSTERS:
				src = PATH_UPLOAD_FOLDERS.getMediaPosters(value);
				break;
			case EnumUploadFolders.MEDIA_VIDEOS:
				src = PATH_UPLOAD_FOLDERS.getMediaVideos(value);
				break;
		}
	}

	return { isVideo, src };
};
