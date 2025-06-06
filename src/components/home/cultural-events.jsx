import Header from "@/components/header";
import Card from "@/components/culturalsCard";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import React, { useRef } from "react";

export default function CulturalEvents() {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<section className="w-full h-dvh relative">
			<Header title="Culturals" />

			{/* Navigation buttons rendered before Swiper for ref attachment */}
			<div
				ref={prevRef}
				className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 rounded-full w-20  flex items-center justify-center cursor-pointer"
				style={{ pointerEvents: "auto" }}
			>
				<ChevronLeft />
			</div>
			<div
				ref={nextRef}
				className="absolute -right-2 top-1/2 -translate-y-1/2 z-20  rounded-full w-20 flex items-center justify-center cursor-pointer"
				style={{ pointerEvents: "auto" }}
			>
				<ChevronRight />
			</div>

			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				autoplay={{ delay: 2500, disableOnInteraction: false }}
				navigation={{
					nextEl: nextRef.current,
					prevEl: prevRef.current,
				}}
				onInit={(swiper) => {
					if (typeof swiper.params.navigation === "object") {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}
				}}
				loop={true}
				slidesOffsetBefore={50}
				slidesOffsetAfter={50}
				breakpoints={{
					0: {
						slidesPerView: 1,
						slidesOffsetBefore: 10,
						slidesOffsetAfter: 10,
					},
					640: {
						slidesPerView: 2,
						slidesOffsetBefore: 30,
						slidesOffsetAfter: 30,
					},
					1024: {
						slidesPerView: 2.5,
						slidesOffsetBefore: 50,
						slidesOffsetAfter: 50,
					},
				}}
				className="mySwiper"
				style={{
					paddingLeft: 50,
					paddingRight: 50,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<SwiperSlide>
					<Card
						imgSource={"/culturals/1.png"}
						buttonColor={"#08070D"}
						date={"March 21, 7pm-12pm"}
						location={"College Auditorium"}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						imgSource={"/culturals/2.png"}
						buttonColor={"#DE573A"}
						date={"March 21, 7pm-12pm"}
						location={"College Auditorium"}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						imgSource={"/culturals/3.png"}
						buttonColor={"#900000"}
						date={"March 21, 7pm-12pm"}
						location={"College Auditorium"}
					/>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
