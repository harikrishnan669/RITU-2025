import Header from "@/components/header";
import CulturalsCard from "@/components/culturals-card";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";
import PROSHOWS from "@/data/proshows";
import {Autoplay, Navigation} from "swiper/modules";

export default function ProshowEvents() {
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
            <section
                className="w-full h-full py-20 overflow-x-hidden  min-h-[40rem] flex flex-col items-center justify-between ">
                <Header title="Pro Shows" id="proshows"/>

                <Swiper
                    className="mySwiper"
                    style={{
                        height: "100%",
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 20,
                        overflow: "visible",
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    loop={true}
                    autoplay={true}
                    effect="slide"
                    navigation
                    modules={[Navigation, Autoplay]}
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
                    {PROSHOWS.map((temp, i) => {
                        // TODO: Thattikootte... Needed to show Job Kurian first on mobile and second on desktop, so did this.
                        const item = isMobile ? PROSHOWS[(i + 1) % PROSHOWS.length] : temp;

                        return <SwiperSlide
                                key={i}
                                className="w-full flex justify-center items-center z-30"
                                style={{
                                    transform: activeIndex === i ? "scale(1.10)" : "scale(0.90)",
                                    opacity: activeIndex === i ? 1 : 0.6,
                                    zIndex: activeIndex === i ? 40 : 30,
                                    transition:
                                        "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
                                }}
                            >
                                <div
                                    className="w-full max-sm:flex justify-center items-center"
                                >
                                    <CulturalsCard
                                        data={item}
                                    />
                                </div>
                            </SwiperSlide>
                        }
                    )}
                </Swiper>
            </section>
        </>
    );
}
