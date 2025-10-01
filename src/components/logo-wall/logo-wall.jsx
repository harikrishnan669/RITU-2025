import "./style.css"

function Logos() {
    return <>
        <svg>
            <use xlinkHref="#ritu-placeholder"/>
        </svg>
        <svg>
            <use xlinkHref="#kerala-paints"/>
        </svg>
        <svg>
            <use xlinkHref="#raze"/>
        </svg>
        <svg>
            <use xlinkHref="#ritu-placeholder"/>
        </svg>
        <svg>
            <use xlinkHref="#ritu-placeholder"/>
        </svg>
        <svg>
            <use xlinkHref="#ritu-placeholder"/>
        </svg>
        <svg>
            <use xlinkHref="#ritu-placeholder"/>
        </svg>
    </>
}

export default function LogoWall() {
    return <>
        <article className="wrapper">
            <div className="marquee">
                <div className="marquee__group">
                    <Logos/>
                </div>

                <div aria-hidden="true" className="marquee__group">
                    <Logos/>
                </div>
            </div>

            <div className="marquee marquee--reverse">
                <div className="marquee__group">
                    <Logos/>
                </div>

                <div aria-hidden="true" className="marquee__group">
                    <Logos/>
                </div>
            </div>
        </article>

        <svg style={{display: "none"}} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <symbol id="ritu-placeholder" viewBox="0 0 24 24">
                    <image href="/placeholder/ritu-white.webp" width={24} height={24}/>
                </symbol>
                <symbol id="kerala-paints" viewBox="0 0 24 24">
                    <image href="/sponsors/kerala-paints-poison.webp" className="" width={24} height={24}/>
                </symbol>
                <symbol id="raze" viewBox="0 0 24 24">
                    <image href="/sponsors/raze.webp" className="" width={24} height={24}/>
                </symbol>
            </defs>
        </svg>
    </>
}