import React from 'react';

interface Props {
    roundNumber: number;
    comment: string;
    score: number;
    judge: string;
}

const CommentView = ({ roundNumber, comment, score, judge }: Props) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="text-2xl font-bronson font-bold">
                Round {roundNumber} Details
            </div>
            <div className="w-full flex gap-2">
                <div>-</div>
                <div className="flex flex-col gap-4">
                    <div className="font-ibmMono">
                        {comment}
                        <b> ~ {judge} </b>
                    </div>
                    <div className="font-ibmMono font-extrabold text-lg">
                        Score: {score}/10
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default CommentView;
