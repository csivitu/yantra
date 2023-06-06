import { SubmissionDocument } from '@/models/submissionModel';
import { SubmissionPopulatedTeam } from '@/models/teamModel';
import React from 'react';

interface Props {
    team: SubmissionPopulatedTeam;
}

const ProjectCard = ({ team }: Props) => {
    return (
        <>
            <div className="w-full rounded-lg border-[2px] border-white sm:h-[20vh] py-4 flex flex-col sm:flex-row justify-around items-center text-white">
                <div className="h-full text-lg text-center py-2 sm:py-3 w-full sm:w-[20%] flex justify-center items-center">
                    Project Name: {team.submission.title}
                </div>
                <div className="h-full text-lg text-center py-2 sm:py-3 w-full sm:w-[20%] flex justify-center items-center">
                    Team Name: {team.title}
                </div>
                <div className="h-full text-lg py-2 sm:py-3 w-full sm:w-[20%] flex justify-center items-center">
                    Track: {team.submission.track}
                </div>
                <div className="h-full py-2 px-3 sm:px-0 sm:py-3 w-full sm:w-[20%] flex justify-center items-center flex-col">
                    <div className="w-full h-full flex justify-start gap-3 items-center">
                        <p>Round 1</p>
                        <p className="text-green-600">
                            {team.submission.status >= 1}
                        </p>
                    </div>
                    <div className="w-full h-full flex gap-3 justify-start items-center">
                        <p>Round 2</p>
                        <p className="text-green-600">
                            {' '}
                            {team.submission.status >= 2}
                        </p>
                    </div>
                    <div className="w-full h-full flex gap-3 justify-start items-center">
                        <p>Round 3</p>
                        <p className="text-red-600">
                            {' '}
                            {team.submission.status >= 3}
                        </p>
                    </div>
                </div>
                <div className="h-full py-2 sm:py-3 w-full sm:w-[20%] flex justify-center items-center">
                    <p className="px-3 py-4 border-2 border-white rounded-md cursor-pointer hover:bg-white hover:text-black text-xl">
                        Open
                    </p>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
