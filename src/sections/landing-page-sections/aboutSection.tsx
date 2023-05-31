import React from 'react';
import Image from 'next/image';
const AboutSection = () => {
    return (
        <>
            <div id="about-section" className="h-max">
                <div className="w-fit text-white font-bronson uppercase text-5xl font-extrabold m-auto pt-40 pb-16">
                    About Yantra
                </div>
                <div className="flex h-[70vh] flex-col lg:flex-row justify-around items-center lg:px-20">
                    <div className="lg:w-[50%] py-24 px-16 h-[60%] lg:h-full">
                        <Image
                            src="/vit.png"
                            alt="photo"
                            height={10000}
                            width={10000}
                            className="w-full h-full object-cover  rounded-md"
                        />
                    </div>
                    <div className="lg:w-[50%] text-white w-[90%] h-[60%] lg:h-full font-spaceGrotesk flex justify-around items-center lg:text-left text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi sunt, fuga porro maxime laudantium tempore
                        tempora sapiente assumenda minus! Maiores repellendus
                        earum tempore minima non labore temporibus tenetur
                        praesentium distinctio quisquam nulla, fuga laudantium
                        sequi laborum in reiciendis dolorum vel eaque architecto
                        odit. Nobis placeat at repudiandae autem in consectetur.
                    </div>
                </div>
                <div className="w-fit text-white font-bronson uppercase text-5xl font-extrabold m-auto pt-28 pb-12">
                    About VIT
                </div>
                <div className="flex h-[70vh] flex-col lg:flex-row justify-around items-center lg:px-20">
                    <div className="lg:w-[50%]  py-24 px-16 h-[60%] lg:h-full">
                        <Image
                            src="/vit.png"
                            alt="photo"
                            height={10000}
                            width={10000}
                            className="w-full h-full object-cover  rounded-md"
                        />
                    </div>
                    <div className="lg:w-[50%] text-white w-[90%] h-[60%] lg:h-full font-spaceGrotesk flex justify-around items-center lg:text-left text-center">
                        VIT aims to provide high-quality education on par with
                        global standards. We constantly adopt innovative methods
                        to enhance education. The campus welcomes students from
                        diverse backgrounds. Experienced teachers nurture
                        students, while our international collaborations boost
                        research and learning opportunities. Our partnerships
                        enable student and faculty exchanges, fostering joint
                        research projects. Students pursuing research abroad
                        bring prestige to India. We take pride in our motivated
                        student body. Steadily, we strive for excellence. We
                        look forward to your visit to VIT.
                    </div>
                </div>
                <div className="w-fit text-white font-bronson uppercase text-5xl font-extrabold m-auto pt-28 pb-12">
                    About Students&apos; Welfare
                </div>
                <div className="flex h-[70vh] flex-col lg:flex-row justify-around items-center lg:px-20">
                    <div className="lg:w-[50%]  py-24 px-16 h-[60%] lg:h-full">
                        <Image
                            src="/vit.png"
                            alt="photo"
                            height={10000}
                            width={10000}
                            className="w-full h-full object-cover  rounded-md"
                        />
                    </div>
                    <div className="lg:w-[50%] text-white w-[90%] h-[60%] lg:h-full font-spaceGrotesk flex justify-around items-center lg:text-left text-center">
                        The Office of Students&apos; Welfare at VIT is dedicated
                        to uplifting students through small steps that lead to
                        significant changes. The management collaborates with
                        VIT&apos;s Clubs and Chapters to create a vibrant and
                        supportive learning environment for all students.
                        Recognizing the impact of these formative years on the
                        students&apos; future and society, VIT promotes various
                        initiatives to shape their minds. The well-organized
                        structure allows for daily activities conducted by the
                        Clubs and Chapters, ensuring student growth. External
                        participants also have the opportunity to engage in our
                        cultural and technical events. VIT believes in nurturing
                        future leaders, offering multiple growth opportunities
                        through the Student Council and the establishment of new
                        Clubs or Chapters. Scholarships and funding support are
                        provided to students, enabling their participation in
                        national and international competitions.
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSection;
