"use client";
import PosterListing from "@/components/pages/poster-listing";
import BE_A_PART from "@/data/be-a-part";

export default function PartOfRITUPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <br/><br/>
            <br/><br/>
            <h1 className="text-4xl text-left nav-item nav-always-show">Be A Part Of RITU
                <div className="nav-border nav-border-1"/>
                <div className="nav-border nav-border-2"/>
                <div className="nav-border nav-border-3"/>
                <div className="nav-border nav-border-4"/>
            </h1>
            <p className="text-lg text-center mt-8 mb-8">
              Join us and contribute to the vibrant RITU community. Explore opportunities below!
            </p>
            <PosterListing showFilter={false} events={BE_A_PART}/>
        </section>
    );
}
