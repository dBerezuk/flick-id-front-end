'use client';

import { Controller } from 'react-hook-form';

import { Content } from '@/components/layouts/account-layout/content/Content';
import { Upload } from '@/components/upload/Upload';
import { EnumUploadFolders } from '@/components/upload/upload.types';

import Button from '@/ui/button/Button';
import Field from '@/ui/field/Field';

import { useEdit } from './useEdit';

import styles from './Edit.module.scss';

export function Edit() {
	const { handleSubmit, onSubmit, register, control, errors, isLoading, isUpdateUserLoading } =
		useEdit();

	return (
		<Content
			titlePage='Admin edit user'
			titleSection='Edit user'
		>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className={styles.fields}>
					<Field
						label='Email*'
						placeholder='Enter a email'
						type='email'
						isLoading={isLoading}
						error={errors.email}
						{...register('email', { required: 'Email is a required field' })}
					/>
					<Field
						label='Name'
						placeholder='Enter a name'
						isLoading={isLoading}
						error={errors.name}
						{...register('name', {
							maxLength: {
								value: 50,
								message: 'The name must be no more than 50 characters'
							}
						})}
					/>
					<Field
						label='Admin'
						type='checkbox'
						isLoading={isLoading}
						error={errors.isAdmin}
						{...register('isAdmin')}
					/>
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
				<Button
					type='submit'
					isLoading={isUpdateUserLoading}
					disabled={isLoading}
				>
					Save
				</Button>
			</form>
		</Content>
	);
}
