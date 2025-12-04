import { connection } from 'next/server';

import Auth from './Auth';

async function AuthPage() {
	await connection();

	return <Auth />;
}

export default AuthPage;
