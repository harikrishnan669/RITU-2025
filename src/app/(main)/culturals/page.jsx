"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { CalendarClock, MapPin, Info } from "lucide-react";
import BookNow from "@/components/bookNow";

export default function CulturalEventsDesc() {
	const searchParams = useSearchParams();
	const img = searchParams.get("img");
	return (
		<section className="w-full h-dvh flex justify-center items-center relative">
			<div className="w-full flex flex-row   text-white">
				{img && (
					<img
						src={decodeURIComponent(img)}
						alt="Event"
						className="w-full max-w-md mb-6 "
					/>
				)}
				<div className="flex flex-col justify-center items-start max-w-xl gap-4">
					<div className="flex flex-row  mb-4">
						<MapPin className="mx-2" />
						<p>Computer Science Department Seminar Hall</p>
					</div>

					<div className="flex flex-row items-start mb-4">
						<CalendarClock className="mx-2" />
						<p>25 March 2025, 10am - 12pm</p>
					</div>
					<div className="flex flex-row items-start mb-4">
						<Info className="w-60 mx-1" />
						<p className="">
							Next Gen Gaming Zone is a state-of-the-art entertainment hub
							designed for gamers of all ages, offering an immersive experience
							with the latest consoles, high-performance PCs, VR setups, and
							motion-sensing games. With cutting-edge technology and a vibrant
							atmosphere, it’s the ultimate destination for casual players and
							competitive gamers alike. Whether you're teaming up with friends,
							joining tournaments, or exploring new virtual worlds, Next Gen
							Gaming Zone delivers the thrill of modern gaming like never
							before.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
