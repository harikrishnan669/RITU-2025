"use client";

import LandingScreen from "@/components/home/landing-screen";
import MeetOurSponsorsNew from "@/components/home/meet-our-sponsors-new";
import AboutUs from "@/components/home/about-us";
import EventsListing from "@/components/home/events-listing";
import CulturalEvents from "@/components/home/cultural-events";
import Gallery from "@/components/home/gallery";

export default function Home() {
    return <main className="overflow-y-auto size-full">
        <LandingScreen/>
        <AboutUs/>
        <EventsListing/>
        <br/><br/>
        <CulturalEvents/>
        <br/><br/>
        <MeetOurSponsorsNew/>
        <br/><br/>
        <Gallery/>
    </main>
}
