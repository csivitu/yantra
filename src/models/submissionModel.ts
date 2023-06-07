import mongoose from 'mongoose';

export interface SubmissionInput {
    title: string;
    description: string;
    track: number;
    links: string[];
    files: string[];
    round1Score: number;
    round1Judge: string;
    round1Comment: string;
    round2Score: number;
    round2Judge: string;
    round2Comment: string;
    round3Score: number;
    round3Judge: string;
    round3Comment: string;
}

export interface SubmissionType extends SubmissionInput {
    status: number;
    submittedAt: Date;
}

export interface SubmissionDocument extends SubmissionType, mongoose.Document {
    _id: string;
    id: mongoose.Schema.Types.ObjectId;
}

const submissionSchema = new mongoose.Schema({
    title: String,
    description: String,
    track: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5, 6],
    },
    links: [String],
    status: {
        type: Number,
        enum: [0, 1, 2, 3], // 0 for submitted, 1 for passed round 1, 2 for rounded 2 and 3 for round 3
        default: 0,
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
    files: [String],
    round1Score: {
        type: Number,
        default: 0,
    },
    round1Judge: {
        type: String,
        default: '',
    },
    round1Comment: {
        type: String,
        default: '',
    },
    round2Score: {
        type: Number,
        default: 0,
    },
    round2Judge: {
        type: String,
        default: '',
    },
    round2Comment: {
        type: String,
        default: '',
    },
    round3Score: {
        type: Number,
        default: 0,
    },
    round3Judge: {
        type: String,
        default: '',
    },
    round3Comment: {
        type: String,
        default: '',
    },
});

const Submission =
    mongoose.models.Submission ||
    mongoose.model<SubmissionDocument>('Submission', submissionSchema);

export default Submission;
