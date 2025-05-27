export default function Background() {
    return (
        <div className="fixed inset-0 w-full h-full z-[-1] gradient-bg">
            <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                    </filter>
                </defs>
                <ellipse
                    cx="100%"
                    cy="100%"
                    rx="80"
                    ry="50"
                    transform="rotate(45 50 50) scale(0.5)"
                    fill="#51062f"
                    filter="url(#blur)"
                />
            </svg>
        </div>

    );
}