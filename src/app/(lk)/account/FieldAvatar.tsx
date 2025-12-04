import { type Control, Controller } from 'react-hook-form';

import { Upload } from '@/components/upload/Upload';
import { EnumUploadFolders } from '@/components/upload/upload.types';

import type { TUpdateUserData } from '@/types/user.types';
import { PATH_UPLOAD_FOLDERS } from '@/config/path-upload-folders.config'

interface IProps {
	control: Control<TUpdateUserData, any>;
	isLoading: boolean;
}

export function FieldAvatar({ control, isLoading }: IProps) {
	return (
		<div>
			<Controller
				name='avatarFileName'
				control={control}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<Upload
						label='Upload your avatar'
						value={value}
						defaultValue={process.env.NEXT_PUBLIC_DEFAULT_AVATAR_URL!}
						alt='preview you avatar profile'
						isLoading={isLoading}
						folder={EnumUploadFolders.USER_AVATARS}
						onChange={onChange}
						error={error}
					/>
				)}
			/>
		</div>
	);
}
