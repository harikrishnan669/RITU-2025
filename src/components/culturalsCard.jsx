import { CalendarClock } from "lucide-react";
import { MapPin } from "lucide-react";
import BookNow from "@/components/bookNow";

export default function Card({
	imgSource,
	date,
	location,
	buttonColor = "bg-blue-500",
	// descText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	// isMobile,
}) {
	return (
		<div className="flex flex-col justify-center items-center w-full h-full">
			<div
				className={
					"w-[69vw] sm:w-[18rem] lg:w-[21rem] max-w-[25rem] rounded-[1rem] bg-white/10 backdrop-blur-md border border-white/20 "
				}
			>
				<img
					src={imgSource}
					alt="Event image"
					loading="lazy"
					className="w-full object-contain "
				/>

				<div className="flex flex-col justify-center items-center mb-6">
					<div className="flex flex-col gap-y-4 my-4 mx-2 justify-center items-start ">
						<div className="flex flex-row items-center gap-2">
							<MapPin color="white" />
							<p className="text-white text-sm">{location}</p>
						</div>
						<div className="flex flex-row items-center gap-2">
							<CalendarClock color="white" />
							<p className="text-white  text-sm">{date}</p>
						</div>
					</div>

					<BookNow btnColor={buttonColor} />
				</div>
			</div>
{/* 
			<div className="">
				{isMobile && (
					<p className="text-white text-center my-20 px-10">{descText}</p>
				)}
			</div> */}
		</div>
	);
}
