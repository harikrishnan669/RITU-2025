"use client";

import LandingScreen from "@/components/home/landing-screen";
import MeetOurSponsors from "@/components/home/meet-our-sponsors";
import AboutUs from "@/components/home/about-us";
import EventsListing from "@/components/home/events-listing";
import CulturalEvents from "@/components/home/cultural-events";
import Gallery from "@/components/home/gallery";

export default function Home() {
    return <main className="overflow-y-auto size-full h-[4000px]">
        <LandingScreen/>
        <AboutUs/>
        <EventsListing/>
        <CulturalEvents/>
        <MeetOurSponsors/>
        <Gallery/>
    </main>
}
