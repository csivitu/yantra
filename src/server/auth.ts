import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import envHandler from '@/managers/envHandler';
import User from '@/models/userModel';
import Team from '@/models/teamModel';

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
        async signIn({ user, account, profile, email, credentials }) {
            try {
                const dbUser = await User.findOne({ email: user.email });
                if (!dbUser)
                    await User.create({
                        name: user.name,
                        email: user.email,
                        profilePic: user.image,
                    });
                return true;
            } catch {
                return false;
            }
        },
        session: async ({ session }) => {
            // if this runs before signIn then shift this into sessionCheck middleware
            const user = await User.findOne({ email: session.user.email });
            const team = await Team.findOne({ members: user.id });
            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id,
                    team: team, // for all purposes
                },
            };
        },
    },
};

export default authOptions;
