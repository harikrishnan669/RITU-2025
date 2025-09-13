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
                        src="https://www.youtube.com/embed/Fnny2xjS_lM?si=OQEhsIwikK6OqgyC"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="mt-16 mb-16 lg:max-w-6xl max-lg:max-w-3xl max-md:max-w-full max-md:px-6 mx-auto
                text-justify md:tracking-wide leading-[2rem] md:leading-[2.2rem] space-y-6 text-xl max-md:text-base">

                <p>
                    <strong className="text-white-600 font-secondary text-4xl">Ritu</strong> ,the vibrant techno-cultural fest of Rajiv Gandhi
                    Institute of Technology,
                    Kottayam, is all set to take place on
                </p>
                <div className="flex flex-col items-center mt-6 mb-8 text-center">
                    <span className="text-xl md:text-8xl font-poppins font-semibold mb-2 font-secondary">October</span>
                    <div className="flex gap-4 text-3xl md:text-5xl font-poppins font-bold tracking-wide">
                        <span className="text-[#cd222d]">16</span>
                        <span className="text-[#1d96d5]">17</span>
                        <span className="text-[#54b750]">18</span>
                        <span className="text-[#ebb121]">19</span>
                    </div>
                </div>

                <div className="space-y-6 leading-relaxed text-lg md:text-xl font-inter">

                    <p>
                        This four-day extravaganza will feature a wide range of activities including
                        <span className="font-semibold font-secondary"> hands-on workshops</span> led by industry
                        experts,
                        <span className="font-semibold"> insightful talk sessions</span> from inspiring
                        speakers,
                        and <span className="font-semibold text-3xl font-secondary"> thrilling games & competitions</span> that
                        test your skills and
                        team spirit.
                    </p>

                    <p>
                        Alongside the technical side, the fest will showcase
                        <span className="font-semibold font-secondary text-3xl"> vibrant cultural performances</span> that bring
                        out the artistic flair of our campus —
                        making RITU a true celebration of both <span
                        className="font-bold font-secondary text-3xl">innovation</span> and
                        <span className="font-bold font-secondary text-3xl"> creativity</span>.
                    </p>

                    <p>
                        Whether you are a <span className="font-semibold">tech enthusiast</span>, a
                        <span className="font-semibold"> creative soul</span>, or simply someone who
                        loves being part of an
                        <span className="font-semibold text-3xl font-secondary"> energetic and youthful crowd</span>,
                        RITU has something for you.
                    </p>

                    <p className="font-poppins font-bold text-3xl md:text-3xl text-center mt-8 font-secondary">
                        Join us and be part of the electrifying spirit that defines ritu!
                    </p>
                </div>

            </div>


            <ChevronDown className="animate-bounce mt-4 mx-auto" size={32}/>
            <br/><br/>
        </section>
    );
}
