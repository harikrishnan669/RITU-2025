"use client";
// import ContactCard from "@/components/contact/contact-card";
import WebCard from "@/components/contact/web-card";
import LandingBanner from "@/components/pages/landing-banner";
// import COORDINATORS from "@/data/coordinators";
import WEB_TEAM from "@/data/web-team";

export default function TEst() {


    return (
        <div className="w-full">
            <LandingBanner
                bg="/bg/contact.webp"
                title="Contact"
                description="We’d love to hear from you! Reach out to our team for any queries, details, or support, and stay connected with the fest every step of the way."
            />
            {/*<div className="relative">*/}
            {/*    <div className="relative z-20 flex flex-col items-center justify-center  px-8 py-16">*/}
            {/*        <h2 className="text-4xl mb-8 max-md:mb-4  text-white text-center tracking-widest max-md:text-xl font-bold">*/}
            {/*            STUDENT COORDINATORS*/}
            {/*        </h2>*/}
            {/*        <div className="w-full my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr]  gap-6 md:gap-12">*/}
            {/*            {COORDINATORS.map((item, i) =>*/}
            {/*                <ContactCard*/}
            {/*                    key={i}*/}
            {/*                    imgSource={item.image || '/contact/doc1.png'}*/}
            {/*                    name={item.name || 'Coordinator'}*/}
            {/*                    position={item.position || 'coordinator'}*/}
            {/*                    contact={item.phone || '1234567890'}*/}
            {/*                />*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div>
                <div className="relative z-20 flex flex-col items-center justify-center  px-8">
                    <h2 className="text-4xl mb-8 max-md:mb-4  text-white text-center tracking-widest max-md:text-xl font-bold">
                        WEB TEAM
                    </h2>
                    <div className="w-full my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr] gap-6 md:gap-12">
                        {WEB_TEAM.map((item, i) =>
                            <WebCard
                                key={i}
                                imgSource={item.image || '/contact/profile_pic.png'}
                                name={item.name}
                                mail={`mailto:${item.mail}`}
                                github={item.github}
                                linkedin={item.linkedin}
                            />
                        )}
                    </div>
                </div>
            </div>
            <br/><br/><br/>
        </div>
    );
}