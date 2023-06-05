import mongoose from 'mongoose';
import { SubmissionDocument } from './submissionModel';

export interface TeamType {
    title: string;
    members: mongoose.Schema.Types.ObjectId[];
    isNameChanged: boolean;
    submission: mongoose.Schema.Types.ObjectId | SubmissionDocument;
}

export interface TeamDocument extends TeamType, mongoose.Document {
    _id: string;
    id: mongoose.Schema.Types.ObjectId;
}

const teamSchema = new mongoose.Schema({
    title: String,
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    isNameChanged: {
        type: Boolean,
        default: false,
    },
    submission: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Submission',
    },
});

const Team =
    mongoose.models.Team || mongoose.model<TeamDocument>('Team', teamSchema);

export default Team;
