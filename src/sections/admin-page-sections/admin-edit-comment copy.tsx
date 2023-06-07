import { CURRENT_ROUND } from '@/constants';
import React from 'react';

interface Props {
    comment: string;
    setComment: (comment: string) => void;
    score: number;
    setScore: (score: number) => void;
}

const CommentEdit = ({ comment, setComment, score, setScore }: Props) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="text-2xl font-bronson font-bold">
                Round {CURRENT_ROUND} Details
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex items-center border-b-2 border-white py-2">
                    <textarea
                        className="appearance-none rounded-lg p-3 max-h-[25vh] min-h-[15vh] bg-[#2828287e] border-none w-full text-white leading-tight focus:outline-none"
                        value={comment}
                        onChange={(el) => {
                            setComment(el.target.value.slice(0, 500));
                        }}
                        placeholder={'Comment'}
                    />
                </div>
                <div className="font-ibmMono font-extrabold text-lg flex gap-2">
                    <div> Score: </div>
                    <input
                        className="text-black w-fit px-2 focus:outline-none rounded-lg"
                        type="number"
                        value={score}
                        onChange={(el) => {
                            const currValue = Number(el.target.value);

                            setScore(currValue);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CommentEdit;
