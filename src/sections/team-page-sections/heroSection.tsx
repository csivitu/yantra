import React from 'react';

const HeroSection = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center px-16 bg-blue-100">
            <div className="w-fit h-1/2 flex justify-center items-center text-6xl font-bold">
                Team
            </div>
            <div className="w-full h-1/2 py-8 flex items-center gap-8">
                <div className="w-1/2 flex flex-col gap-4 px-8">
                    <div className="text-4xl font-bold">About the team</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, rerum. Voluptatum dolore quibusdam animi
                        deserunt, ducimus incidunt minus commodi repellat
                        laudantium molestias libero aliquid rem magni magnam
                        necessitatibus ab eos alias officiis accusantium.
                        Consectetur odit minus deleniti sed ea tenetur,
                        quibusdam dolor nobis unde dolores tempore sit ab qui
                        magnam a necessitatibus eius esse quas possimus.
                    </div>
                </div>
                <div className="bg-black w-[2px] h-full"></div>
                <div className="w-1/2"></div>
            </div>
        </div>
    );
};

export default HeroSection;
