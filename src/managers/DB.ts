import mongoose from 'mongoose';
import envHandler from './envHandler';

const URL = envHandler('DATABASE_URL').replace(
    '<password>',
    envHandler('DATABASE_PASSWORD')
);

// const URL = envHandler('LOCAL_DB');

export const connectToDB = async () => {
    if (mongoose.connections[0].readyState) {
        console.log('Connected');
        return;
    }
    try {
        await mongoose.connect(URL);
    } catch (err) {
        console.log(err);
    }

    console.log('Connected to Database!');
};

export const disconnectFromDB = async () => {
    await mongoose.disconnect();
    console.log('Disconnected from Database.');
};
