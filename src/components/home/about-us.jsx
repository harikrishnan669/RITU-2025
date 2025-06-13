import Header from "@/components/header";
import {ChevronDown} from "lucide-react";

export default function AboutUs() {

    return (
        <section>
            <Header title={"#HIGHONRITU"}/>

            <div className="mt-18 relative w-full flex justify-center">
                <div className="max-w-3xl border-2 border-white p-6 rounded-tl-[4rem] rounded-br-[4rem]">
                    <iframe
                        className="aspect-video h-[400px] rounded-[calc(4rem-1.5rem)]"
                        src="https://www.youtube.com/embed/TcMBFSGVi1c"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <p
                className="mt-18 mb-18 max-w-7xl text-xl mx-auto tracking-wide leading-relaxed text-justify"
            >
                <strong>RITU</strong>, the vibrant techno-cultural fest of Rajiv Gandhi Institute of Technology,
                Kottayam, is all set to take place or
                March 19 and 20 with an exciting lineup of events that blend technology, creativity, and
                celebration.This two-
                day extravaganza will feature a wide range of activities including hands-on workshops led by
                industry experts,
                insightful talk sessions from inspiring speakers, thrilling games and competitions thattest your
                skills and team
                spirit, and vibrant cultural performances that bring out the artistic flair of our campus.Whether
                youre a tech
                enthusiast, a creative soul, or someone who simply loves to be part of an energetic and youthful
                crowd, RITU
                promises an unforgettable experience filled with learning, entertainment, and connection. Join us
                and be part of
                the electrifying spirit that defines RITU!
            </p>

            <ChevronDown className="animate-bounce mt-4 mx-auto" size={32}/>
            <br/><br/>
        </section>
    );
}
