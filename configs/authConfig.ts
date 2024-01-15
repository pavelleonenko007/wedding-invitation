import type { AuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				console.log(credentials);
				const user = {
					username: 'admin',
					password: 'evelina',
				};

				if (credentials?.username !== 'admin') return null;

				if (credentials.password === user.password) {
					return {
						name: 'Admin',
						email: 'pavel.leonenko374@gmail.com',
						id: '1',
					} as User;
				}

				return null;
			},
		}),
	],
	pages: {
		signIn: '/login',
	},
};
