import Header from "@/components/header";
import { ChevronDown } from "lucide-react";

export default function AboutUs() {

    return (
        <section className="flex flex-col items-center p-2 min-h-screen text-white gap-6">
            <Header title={"#HIGONRITU"} />

            <div className="relative w-full max-w-[600px] h-[300px]">
                <div className="absolute inset-0 lg:border-2 lg:border-white lg:rounded-[80px_0px_80px_0px] " />
                <div
                    className="relative w-full h-full overflow-hidden flex items-center justify-center rounded-[50px] shadow-xl z-10">
                    <img
                        src="/RIT-ABOUT_US.webp"
                        alt="RIT College Tour"
                        className="object-fill  w-auto h-full px-[20px] py-5 rounded-[50px] "
                    />
                    <svg className="absolute w-[50px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.08 123.51">
                        <title>youtube-app</title>
                        <path fill="transparent"
                              d="M28.35.6H95.73a27.83,27.83,0,0,1,27.75,27.75V95.17a27.83,27.83,0,0,1-27.75,27.74H28.35A27.83,27.83,0,0,1,.6,95.17V28.35A27.83,27.83,0,0,1,28.35.6Z"/>
                        <path fill="#999"
                              d="M28.35,0H95.73a28.44,28.44,0,0,1,28.35,28.35V95.17a28.42,28.42,0,0,1-28.35,28.34H28.35A28.42,28.42,0,0,1,0,95.17V28.35A28.44,28.44,0,0,1,28.35,0ZM95.73,1.2H28.35A27.21,27.21,0,0,0,1.2,28.35V95.17a27.21,27.21,0,0,0,27.15,27.14H95.73a27.21,27.21,0,0,0,27.15-27.14V28.35A27.21,27.21,0,0,0,95.73,1.2Z"/>
                        <path fill="red"
                              d="M104.91,44.26s-.85-6-3.48-8.69c-3.33-3.48-7.07-3.5-8.77-3.71C80.42,31,62,31,62,31h0s-18.37,0-30.62.89c-1.71.21-5.44.23-8.77,3.71-2.63,2.65-3.47,8.69-3.47,8.69a133.12,133.12,0,0,0-.87,14.17v6.64a133.37,133.37,0,0,0,.87,14.17s.86,6,3.47,8.69c3.33,3.48,7.71,3.37,9.67,3.74,7,.67,29.76.87,29.76.87s18.4,0,30.64-.91c1.71-.2,5.44-.22,8.77-3.7,2.63-2.65,3.49-8.69,3.49-8.69a133.18,133.18,0,0,0,.87-14.18V58.43a136.86,136.86,0,0,0-.89-14.18Z"/>
                        <polygon fill="#fff" points="52.97 73.11 52.97 48.51 76.61 60.86 52.97 73.11 52.97 73.11"/>
                    </svg>

                </div>
            </div>


            <div className="px-6 lg:text-lg w-[100%] max-w-7xl tracking-widest leading-relaxed text-sm">
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

            {/* Down Arrow */}
            <ChevronDown className="animate-bounce mt-4" size={32} />
        </section>
    );
}
