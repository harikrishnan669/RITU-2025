import Header from "@/components/header";
import Card from "@/components/culturalsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
		<>
			<section className="w-full h-full py-20 overflow-x-hidden  min-h-[40rem] flex flex-col items-center justify-between ">
				<Header title="Culturals" />

				<Swiper
					className="mySwiper  "
					style={{
						height: "100%",
						paddingLeft: 0,
						paddingRight: 0,
						paddingTop: 20,
						overflow: "visible",
					}} // allow overflow for scaling
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
					loop={true}
					effect="slide"
					navigation
					modules={[Navigation]}
					slidesPerView={1}
					speed={700}
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						1024: {
							slidesPerView: 3,
						},
					}}
					onSlideChange={(swiper) => {
						if (isMobile) {
							setActiveIndex(swiper.realIndex);
						} else {
							setActiveIndex((swiper.realIndex + 1) % 4);
						}
					}}
				>
					{/* Custom navigation buttons for desktop */}

					<SwiperSlide
						key="slide-1"
						className={`w-full flex justify-center items-center z-30`}
						style={{
							transform: activeIndex === 0 ? "scale(1.10)" : "scale(0.90)",
							opacity: activeIndex === 0 ? 1 : 0.6,
							zIndex: activeIndex === 0 ? 40 : 30,
							transition:
								"transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
						}}
					>
						<div
							className={`w-full max-sm:flex justify-center items-center  `}
							onClick={() => {
								if (!isMobile) {
									router.push(
										`/culturals?img=${encodeURIComponent(`/culturals/1.png`)}`
									);
								}
							}}
						>
							<Card
								imgSource="/culturals/1.png"
								buttonColor="#08070D"
								date={"March 21, 7pm-12pm"}
								location={"College Auditorium"}
								// descText="Gauri Lakshmi captivated the audience with her graceful performance at the recent cultural event held at [Event Venue/Name]. Blending classical elements with modern storytelling, her presentation reflected deep dedication and artistic excellence. The performance not only highlighted her mastery of expression and rhythm but also conveyed a powerful message rooted in Indian tradition. The audience responded with overwhelming applause, making the event a memorable celebration of culture and talent."
								// isMobile={isMobile}
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide
						key="slide-2"
						className={`w-full flex justify-center items-center  z-30`}
						style={{
							transform: activeIndex === 1 ? "scale(1.10)" : "scale(0.90)",
							opacity: activeIndex === 1 ? 1 : 0.6,
							zIndex: activeIndex === 1 ? 40 : 30,
							transition:
								"transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
						}}
					>
						<div
							className={`w-full max-sm:flex justify-center items-center  `}
							onClick={() => {
								if (!isMobile) {
									router.push(
										`/culturals?img=${encodeURIComponent(`/culturals/2.png`)}`
									);
								}
							}}
						>
							<Card
								imgSource="/culturals/2.png"
								buttonColor="#DE573A"
								date={"March 21, 7pm-12pm"}
								location={"College Auditorium"}
								// descText="Gauri Lakshmi captivated the audience with her graceful performance at the recent cultural event held at [Event Venue/Name]. Blending classical elements with modern storytelling, her presentation reflected deep dedication and artistic excellence. The performance not only highlighted her mastery of expression and rhythm but also conveyed a powerful message rooted in Indian tradition. The audience responded with overwhelming applause, making the event a memorable celebration of culture and talent."
								// isMobile={isMobile}
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide
						key="slide-3"
						className={`w-full flex justify-center items-center  z-30`}
						style={{
							transform: activeIndex === 2 ? "scale(1.10)" : "scale(0.90)",
							opacity: activeIndex === 2 ? 1 : 0.6,
							zIndex: activeIndex === 2 ? 40 : 30,
							transition:
								"transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
						}}
					>
						<div
							className={`w-full max-sm:flex justify-center items-center  `}
							onClick={() => {
								if (!isMobile) {
									router.push(
										`/culturals?img=${encodeURIComponent(`/culturals/3.png`)}`
									);
								}
							}}
						>
							<Card
								imgSource="/culturals/3.png"
								buttonColor="#900000"
								date={"March 21, 7pm-12pm"}
								location={"College Auditorium"}
								// descText="Gauri Lakshmi captivated the audience with her graceful performance at the recent cultural event held at [Event Venue/Name]. Blending classical elements with modern storytelling, her presentation reflected deep dedication and artistic excellence. The performance not only highlighted her mastery of expression and rhythm but also conveyed a powerful message rooted in Indian tradition. The audience responded with overwhelming applause, making the event a memorable celebration of culture and talent."
								// isMobile={isMobile}
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide
						key="slide-4"
						className={`w-full flex justify-center items-center  z-30`}
						style={{
							transform: activeIndex === 3 ? "scale(1.10)" : "scale(0.90)",
							opacity: activeIndex === 3 ? 1 : 0.6,
							zIndex: activeIndex === 3 ? 40 : 30,
							transition:
								"transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
						}}
					>
						<div
							className={`w-full max-sm:flex justify-center items-center  `}
							onClick={() => {
								if (!isMobile) {
									router.push(
										`/culturals?img=${encodeURIComponent(`/culturals/3.png`)}`
									);
								}
							}}
						>
							<Card
								imgSource="/culturals/3.png"
								buttonColor="#900000"
								date={"March 21, 7pm-12pm"}
								location={"College Auditorium"}
								// descText="Gauri Lakshmi captivated the audience with her graceful performance at the recent cultural event held at [Event Venue/Name]. Blending classical elements with modern storytelling, her presentation reflected deep dedication and artistic excellence. The performance not only highlighted her mastery of expression and rhythm but also conveyed a powerful message rooted in Indian tradition. The audience responded with overwhelming applause, making the event a memorable celebration of culture and talent."
								// isMobile={isMobile}
							/>
						</div>
					</SwiperSlide>
				</Swiper>
			</section>
		</>
	);
}
