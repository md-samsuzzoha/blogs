import { useEffect, useRef, useState } from "react";

const useClickOutside = () => {
    const [isClickOutside, setIsClickOutside] = useState(false);
    const ref = useRef<HTMLDivElement>(null);


    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setIsClickOutside(true);
        }
    };

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsClickOutside(true);
        }
    };
    
    const reset = () => setIsClickOutside(false);

    useEffect(() => {
        document.addEventListener("keydown", handleEscape, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", handleEscape, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return { ref, isClickOutside, reset };
}

export default useClickOutside;