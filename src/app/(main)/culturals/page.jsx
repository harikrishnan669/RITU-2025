"use client";
import { useSearchParams } from "next/navigation";
import BookNow from "@/components/bookNow";

export default function CulturalEventsDesc() {
	const searchParams = useSearchParams();
	const img = searchParams.get("img");
	return (
		<section className="w-full h-dvh flex justify-center items-center relative p-10">
			<div className="w-full flex flex-row text-white">
				{img && (
					<img
						src={decodeURIComponent(img)}
						alt="Event"
						className="w-full max-w-lg mb-6 "
					/>
				)}
				<div className="flex flex-col ml-10 justify-center items-start max-w-xl">
					<div className="flex flex-row items-center gap-x-5 mb-4">
						<div className="m-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
								<circle cx="12" cy="10" r="3" />
							</svg>
						</div>
						<p>Computer Science Department Seminar Hall</p>
					</div>

					<div className="flex flex-row items-center gap-x-5 mb-4">
						<div className="m-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
								<path d="M16 2v4" />
								<path d="M8 2v4" />
								<path d="M3 10h5" />
								<path d="M17.5 17.5 16 16.3V14" />
								<circle cx="16" cy="16" r="6" />
							</svg>
						</div>
						<p>25 March 2025, 10am - 12pm</p>
					</div>
					<div className="flex flex-row items-center gap-x-5 mb-4">
						<div className="m-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<circle cx="12" cy="12" r="10" />
								<path d="M12 16v-4" />
								<path d="M12 8h.01" />
							</svg>
						</div>
						<p className="">
							Next Gen Gaming Zone is a state-of-the-art entertainment hub
							designed for gamers of all ages, offering an immersive experience
							with the latest consoles, high-performance PCs, VR setups, and
							motion-sensing games. With cutting-edge technology and a vibrant
							atmosphere, it’s the ultimate destination for casual players and
							competitive gamers alike. Whether you&#39;re teaming up with
							friends, joining tournaments, or exploring new virtual worlds,
							Next Gen Gaming Zone delivers the thrill of modern gaming like
							never before.
						</p>
					</div>
					<div className="flex flex-row items-center mt-10 justify-end w-full">
						<BookNow btnColor="black" />
					</div>
				</div>
			</div>
		</section>
	);
}
