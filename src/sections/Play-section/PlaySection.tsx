import React from "react";
import { Oswald } from "next/font/google";
import PlayDrop from "@/sections/Play-section/PlayDrop";

const oswald = Oswald({ subsets: ["latin"] });

const PlaySection = () => {
	return (
		<div className="my-16 flex items-start justify-center">
			<div className="w-[80vw] lg:w-[60vw]">
				<div className=" space-y-12 text-left">
					<PlayDrop
						title="BUBBLY"
						link="http://bubbly.hackstory.in"
					/>
					<PlayDrop
						title="CORSAIRS"
						link="http://corsairs.hackstory.in"
					/>
					<PlayDrop
						title="ASTEROIDS"
						link="https://asteroids.hackstory.in/"
					/>
					<PlayDrop
						title="TETRIS"
						link="https://tetris.hackstory.in/"
					/>
					<PlayDrop title="2048" link="https://2048.hackstory.in/" />
					<PlayDrop
						title="RUNAWAY"
						link="http://runaway.hackstory.in/"
					/>
				</div>
			</div>
		</div>
	);
};

export default PlaySection;
