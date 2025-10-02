import {IProshows} from "@/data/proshows";
import Link from "next/link";

function ActualPage({data}: {data: IProshows}) {
    return <div
        className="relative max-sm:w-[70%] overflow-hidden rounded-2xl max-w-[400px] bg-white/10 backdrop-blur-md border border-white/20"
    >
        <img
            src={data.img}
            alt="Event image"
            loading="lazy"
            className="w-full object-contain"
        />

        {/*{!placeholder && <div className="flex flex-col justify-center items-center mb-6">*/}
        {/*	<div className="flex flex-col gap-y-4 my-4 mx-2 justify-center items-start ">*/}
        {/*		<div className="flex flex-row items-center gap-2">*/}
        {/*			<MapPin color="white" />*/}
        {/*			<p className="text-white text-sm">{location}</p>*/}
        {/*		</div>*/}
        {/*		<div className="flex flex-row items-center gap-2">*/}
        {/*			<CalendarClock color="white" />*/}
        {/*			<p className="text-white  text-sm">{date}</p>*/}
        {/*		</div>*/}
        {/*	</div>*/}

        {/*	<BookNow btnColor={buttonColor} />*/}
        {/*</div>}*/}
    </div>
}

export default function CulturalsCard({
                                          data
                                      }: {
    data: IProshows
}) {
    if (data.pageLink || data.href) {
        return <Link href={data.pageLink || data.href} className="flex flex-col justify-center items-center w-full h-full">
            <ActualPage data={data}/>
        </Link>
    }

    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <ActualPage data={data}/>
        </div>
    );
}
