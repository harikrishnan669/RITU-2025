import { useEffect, useState } from "react";


/**
 * Custom hook to determine if the viewport width is less than a specified breakpoint.
 * @param breakpoint {number} - The breakpoint in pixels to compare against. Default is 768 px.
 * @returns {boolean} - Returns true if the viewport width is less than the breakpoint, otherwise false.
 */
export function useIsLtMaxWidth(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(undefined);

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

        const onChange = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        mql.addEventListener("change", onChange);

        setIsMobile(window.innerWidth < breakpoint);

        return () => {
            mql.removeEventListener("change", onChange);
        };
    }, [breakpoint]);

    return !!isMobile;
}