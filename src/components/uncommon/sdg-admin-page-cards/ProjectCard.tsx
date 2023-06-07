import { SubmissionDocument } from '@/models/submissionModel';
import { SubmissionPopulatedTeam, TeamDocument } from '@/models/teamModel';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { CURRENT_ROUND } from '@/constants';
interface Props {
    team: TeamDocument;
}

const ProjectCard = ({ team }: Props) => {
    const [hover, setHover] = useState(false);
    return (
        <>
            <Link
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
                href={`/hack/admin/team/${team._id}`}
                className={`lg:w-[20vw] w-[40%] h-[25vh] font-spaceGrotesk glassMorphism transition-all duration-100 ease-in-out ${
                    hover ? 'content2 ' : ''
                }  rounded-lg border-[2px] border-white lg:h-[35vh] py-4 flex flex-col sm:flex-row justify-around items-center text-white`}
            >
                {/* <div className="h-full text-lg text-center py-2 sm:py-3 w-full sm:w-[20%] flex justify-center items-center">
                    Project Name: {team.submission.title}
                </div> */}
                <div className="h-full capitalize text-3xl text-center py-2 sm:py-3 w-full sm:w-[20%] flex justify-center items-center">
                    {team.title}
                </div>
                {/* <div className="h-full text-lg py-2 sm:py-3 w-full sm:w-[20%] flex justify-center items-center">
                    Track: {team.submission.track}
                </div> */}
            </Link>
        </>
    );
};

export default ProjectCard;
