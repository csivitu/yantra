import mongoose from 'mongoose';

export interface SubmissionInput {
    title: string;
    description: string;
    links: string[];
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
});

const Submission =
    mongoose.models.Submission ||
    mongoose.model<SubmissionDocument>('Submission', submissionSchema);

export default Submission;
