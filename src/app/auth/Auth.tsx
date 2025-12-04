'use client';

import Field from '@/components/ui/field/Field';

import Button from '@/ui/button/Button';
import { EnumButtonVariable } from '@/ui/button/button.types';

import { SITE_NAME } from '@/constants/seo.constants';

import useAuth from './useAuth';

import styles from './Auth.module.scss';

function Auth() {
	const { isLogin, register, isLoading, handleSubmit, errors, onSubmit, onSelectTypeAuth } =
		useAuth();

	return (
		<section className={styles.auth}>
			<h1 className='visually-hidden'>Auth</h1>
			<form
				className={styles.form}
				data-first-letter={SITE_NAME[0]}
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className={styles.heading}>{isLogin ? 'Login' : 'Registration'}</h2>
				<div className={styles.fields}>
					<Field
						label='Email'
						type='email'
						placeholder='Enter email'
						error={errors.email}
						{...register('email', {
							required: 'Email is a required field'
						})}
					/>
					<Field
						label='Password'
						type='password'
						placeholder='Enter password'
						error={errors.password}
						{...register('password', {
							required: 'Password is a required field',
							minLength: {
								value: 6,
								message: 'Password must be longer than or equal to 6 characters'
							}
						})}
					/>
				</div>
				<Button
					className='w-full mb-6'
					type='submit'
					isLoading={isLoading}
				>
					{isLogin ? 'Login' : 'Register'}
				</Button>
				<footer className={styles.footer}>
					{/* {isLogin && (
						<Button
							className='!text-purple-200 hover:!text-purple-100'
							as='link'
							href={PUBLIC_PAGES.HOME}
							variable={EnumButtonVariable.PLAIN}
						>
							Forgot your password?
						</Button>
					)} */}
					<div className={styles.info}>
						<span>{isLogin ? "Don't have an account" : 'Already have an account'}?</span>
						<Button
							variable={EnumButtonVariable.PLAIN_PRIMARY}
							onClick={onSelectTypeAuth}
						>
							{isLogin ? 'Registration' : 'Login'}
						</Button>
					</div>
				</footer>
			</form>
		</section>
	);
}

export default Auth;
