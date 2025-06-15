import Header from "@/components/header";
import {ChevronDown} from "lucide-react";

export default function AboutUs() {

    return (
        <section>
            <Header title={"#HIGHONRITU"}/>

            <div className="mt-18 relative w-full flex justify-center">
                <div
                    className="max-w-3xl max-md:max-w-2xl max-md:w-full max-md:mx-6 border-2 border-white p-6 max-md:p-3 rounded-[4rem_0rem_4rem_0rem] max-md:rounded-[2rem_0rem_2rem_0rem]">
                    <iframe
                        className="aspect-video md:h-[400px] max-md:w-full rounded-[calc(4rem-1.5rem)] max-md:rounded-[calc(2rem-0.75rem)]"
                        src="https://www.youtube.com/embed/TcMBFSGVi1c"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <p
                className="mt-14 mb-14 max-md:mt-6 lg:max-w-6xl max-lg:max-w-3xl max-md:text-left max-md:max-w-full max-md:px-6 max-md:text-sm max-md:text-pretty text-xl mx-auto md:tracking-wide leading-relaxed text-justify"
            >
                <strong>RITU</strong>, the vibrant techno-cultural fest of Rajiv Gandhi Institute of Technology,
                Kottayam, is all set to take place on
                <strong className="ml-1">October 19 and 20</strong> with an exciting lineup of events that blend
                technology, creativity,
                and celebration.
                <span className="hidden md:inline">
                    This two day extravaganza will feature a wide range of activities including hands-on workshops led by industry experts,
                    insightful talk sessions from inspiring speakers, thrilling games and competitions that test your skills,
                </span>
                team spirit, and vibrant cultural performances that bring out the artistic flair of our campus.
                <span className="hidden md:inline">
                    Whether you&#39;re a tech enthusiast, a creative soul, or someone who simply loves to be part of an energetic and youthful crowd,
                </span>
                RITU promises an unforgettable experience filled with learning, entertainment, and connection.
                Join us and be part of the electrifying spirit that defines RITU!
            </p>

            <ChevronDown className="animate-bounce mt-4 mx-auto" size={32}/>
            <br/><br/>
        </section>
    );
}
