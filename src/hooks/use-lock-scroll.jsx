import {useLayoutEffect} from "react";

/**
 * Call this in a component to lock the body scroll
 */
export default function useLockBodyScroll() {
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);
}

export function ScrollLocker() {
    useLockBodyScroll();

    return null;
}