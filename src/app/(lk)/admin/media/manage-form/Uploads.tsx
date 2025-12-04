import { Controller } from 'react-hook-form';

import { Upload } from '@/components/upload/Upload';
import { EnumUploadFolders } from '@/components/upload/upload.types';

import type { IManageFormProps } from './manage-form.types';

export function Uploads({ form, isDataLoading }: Pick<IManageFormProps, 'form' | 'isDataLoading'>) {
	return (
		<div>
			<Controller
				name='posterFileName'
				control={form.control}
				rules={{
					required: 'Upload a poster'
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<Upload
						label='Upload your poster'
						value={value}
						defaultValue={process.env.NEXT_PUBLIC_DEFAULT_AVATAR_URL!}
						alt='preview poster media'
						isLoading={isDataLoading}
						folder={EnumUploadFolders.MEDIA_POSTERS}
						onChange={onChange}
						error={error}
					/>
				)}
			/>
			<Controller
				name='posterFullFileName'
				control={form.control}
				rules={{
					required: 'Upload a poster full'
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<Upload
						label='Upload your poster full'
						value={value}
						defaultValue={process.env.NEXT_PUBLIC_DEFAULT_AVATAR_URL!}
						alt='preview poster full media'
						isLoading={isDataLoading}
						folder={EnumUploadFolders.MEDIA_FULL_POSTERS}
						onChange={onChange}
						error={error}
					/>
				)}
			/>
			<Controller
				name='mediaFileName'
				control={form.control}
				rules={{
					required: 'Upload a media'
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<Upload
						label='Upload your media'
						value={value}
						defaultValue={process.env.NEXT_PUBLIC_DEFAULT_AVATAR_URL!}
						alt='preview media'
						isLoading={isDataLoading}
						folder={EnumUploadFolders.MEDIA_VIDEOS}
						onChange={onChange}
						error={error}
					/>
				)}
			/>
		</div>
	);
}
