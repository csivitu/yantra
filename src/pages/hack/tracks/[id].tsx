import React from 'react';
import { GetServerSidePropsContext } from 'next';
import SDGHeader from '@/components/common/sdgheader';
import { useState } from 'react';
import { useRouter } from 'next/router';
import TracksHeader from '@/components/common/tracksHeader';
interface Props {
    id: string;
}
const TrackPage = ({ id }: Props) => {
    const router = useRouter();
    const [hooks, setHooks] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]);
    const tracks = [
        {
            id: '1',
            track: 'Good HEalth and well being',
            colour: '#279B48',
            paragraphs: [
                'The rapid growth of the aging population presents a compelling need for the development of innovative, technologically advanced solutions that effectively address the intertwined challenges of elderly loneliness and declining health. These solutions should focus on creating social connections, promoting active lifestyles, and providing personalized healthcare support.',
                'The current health landscape lacks a seamless integration of technology and education, hindering easy access to information and resources for maintaining a balanced diet. To improve health outcomes, it is essential to develop technological solutions that provide personalized nutrition recommendations, facilitate remote monitoring, and enable easy communication with healthcare professionals.',
                'To address the rising prevalence of addiction-related disorders, a comprehensive integration of health and technology is crucial. Innovative solutions should leverage AI, machine learning, and digital platforms to deliver personalized interventions, offer real-time support, and enhance the effectiveness of addiction treatment and recovery programs.',
                'The current accessibility landscape for individuals with disabilities is marked by a noticeable lack of seamless integration between health and technology, resulting in limited support for their specific needs and suboptimal overall well-being. It is imperative to develop inclusive technological solutions that improve accessibility, enhance independence, and promote overall health and well-being for individuals with disabilities.',
                'The challenge is to develop advanced technological solutions leveraging AI, machine learning, IoT, blockchain, and cloud computing to revolutionize health and healthcare facilitation in resource-constrained rural areas. These solutions should address barriers to access, enable telemedicine services, improve diagnostic capabilities, and enhance the overall quality of healthcare delivery in rural communities.',
            ],
            isOpen: false,
        },
        {
            id: '2',
            track: 'Quality Education',
            colour: '#C92639',
            paragraphs: [
                'The challenge is to develop cutting-edge technological solutions leveraging AI, machine learning, blockchain, and data analytics to bridge the gap between certifications and actual skills in education. These solutions should provide personalized learning experiences, facilitate skills assessment, and offer targeted interventions for skill development and career advancement.',
                'The challenge is to develop innovative technological solutions leveraging adaptive learning, AI, machine learning, multimodal techniques, learning analytics, collaborative networks, and parental engagement to empower slow learners and improve their learning outcomes. These solutions should provide personalized learning pathways, adaptive assessments, and real-time feedback to support individualized learning journeys.',
                'The challenge at hand is to devise cutting-edge technological solutions leveraging multimedia resources, gamification, curriculum integration, pedagogical training, secure digital platforms, community engagement frameworks, and impact assessment methodologies to disrupt taboos and facilitate open discourse in education. These solutions should foster inclusive learning environments, promote critical thinking, and encourage the exploration of diverse perspectives.',
                'The challenge at hand is to devise cutting-edge technological solutions leveraging data analytics, AI, personalized algorithms, real-time industry monitoring, networking platforms, skill assessment tools, and online learning resources to empower individuals in education and career transitions. These solutions should provide personalized career guidance, facilitate skill development, and bridge the gap between education and industry requirements.',
                'The challenge is to develop innovative solutions that leverage Augmented Reality (AR) and Virtual Reality (VR) technologies to enhance concept explanation and engagement in education. These solutions should provide immersive learning experiences, simulate real-world scenarios, and enable interactive exploration of complex concepts.',
            ],
            isOpen: false,
        },
        {
            id: '3',
            track: 'Industry, innovation and infrastructure',
            colour: '#FF8945',
            paragraphs: [
                'The challenge is to develop innovative solutions that integrate industry innovation and labor management systems using advanced technologies such as data analytics, machine learning, collaborative platforms, gamification, and emerging tech like IoT, AI, and RPA. These solutions should streamline workflows, enhance productivity, foster collaboration, and promote continuous improvement in industrial settings.',
                'The challenge is to develop innovative blockchain-based solutions that address bottlenecks in the supply chain, enhance efficiency, and promote transparency. These solutions should facilitate secure and transparent transactions, enable traceability, and optimize supply chain processes.',
                'Create solutions that use technology like RFID, IoT, blockchain, and data analytics to improve track-and-trace capabilities in the supply chain. These solutions should enable real-time monitoring, enhance visibility, and facilitate efficient inventory management and logistics.',
                'Develop solutions that streamline and optimize AI/ML workflows, addressing challenges in data preprocessing, model selection, explainability, workflow orchestration, and model monitoring. These solutions should automate and streamline the end-to-end AI/ML process, making it more efficient, scalable, and accessible to a broader range of users.',
                'Develop accurate price prediction models for real estate by leveraging advanced data analytics and machine learning techniques. These models should consider a wide range of factors, including market trends, property characteristics, and economic indicators, to provide reliable and actionable insights for buyers, sellers, and investors.',
            ],
            isOpen: true,
        },
        {
            id: '4',
            track: 'reduced inequalities',
            colour: '#FF4FA9',
            paragraphs: [
                'Create an innovative and impactful application, software, or digital platform that addresses the challenge of reduced inequalities and the removal of gender stereotypes. This solution should empower underrepresented groups, promote diversity and inclusion, and challenge societal norms and biases.',
                'Design an innovative digital platform, application, or software that addresses educational disparities and expands access to quality learning for underprivileged individuals. This solution should provide equal opportunities for education, offer personalized learning resources, and bridge the digital divide.',
                'Design an innovative digital platform, application, or software that addresses financial disparities and promotes inclusive access to financial services. This solution should enable affordable banking services, facilitate financial literacy, and support economic empowerment for marginalized communities.',
                'Design an innovative solution that addresses gender-based pay disparities through performance-based evaluations. This solution should promote fair compensation practices, eliminate gender biases, and provide transparent and objective evaluation mechanisms.',
                'Develop user-friendly web or mobile applications, digital platforms, or software that streamline reservation management, provide targeted educational support, optimize resource allocation, or offer awareness and counseling services. These solutions should ensure equal access to opportunities, promote social welfare, and support the well-being of underprivileged individuals and communities.',
            ],
            isOpen: false,
        },
        {
            id: '5',
            track: 'Sustainable cities and communities',
            colour: '#FF9F03',
            paragraphs: ['This is an Open Inovation Track'],
            isOpen: true,
        },
        {
            id: '6',
            colour: '#E48E16',
            track: 'responsible consumption and production',
            paragraphs: [
                'Create a platform that encourages sustainable and responsible shopping habits by leveraging artificial intelligence and machine learning algorithms to provide personalized recommendations for eco-friendly products and help consumers make informed purchasing decisions.',
                'Design an innovative solution to promote circular economy principles by using blockchain technology to track and trace product lifecycle, enabling consumers to make sustainable choices and encouraging businesses to adopt responsible production practices.',
                'Develop a mobile application that incentivizes and rewards individuals for adopting eco-friendly lifestyle choices, such as recycling, reducing energy consumption, and practicing responsible consumption, using gamification techniques and location-based services.',
                'Develop a solution to reduce the environmental impact of the fashion industry by leveraging technologies such as 3D printing, virtual reality, and augmented reality to create virtual try-on experiences, enable sustainable manufacturing practices, and promote responsible fashion consumption.',
                'Design and develop a user-friendly web platform or application that promotes responsible consumption and production by providing educational resources, interactive tools, and community engagement features to empower individuals and businesses to adopt sustainable practices, track their environmental impact, and share their success stories with others.',
            ],
            isOpen: false,
        },
    ];

    return (
        <>
            <TracksHeader />
            <div className="h-max bg-events-bg font-spaceGrotesk bg-cover">
                <div className="max-lg:h-max h-full w-full">
                    {tracks &&
                        tracks.map((el) => {
                            if (el.id == id) {
                                return (
                                    <>
                                        <div className="px-10 h-full min-h-[91vh]">
                                            <div
                                                className="w-full h-[20vh] lg:h-[23.5vh] flex justify-around items-center text-white text-center text-6xl uppercase py-5  max-lg:py-0"
                                                style={{ color: el.colour }}
                                            >
                                                {el.track}
                                            </div>
                                            <div className="py-7 w-full h-[4vh]  flex justify-center gap-x-2 sm:gap-x-10 items-center">
                                                <div
                                                    onClick={() => {
                                                        router.push(
                                                            '/hack/tracks/1'
                                                        );
                                                    }}
                                                    className={`rounded-full h-6 w-6 cursor-pointer content3 opacity-60 transition-all duration-200 ease-in-out hover:scale-125`}
                                                    style={{
                                                        backgroundColor:
                                                            '#279B48',
                                                    }}
                                                ></div>
                                                <div
                                                    onClick={() => {
                                                        router.push(
                                                            '/hack/tracks/2'
                                                        );
                                                    }}
                                                    className={`rounded-full h-6 w-6 cursor-pointer content3 opacity-60 transition-all duration-200 ease-in-out hover:scale-125`}
                                                    style={{
                                                        backgroundColor:
                                                            '#C92639',
                                                    }}
                                                ></div>
                                                <div
                                                    onClick={() => {
                                                        router.push(
                                                            '/hack/tracks/3'
                                                        );
                                                    }}
                                                    className={`rounded-full h-6 w-6 cursor-pointer content3 opacity-60 transition-all duration-200 ease-in-out hover:scale-125`}
                                                    style={{
                                                        backgroundColor:
                                                            '#FF8945',
                                                    }}
                                                ></div>
                                                <div
                                                    onClick={() => {
                                                        router.push(
                                                            '/hack/tracks/4'
                                                        );
                                                    }}
                                                    className={`rounded-full h-6 w-6 cursor-pointer content3 opacity-60 transition-all duration-200 ease-in-out hover:scale-125`}
                                                    style={{
                                                        backgroundColor:
                                                            '#FF4FA9',
                                                    }}
                                                ></div>
                                                <div
                                                    onClick={() => {
                                                        router.push(
                                                            '/hack/tracks/5'
                                                        );
                                                    }}
                                                    className={`rounded-full h-6 w-6 cursor-pointer content3 opacity-60 transition-all duration-200 ease-in-out hover:scale-125`}
                                                    style={{
                                                        backgroundColor:
                                                            '#FF9F03',
                                                    }}
                                                ></div>
                                                <div
                                                    onClick={() => {
                                                        router.push(
                                                            '/hack/tracks/6'
                                                        );
                                                    }}
                                                    className={`rounded-full h-6 w-6 cursor-pointer content3 opacity-60 transition-all duration-200 ease-in-out hover:scale-125`}
                                                    style={{
                                                        backgroundColor:
                                                            '#E48E16',
                                                    }}
                                                ></div>
                                            </div>
                                            {!el.isOpen ? (
                                                <div className="flex h-full justify-around flex-col items-center  mb-10">
                                                    {el.paragraphs &&
                                                        el.paragraphs.map(
                                                            (el2) => {
                                                                return (
                                                                    <>
                                                                        <div className="relative group h-full w-full flex justify-center">
                                                                            <p className="ext-white max-lg:text-sm max-lg:p-6 w-5/6   group-hover:scale-105 font-bold text-4xl flex justify-center items-center py-2 rounded-xl border-white px-2 text-center transition-all duration-300 ease-in-out absolute right-1/2 top-1/2 translate-x-1/2 translate-y-[-50%] z-50 text-white">
                                                                                {
                                                                                    el2
                                                                                }
                                                                            </p>
                                                                            <div
                                                                                style={{
                                                                                    backgroundColor:
                                                                                        el.colour,
                                                                                }}
                                                                                className="text-white max-lg:text-sm max-lg:p-6 w-5/6 content  group-hover:scale-105 font-bold text-4xl flex justify-center items-center py-2 rounded-xl border-white px-2 text-center transition-all duration-300 opacity-60 ease-in-out"
                                                                            >
                                                                                <p className="opacity-0">
                                                                                    {
                                                                                        el2
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                );
                                                            }
                                                        )}
                                                </div>
                                            ) : (
                                                <div className="relative group  h-full w-full flex justify-center">
                                                    <p className="ext-white max-lg:text-sm max-lg:p-6 w-5/6   group-hover:scale-105 font-bold text-4xl flex justify-center items-center py-2 rounded-xl border-white px-2 text-center transition-all duration-300 ease-in-out absolute right-1/2 top-1/2 translate-x-1/2 translate-y-[-50%] z-50 text-white">
                                                        This is an Open Track
                                                    </p>
                                                    <div
                                                        style={{
                                                            backgroundColor:
                                                                el.colour,
                                                        }}
                                                        className="text-white  max-lg:text-sm max-lg:p-6 w-5/6 content  group-hover:scale-105 font-bold text-4xl flex justify-center items-center py-2 rounded-xl border-white px-2 text-center transition-all duration-300 opacity-60 ease-in-out"
                                                    >
                                                        <p className="opacity-0">
                                                            This is an Open
                                                            Track
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                );
                            }
                        })}
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { id } = context.query;
    return {
        props: { id },
    };
}

export default TrackPage;
