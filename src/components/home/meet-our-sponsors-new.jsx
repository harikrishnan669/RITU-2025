import Header from "@/components/header";
import LogoWall from "@/components/logo-wall/logo-wall";
import Link from "next/link";

export default function MeetOurSponsorsNew() {
    return (
        <>
            <Header title="Meet Our Partners" className="mb-4"/>
            <Link href="/be-a-part">
                <p className="text-center hover:underline underline-offset-4 hover:scale-110 transition">Want to be a part of <span
                    className="highlighted-text text-black">RITU?</span></p>
            </Link>
            <br/>
            <br/>
            <LogoWall/>
            <br/><br/>
        </>
    );
}
