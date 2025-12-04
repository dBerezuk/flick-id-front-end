import { useMutation } from '@tanstack/react-query';

import { REGEX_FILE_IMAGE_TYPES, REGEX_FILE_VIDEO_TYPES } from '@/constants/regex.constants';

import { FILE_IMAGE_MAX_SIZE, FILE_VIDEO_MAX_SIZE } from '@/config/file.config';

import {
	EnumUploadFolders,
	type IQueriesUpload,
	type IUpload,
	type IUploadProps
} from '../upload.types';

import { filesService } from '@/services/globals.service';

export function useUploadFile({ folder, onChange }: Pick<IUploadProps, 'folder' | 'onChange'>) {
	const isVideoFolder = folder === EnumUploadFolders.MEDIA_VIDEOS;

	const fileTypeRegex = isVideoFolder ? REGEX_FILE_VIDEO_TYPES : REGEX_FILE_IMAGE_TYPES;

	const fileMaxSize = (isVideoFolder ? FILE_VIDEO_MAX_SIZE : FILE_IMAGE_MAX_SIZE) * 1024 * 1024;

	const { mutate: uploadFiles, isPending: isUploadLoading } = useMutation({
		mutationKey: ['upload.files'],
		mutationFn: (data: FormData) =>
			filesService.post<IUpload, IQueriesUpload>({
				isAuth: true,
				body: data,
				objectQueries: {
					folder
				},
				headers: {
					'content-Type': 'multipart/form-data'
				}
			}),
		onSuccess: ({ data }) => onChange(data.filenames[0])
	});

	const onUploadFiles = async (files: FileList | null): Promise<void> => {
		const { toast } = await import('react-hot-toast');

		if (!files?.length) return;

		const formData = new FormData();

		for (let i = 0; i < files.length; i++) {
			if (!files[i].type.match(fileTypeRegex)) {
				toast.error('Invalid file type');

				return;
			}

			if (files[i].size > fileMaxSize) {
				toast.error(`The file must be no more than ${fileMaxSize} megabytes`);

				return;
			}

			formData.append('files', files[i]);
		}

		uploadFiles(formData);
	};

	const onClear = () => onChange('');

	return { isUploadLoading, onUploadFiles, onClear };
}
