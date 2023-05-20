import { google } from 'googleapis';
import envHandler from '@/managers/envHandler';

const oauth2Client = new google.auth.OAuth2(
    envHandler('GOOGLE_CLIENT_ID'),
    envHandler('GOOGLE_CLIENT_SECRET'),
    `${envHandler('BASE_URL')}/api/auth/google/callback`
);

export default oauth2Client;
