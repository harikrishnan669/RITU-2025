import Header from "@/components/header";
import Card from "@/components/culturalsCard";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import React from "react";

export default function CulturalEvents() {
	const swiperRef = React.useRef(null);

	return (
		<section className="w-full h-dvh relative">
			<Header title="Culturals" />

			<div className="absolute -left-2 sm:top-1/2 top-1/3 z-20 rounded-full w-20 flex items-center justify-center">
				<button
					type="button"
					className="w-16 h-16 flex items-center justify-center rounded-full"
					onClick={() => {
						swiperRef.current /* as any */
							?.slidePrev?.();
					}}
				>
					<ChevronLeft />
				</button>
			</div>
			<div className="absolute -right-2 sm:top-1/2 top-1/3 z-20 rounded-full w-20 flex items-center justify-center">
				<button
					type="button"
					className="w-16 h-16 flex items-center justify-center rounded-full"
					onClick={() => {
						swiperRef.current /* as any */
							?.slideNext?.();
					}}
				>
					<ChevronRight />
				</button>
			</div>

			<Swiper
				modules={[Pagination, Autoplay]}
				autoplay={{ delay: 2500, disableOnInteraction: false }}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				loop={true}
				slidesPerView={1}
				centeredSlides={true}
				slidesOffsetBefore={50}
				slidesOffsetAfter={50}
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
				className="mySwiper"
				style={
					{
						// display: "flex",
						// alignItems: "center",
						// justifyContent: "center",
					}
				}
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
