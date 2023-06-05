import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import envHandler from '@/managers/envHandler';

const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: envHandler('GOOGLE_CLIENT_ID'),
            clientSecret: envHandler('GOOGLE_CLIENT_SECRET'),
            authorization:
                'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&hd=vitstudent.ac.in',
        }),
    ],
    secret: envHandler('JWT_KEY'),
    callbacks: {
        // async signIn({ user, account, profile, email, credentials }) { // can check user in db here
        //     console.log('here');
        //     return false;
        // },
        session: ({ session, user }) => ({
            ...session,
            user: {
                ...session.user,
                id: user.id,
            },
        }),
    },
};

export default authOptions;
