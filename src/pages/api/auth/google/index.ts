import oauth2Client from '@/utils/oauth2Client';
import { NextApiRequest, NextApiResponse } from 'next';

const getGoogleAuthURL = async (req: NextApiRequest, res: NextApiResponse) => {
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
