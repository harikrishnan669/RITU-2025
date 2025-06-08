import Header from "@/components/header";
import Card from "@/components/culturalsCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import React from "react";
import { useRouter } from "next/navigation";

export default function CulturalEvents() {
	const router = useRouter();
	const swiperRef = React.useRef(null);
	const [activeIndex, setActiveIndex] = React.useState(-1);
	const [isMobile, setIsMobile] = React.useState(false);
	React.useEffect(() => {

		const checkMobile = () => setIsMobile(window.innerWidth <= 640);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	return (
		<section className="w-full relative overflow-x-hidden">
			<Header title="Culturals" />

			<div className="absolute top-80 z-30 flex items-center justify-center pointer-events-auto">
				<button
					type="button"
					className="w-12 h-12 flex items-center justify-center  text-white "
					onClick={() => {
						setActiveIndex(-1); // Hide description
						swiperRef.current /* as any */
							?.slidePrev?.();
					}}
				>
					<ChevronLeft />
				</button>
			</div>
			<div className="absolute right-0 top-80 z-30 flex items-center justify-center pointer-events-auto">
				<button
					type="button"
					className="w-12 h-12 flex items-center justify-center text-white "
					onClick={() => {
						setActiveIndex(-1); // Hide description
						swiperRef.current /* as any */
							?.slideNext?.();
					}}
				>
					<ChevronRight />
				</button>
			</div>

			<Swiper
				modules={[Pagination]}
				className="mySwiper w-full my-10"
				style={{ width: "100%", paddingLeft: 0, paddingRight: 0 }}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				loop={true}
				slidesPerView={1}
				centeredSlides={true}
				breakpoints={{
					640: {
						slidesPerView: 1,
						slidesOffsetBefore: 30,
						slidesOffsetAfter: 30,
					},
					1024: {
						slidesPerView: 3,
						centeredSlides: true,
						slidesOffsetBefore: 50,
						slidesOffsetAfter: 50,
					},
				}}
				onSlideChange={(swiper) => {
					if (!isMobile) setActiveIndex(swiper.realIndex);
				}}
			>
				{[1, 2, 3, 1, 2, 3].map((num, idx) => (
					<SwiperSlide key={`slide-${idx}-${num}`} className="w-full">
						<div
							className={`w-full transition-transform duration-300 ${
								activeIndex === idx ? "scale-105 z-40" : "scale-95 opacity-80"
							}`}
							onClick={() => {
								if (!isMobile) {
									router.push(
										`/culturals?img=${encodeURIComponent(
											`/culturals/${num}.png`
										)}`
									);
								}
								if (isMobile) {
									setActiveIndex(activeIndex === idx ? -1 : idx);
								}
							}}
						>
							<Card
								imgSource={`/culturals/${num}.png`}
								buttonColor={
									num === 1 ? "#08070D" : num === 2 ? "#DE573A" : "#900000"
								}
								date={"March 21, 7pm-12pm"}
								location={"College Auditorium"}
							/>
						</div>
						{isMobile && activeIndex === idx && (
							<div className="text-white text-center my-10 px-10">
								Gauri Lakshmi captivated the audience with her graceful
								performance at the recent cultural event held at [Event
								Venue/Name]. Blending classical elements with modern
								storytelling, her presentation reflected deep dedication and
								artistic excellence. The performance not only highlighted her
								mastery of expression and rhythm but also conveyed a powerful
								message rooted in Indian tradition. The audience responded with
								overwhelming applause, making the event a memorable celebration
								of culture and talent.
							</div>
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
