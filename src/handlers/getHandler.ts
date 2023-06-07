import axios from 'axios';
import { getCookie } from 'cookies-next';

const getHandler = async (URL: string, protect: boolean) => {
    const headers = {
        'Content-Type': 'application/json',
        Authorization: '',
        'ngrok-skip-browser-warning': true,
    };
    if (protect) headers.Authorization = `Bearer ${getCookie('token')}`;
    const response: any = {
        status: 0,
        data: '',
        statusCode: 400,
    };
    await axios
        .get(URL, { headers })
        .then((res) => {
            response.status = 1;
            response.data = res.data;
            response.statusCode = res.status;
        })
        .catch((err) => {
            response.status = 0;
            response.data = err.response.data;
            response.statusCode = err.response.status;
        });
    return response;
};

export default getHandler;
