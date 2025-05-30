import {cn} from "@/lib/utils";
import {Marquee} from "@/components/magicui/marquee";
import Header from "@/components/header";

const reviews = [
    {
        img: "/sponsors/berger.png",
    },
    {
        img: "/sponsors/sbi.png",
    },
    {
        img: "/sponsors/lic.png",
    },
];

const firstRow = reviews;

const ReviewCard = ({img}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 bg-white flex items-center justify-center",
            )}
        >
            <img className="rounded-full" src={img}/>
        </figure>
    );
};

function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <br/>
            <Marquee reverse className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            {/*<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>*/}
            {/*<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>*/}

            {/*<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>*/}
            {/*<div*/}
            {/*    className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>*/}
        </div>
    );
}


export default function MeetOurSponsors() {
    return (
        <section className="">
            <Header title="Meet Our Partners"/>
            <MarqueeDemo/>
        </section>
    );
}