import React from 'react';
import Image from 'next/image';
const AboutSection = () => {
    return (
        <>
            <div id="about-section" className="h-max">
                <div className="w-full mt-20 max-md:text-4xl h-[20vh] flex justify-around items-center text-white font-bronson uppercase text-5xl font-extrabold m-auto ">
                    About Yantra
                </div>
                <div className="flex flex-col lg:flex-row justify-around items-center lg:px-20">
                    <div className="lg:w-[50%] py-8 px-16 h-[60%] lg:h-full max-md:pt-0 max-md:pb-8">
                        <Image
                            src="/devspace.JPG"
                            alt="photo"
                            height={10000}
                            width={10000}
                            className="lg:w-[50vw] lg:h-[50vh] h-[30vh] w-[100%] object-cover border-[2px] border-white rounded-md"
                        />
                    </div>
                    <div className="lg:w-[50%] text-xl text-white w-[90%] h-[60%] lg:h-full font-spaceGrotesk flex justify-around items-center lg:text-left text-center">
                        Yantra, VIT&apos;s prestigious student-led Technical
                        festival, is presented by the Office of Student Welfare.
                        It provides a unique opportunity for students to
                        explore, learn, and flourish. With engaging talks,
                        immersive workshops, and exhilarating hackathons, Yantra
                        equips participants with the skills and resources to
                        transform ideas into reality. It&apos;s a platform for
                        personal growth and creative innovation. Join us for
                        VIT&apos;s biggest student conference, where visionaries
                        and professionals from diverse fields share expertise
                        and experiences. Mark your calendars for an
                        unforgettable experience at Yantra, the epitome of
                        technical brilliance and personal development.
                    </div>
                </div>
                <div className="w-full mt-20 max-md:text-4xl h-[20vh] flex justify-around items-center text-white font-bronson text-center uppercase text-5xl font-extrabold m-auto ">
                    About VIT
                </div>
                <div className="flex flex-col  lg:flex-row-reverse justify-around items-center lg:px-20">
                    <div className="lg:w-[50%] py-8 px-16 h-[60%] lg:h-full max-md:pt-0 max-md:pb-8">
                        <Image
                            src="/vit-maingate.jpg"
                            alt="photo"
                            height={10000}
                            width={10000}
                            className="lg:w-[50vw] lg:h-[50vh] h-[30vh] w-[100%] object-cover border-[2px] border-white rounded-md"
                        />
                    </div>
                    <div className="lg:w-[50%] text-xl text-white w-[90%] h-[60%] lg:h-full font-spaceGrotesk flex justify-around items-center lg:text-left text-center">
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
                <div className="w-full mt-20 max-md:text-4xl h-[20vh] flex justify-around items-center text-white font-bronson text-center uppercase text-5xl font-extrabold m-auto ">
                    About Students&apos; Welfare
                </div>
                <div className="flex flex-col lg:flex-row justify-around items-center lg:px-20">
                    <div className="lg:w-[50%] py-8 px-16 h-[60%] lg:h-full max-md:pt-0 max-md:pb-8">
                        <Image
                            src="/dsw.jpg"
                            alt="photo"
                            height={10000}
                            width={10000}
                            className="lg:w-[50vw] lg:h-[50vh] h-[30vh] w-[100%] object-cover border-[2px] border-white rounded-md"
                        />
                    </div>
                    <div className="lg:w-[50%] text-white w-[90%] h-[60%] lg:h-full font-spaceGrotesk flex justify-around items-center text-xl lg:text-left text-center">
                        VIT&apos;s Office of Students&apos; Welfare uplifts
                        students through small steps for significant changes.
                        They collaborate with VIT&apos;s Clubs and Chapters,
                        creating a supportive learning environment. VIT promotes
                        initiatives to shape students&apos; minds, recognizing
                        their impact on the future. The well-organized structure
                        enables daily activities by Clubs and Chapters, ensuring
                        student growth. External participants engage in cultural
                        and technical events. VIT nurtures future leaders,
                        offering growth opportunities through the Student
                        Council and new Clubs or Chapters. Scholarships and
                        funding support enable student participation in
                        competitions.
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSection;
