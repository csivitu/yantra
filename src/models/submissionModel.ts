import mongoose from 'mongoose';

export interface SubmissionInput {
    title: string;
    description: string;
    track: number;
    links: string[];
    files: string[];
    round1Score: number;
    round1Judge: string;
    round2Score: number;
    round2Judge: string;
    round3Score: number;
    round3Judge: string;
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
    round1Score: Number,
    round1Judge: String,
    round2Score: Number,
    round2Judge: String,
    round3Score: Number,
    round3Judge: String,
});

const Submission =
    mongoose.models.Submission ||
    mongoose.model<SubmissionDocument>('Submission', submissionSchema);

export default Submission;
