import { TeamDocument } from '@/models/teamModel';
import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    export interface Session {
        user: { id: string; team: TeamDocument } & DefaultSession['user'];
    }
}
