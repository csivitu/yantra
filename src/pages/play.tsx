import Header from "@/components/common/header";
import React from "react";
import PlaySection from "@/sections/Play-section/PlaySection";

const Play:React.FC = () => {
	return (
		<div>
			<Header onendpoint = "True"/>
			<PlaySection />
		</div>
	);
};

export default Play;
