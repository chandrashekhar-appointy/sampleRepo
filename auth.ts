import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [Google],
	callbacks: {
		signIn: async ({ account, profile }) => {
			if (account.provider === 'google' && profile.email_verified) {
				if (profile.email.endsWith('@appointy.com')) {
					return true;
				}
			}
			return false;
		},
	},
});
