import { CalendarClock } from "lucide-react";
import { MapPin } from "lucide-react";
import BookNow from "@/components/bookNow";

export default function CulturalsCard({
	imgSource,
	date,
	location,
	placeholder = false,
	buttonColor = "bg-blue-500",
}) {
	return (
		<div className="flex flex-col justify-center items-center w-full h-full">
			<div
				className="relative max-sm:w-[70%] overflow-hidden rounded-2xl max-w-[400px] bg-white/10 backdrop-blur-md border border-white/20"
			>
				<img
					src={imgSource}
					alt="Event image"
					loading="lazy"
					className="w-full object-contain"
				/>

				{!placeholder && <div className="flex flex-col justify-center items-center mb-6">
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
				</div>}
			</div>
		</div>
	);
}
