'use client';

import { Content } from '@/components/layouts/account-layout/content/Content';

import Button from '@/ui/button/Button';

import { FieldAvatar } from './FieldAvatar';
import { Fields } from './Fields';
import { useUpdateUserProfile } from './useUpdateUserProfile';

import styles from './Account.module.scss';

export function Account() {
	const {
		register,
		handleSubmit,
		onSubmit,
		control,
		errors,
		isLoading,
		isUpdateUserProfileLoading
	} = useUpdateUserProfile();

	return (
		<Content
			titlePage='Profile'
			titleSection='Editing a profile'
		>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<Fields
					register={register}
					isLoading={isLoading}
					errors={errors}
				/>
				<FieldAvatar
					control={control}
					isLoading={isLoading}
				/>
				<Button
					type='submit'
					isLoading={isUpdateUserProfileLoading}
					disabled={isLoading}
				>
					Save
				</Button>
			</form>
		</Content>
	);
}
