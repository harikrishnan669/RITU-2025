import Header from "@/components/header";
import { ChevronDown } from "lucide-react";

export default function AboutUs() {

    return (
        <section className="flex flex-col items-center p-2 min-h-screen text-white gap-6">
            <Header title={"#HIGONRITU"}/>

            <div className="relative w-full max-w-[600px] h-[300px] mx-auto">

                <div className="absolute inset-0 border-2 border-white lg:rounded-[100px_0px_100px_0px] rounded-[30px_0px_30px_0px] m-2 z-0"/>

                <div
                    className="absolute inset-6 w-auto h-auto lg:rounded-[100px_0px_100px_0px] rounded-[30px_0px_30px_0px] shadow-xl overflow-hidden flex items-center justify-center z-10">
                    <iframe
                        className="w-full h-full lg:rounded-[100px_0px_100px_0px] rounded-[30px_0px_30px_0px] "
                        src="https://www.youtube.com/embed/TcMBFSGVi1c"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>


            <div className="w-full max-w-4xl px-2 lg:px-6 text-sm lg:text-base tracking-wide leading-relaxed text-justify">
                <p className="text-start">
                    <strong> RITU</strong>, the vibrant techno-cultural fest of Rajiv Gandhi Institute of Technology,
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
            </div>

            <ChevronDown className="animate-bounce mt-4" size={32}/>
        </section>
    );
}
