import React, { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

interface CustomCursorProps {
    children: React.ReactNode;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const cursor = document.querySelector(`.${styles.cursor}`);

        const moveCursor = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            cursor?.setAttribute("style", `top: ${clientY}px; left: ${clientX}px;`);
        };

        const addCursor = () => {
            cursor?.classList.add(styles.active);
            cursor?.classList.remove(styles.inactive);
        };

        const removeCursor = () => {
            cursor?.classList.remove(styles.active);
            cursor?.classList.add(styles.inactive);
        };

        const currentRef = ref.current;
        if (currentRef) {
            currentRef.addEventListener("mousemove", moveCursor);
            currentRef.addEventListener("mouseenter", addCursor);
            currentRef.addEventListener("mouseleave", removeCursor);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener("mousemove", moveCursor);
                currentRef.removeEventListener("mouseenter", addCursor);
                currentRef.removeEventListener("mouseleave", removeCursor);
            }
        };
    }, []);

    return (
        <div ref={ref}>
            {children}
            <div className={`${styles.cursor} ${styles.inactive}`} />
        </div>
    );
};

export default CustomCursor;