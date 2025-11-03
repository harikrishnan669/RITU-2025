"use client";

import LandingScreen from "@/components/home/landing-screen";
import MeetOurSponsorsNew from "@/components/home/meet-our-sponsors-new";
import AboutUs from "@/components/home/about-us";
import EventsListing from "@/components/home/events-listing";
import ProshowEvents from "@/components/home/proshow-events";
import Gallery from "@/components/home/gallery";

export default function Home() {
    return <main className="overflow-y-auto size-full overflow-x-hidden">
        <LandingScreen/>
        <ProshowEvents/>
        <EventsListing/>
        <br/><br/>
        <AboutUs/>
        <br/><br/>
        <MeetOurSponsorsNew/>
        <br/><br/>
        <Gallery/>
        <br/><br/>
    </main>
}
