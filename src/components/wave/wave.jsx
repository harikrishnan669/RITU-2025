import waveCSS from "./wave.module.css";

const Wave = (props) => (
    <div className={`${waveCSS["svg-wave-container"]} sm:hidden`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491 63" {...props}>
            <g className="layer">
                <title>{"Layer 1"}</title>
                <g
                    fill="rgba(255, 255, 255, 0)"
                    strokeLinecap="round"
                    strokeMiterlimit={23.53}
                    strokeWidth={12}
                >
                    <path
                        stroke="#66B359"
                        d="M339.22 39.74c90.65-103.33 69.24 70.64 145.41-2.91"
                        transform="matrix(.9603 0 0 .96093 6.238 2.235)"
                    />
                    <path
                        stroke="#69B8DB"
                        d="M230.43 41.37c90.64-103.32 69.24 70.64 145.4-2.91"
                        transform="matrix(.9603 0 0 .96093 6.238 2.235)"
                    />
                    <path
                        stroke="#F25C65"
                        d="M116.6 40.63c90.65-103.32 69.24 70.64 145.41-2.91"
                        transform="matrix(.9603 0 0 .96093 6.238 2.235)"
                    />
                    <path
                        stroke="#FECD6A"
                        d="M6 40.91C96.64-62.41 75.24 111.55 151.41 38"
                        transform="matrix(.9603 0 0 .96093 6.238 2.235)"
                    />
                </g>
            </g>
        </svg>
    </div>
)
export default Wave
