import { CalendarClock } from "lucide-react";
import { MapPin } from "lucide-react";
import BookNow from "@/components/bookNow";

/**
 * @param {{ imgSource: string, buttonColor: string, date: string, location: string, onClick?: () => void }} props
 */
export default function Card({ imgSource, date, location, buttonColor = "bg-blue-500" }) {
	return (
		<div
			className={
				" min-w-[15rem] w-[30vw] mx-auto my-10 max-w-[25rem] rounded-[3rem] bg-white/10 backdrop-blur-md border border-white/20 "
			}
		>
			<img
				src={imgSource}
				alt="Event"
				loading="lazy"
				decoding="async"
				className="w-full object-contain"
			/>

			<div className="flex flex-row gap-2 justify-center items-center mt-4  ">
				<MapPin color="black" />
				<p className="text-white text-sm">{location}</p>
				<CalendarClock color="black" />
				<p className="text-white  text-sm">{date}</p>
			</div>

			<div className="flex flex-col items-center justify-center h-24">
				<BookNow
					onClick={() => {
						window.location.href = "/culturals";
					}} 
					btnColor={buttonColor}
				/>
			</div>
		</div>
	);
}
