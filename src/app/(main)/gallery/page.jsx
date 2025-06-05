import Header from "@/components/header";
import BlurFade from "@/components/magicui/blurr-fade";

export default function Test() {
    const images = [...Array(9)].map((_, i) => {
        const isLandscape = i % 2 === 0;
        const width = isLandscape ? 800 : 600;
        const height = isLandscape ? 600 : 800;
        return `https://picsum.photos/seed/${i + 10}/${width}/${height}`;
    });

    return <div className="pt-20">
        <Header title="Gallery"/>
        <section className="px-22 mb-10 py-2 max-sm:px-6">
            <div className="columns-2 gap-4 sm:columns-3">
                {images.map((imageUrl, index) => (
                        <BlurFade key={imageUrl} delay={0.25 + index * 0.05} inView>
                            <img
                                className="mb-4 size-full rounded-lg object-contain"
                                src={imageUrl}
                                alt=''
                            />
                        </BlurFade>
                ))}
            </div>
        </section>
    </div>
}