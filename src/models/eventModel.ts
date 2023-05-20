import mongoose from 'mongoose';

export interface EventDocument extends mongoose.Document {
    title: string;
    coverPic: string;
    description: string;
    type: string;
    date: Date;
    oraganisedBy: string; //club name
    numberOfParticipants: number;
}

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    coverPic: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    organisedBy: {
        type: String,
        required: true,
    },
    numberOfParticipants: {
        type: Number,
        required: true,
    },
});

const Event =
    mongoose.models.Event ||
    mongoose.model<EventDocument>('Event', eventSchema);

export default Event;
