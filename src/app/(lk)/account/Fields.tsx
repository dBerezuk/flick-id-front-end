import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import Field from '@/ui/field/Field';

import type { TUpdateUserData } from '@/types/user.types';

interface IProps {
	register: UseFormRegister<TUpdateUserData>;
	errors: FieldErrors<TUpdateUserData>;
	isLoading: boolean;
}

export function Fields({ register, errors, isLoading }: IProps) {
	return (
		<div>
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
				label='Password'
				placeholder='Enter a password'
				type='password'
				isLoading={isLoading}
				error={errors.password}
				{...register('password', {
					minLength: {
						value: 6,
						message: 'Password must be longer than or equal to 6 characters'
					}
				})}
			/>
		</div>
	);
}
