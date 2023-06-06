import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import envHandler from '@/managers/envHandler';
import User from '@/models/userModel';
import Team from '@/models/teamModel';
import { connectToDB } from '@/managers/DB';

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
                await connectToDB();
                const dbUser = await User.findOne({ email: user.email });
                if (!dbUser) return false;
                return true;
            } catch {
                return false;
            }
        },
        session: async ({ session }) => {
            await connectToDB();
            const user = await User.findOne({ email: session.user.email });
            let team;
            try {
                team = await Team.findOne({ members: user.id })
                    .populate('members')
                    .populate('submission');
            } catch {
                team = await Team.findOne({ members: user.id }).populate(
                    'members'
                );
            }

            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id,
                    isAdmin: user.admin,
                    team: team, // for all purposes
                },
            };
        },
    },
};

export default authOptions;
