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
        // required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    type: {
        type: String,
        required: true, // 0 for workshop, 1 for technical event, 2 for hackathon,
    },
    time: {
        type: String,
        // required: true,
    },
    startDate: String,
    endDate: String,
    organisedBy: [String],
    numberOfParticipants: {
        type: Number,
        // required: true,
    },
    venue: {
        type: String,
    },
});

const Event =
    mongoose.models.Event ||
    mongoose.model<EventDocument>('Event', eventSchema);

export default Event;
