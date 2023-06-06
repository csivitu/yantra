import mongoose from 'mongoose';
import { SubmissionDocument } from './submissionModel';
import { UserDocument } from './userModel';

export interface TeamType {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    members: UserDocument[];
    isNameChanged: boolean;
    submission: mongoose.Schema.Types.ObjectId | SubmissionDocument;
}

export interface TeamDocument extends TeamType, mongoose.Document {
    _id: string;
    id: mongoose.Schema.Types.ObjectId;
}

export interface SubmissionPopulatedTeam {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    members: UserDocument[];
    isNameChanged: boolean;
    submission: SubmissionDocument;
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
