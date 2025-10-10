import "./style.css"


export default function Banner() {
    return <div className="w-full">
        <div className="marquee enable-animation">
            <ul className="marquee__content">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>

            <ul aria-hidden="true" className="marquee__content">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
        </div>
    </div>
}