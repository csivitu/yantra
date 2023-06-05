import envHandler from '@/managers/envHandler';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
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
    },
});
