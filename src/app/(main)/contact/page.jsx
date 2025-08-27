"use client";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import ContactCard from "@/components/contact/contact-card";
import WebCard from "@/components/contact/web-card";
export default function TEst() {

    const contactRef = useRef(null);

    const scrollToImages = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className="relative min-h-[400px] sm:min-h-[600px] md:min-h-screen">
                <img
                    className="absolute top-0 left-0 w-full max-h-[100vh] min-h-[400px] object-cover object-center z-[-1]"
                    src="/contact/bg4.webp"
                    alt=""
                />

                <div className="absolute bottom-0 left-0 w-full min-h-[400px] sm:min-h-[600px] md:min-h-screen bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent md:from-black/90 to-transparent z-10 pointer-events-none" />

                <div className="absolute inset-0 flex items-center justify-start px-8 z-10">
                    <div className="flex flex-col items-start max-w-[50%] max-md:max-w-[90%] md:ml-[10%]">
                        <h2 className="text-7xl mb-8 max-md:mb-4 text-white tracking-widest max-md:text-4xl">
                            CONTACT
                        </h2>
                        <p className="text-xl max-md:text-sm text-white">
                            a set of words that is complete in itself, typically containing subject and predicate, conveying a statement, question,exclamation orcommand consisting of main close sometimes one or more subordinate clauses
                        </p>
                    </div>
                </div>
                <div
                    onClick={scrollToImages}
                    className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-40 text-3xl rounded-full p-1 cursor-pointer sm:text-4xl md:text-5xl animate-bounce"
                >
                    <ChevronDown size={28} />
                </div>
            </div>
            <div className="relative" ref={contactRef}>
                <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
                <div className="relative z-20 flex flex-col items-center justify-center  px-8 py-16">
                    <h2 className="text-4xl mb-8 max-md:mb-4  text-white text-center tracking-widest max-md:text-xl font-bold">
                        STUDENT COORDINATORS
                    </h2>
                    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr]  gap-6 md:gap-12">
                        <ContactCard imgSource='/contact/doc1.png' name='max vc' position='coordinator' contact='7012137377'/>
                        <ContactCard imgSource='/contact/doc1.png' name='max vc' position='coordinator' contact='7012137377'/>
                        <ContactCard imgSource='/contact/doc1.png' name='max vc' position='coordinator' contact='7012137377'/>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative z-20 flex flex-col items-center justify-center  px-8">
                    <h2 className="text-4xl mb-8 max-md:mb-4  text-white text-center tracking-widest max-md:text-xl font-bold">
                        WEB TEAM
                    </h2>
                    <div className="my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr]  gap-6 md:gap-12">
                        <WebCard imgSource='/contact/profile_pic.png' name='max vc' mail="mailto:maxcleetus@gmail.com" github='https://github.com/Maxcleetus'/>
                        <WebCard imgSource='/contact/profile_pic.png' name='max vc' mail="mailto:maxcleetus@gmail.com" github='https://github.com/Maxcleetus'/>
                        <WebCard imgSource='/contact/profile_pic.png' name='max vc' mail="mailto:maxcleetus@gmail.com" github='https://github.com/Maxcleetus' />
                        <WebCard imgSource='/contact/profile_pic.png' name='max vc' mail="mailto:maxcleetus@gmail.com" github='https://github.com/Maxcleetus'/>
                        <WebCard imgSource='/contact/profile_pic.png' name='max vc' mail="mailto:maxcleetus@gmail.com" github='https://github.com/Maxcleetus'/>
                        <WebCard imgSource='/contact/profile_pic.png' name='max vc' mail="mailto:maxcleetus@gmail.com" github='https://github.com/Maxcleetus'/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}