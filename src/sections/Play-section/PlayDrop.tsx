import React from "react";
import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({ subsets: ["latin"] });

interface Props {
	title: string;
	link: string;
}

const PlayDrop = ({ title, link }: Props) => {
	return (
		<div>
			<Link target="_blank" href={link}>
				<div
					className={
						"flex  cursor-pointer items-center justify-between border-b pb-2 font-semibold text-[#A7A9BE]"
					}
				>
					<h3
						className={`max-w-[80%] text-xl sm:text-2xl ${oswald.className} font-bold`}
					>
						{title}
					</h3>
					<div>
						<svg
							className="-rotate-90"
							fill="#A7A9BE"
							width="15"
							height="15"
							viewBox="0 0 20 20"
						>
							<path d="M0 7 L 20 7 L 10 16" />
						</svg>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default PlayDrop;
