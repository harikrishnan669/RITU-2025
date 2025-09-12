import Header from "@/components/header";
import {ArrowRight} from "lucide-react";
import Link from 'next/link';
import BlurFade from "@/components/magicui/blurr-fade";
import GALLERY_IMAGES from "@/data/gallery";

const images = GALLERY_IMAGES.slice(0, 8);

export default function Gallery() {

    return <section className="container-cont">
        <Header title="Gallery"/>
        <div className="columns-2 gap-4 sm:columns-3 px-22 mb-10 py-2 max-sm:px-6">
            {images.map((imageUrl, index) => (
                index !== 8 ?
                    <BlurFade key={imageUrl} delay={0.25 + index * 0.05} inView>
                        <img
                            className="mb-4 size-full rounded-lg object-contain hover:scale-95 transition-transform duration-300 ease-in-out"
                            src={imageUrl}
                            alt=''
                        />
                    </BlurFade>
                    :
                    <BlurFade key={imageUrl} delay={0.25 + index * 0.05} inView className="flex justify-center items-center rounded-lg md:min-h-[200px] md:pr-1">
                        <Link href="/gallery" className="group flex flex-row items-center justify-center gap-2 text-md max-md:text-sm bg-white/10 border border-white/30 text-white px-3 py-3 rounded-lg hover:bg-white hover:text-black  transition-all duration-200">
                            View More
                            <ArrowRight className="stroke-current text-gray-100 group-hover:text-[#2563eb] transition-colors duration-100"/>
                        </Link>
                    </BlurFade>
            ))}
        </div>
    </section>
}