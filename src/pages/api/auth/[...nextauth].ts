import envHandler from '@/managers/envHandler';
import authOptions from '@/server/auth';
import NextAuth from 'next-auth/next';

export default NextAuth(authOptions);
