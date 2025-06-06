import Header from "@/components/header";
import Card from "@/components/culturalsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CulturalEvents() {
	return (
		<section className="w-full h-dvh">
			<Header title="Culturals" />
			<div className="relative w-full h-full ">
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					autoplay={{ delay: 2500, disableOnInteraction: false }}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					loop={true}
					pagination={{ clickable: true }}
					spaceBetween={30}
					slidesPerView={2}
					centeredSlides={true}
					className="w-full h-full overflow-hidden"
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
				<div className="swiper-button-prev" />
				<div className="swiper-button-next" />
			</div>
		</section>
	);
}
