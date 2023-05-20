import { google } from 'googleapis';
import envHandler from '@/managers/envHandler';

const oauth2Client = new google.auth.OAuth2(
    envHandler('GOOGLE_CLIENT_ID'),
    envHandler('GOOGLE_CLIENT_SECRET'),
    'http://localhost:3000/api/auth/google/callback'
);

const getGoogleAuthURL = async (req, res) => {
    const scopes = [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
    ];

    const URL = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: scopes,
    });

    res.redirect(URL);
};

export default getGoogleAuthURL;
