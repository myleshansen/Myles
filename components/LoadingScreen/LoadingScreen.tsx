import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  const [numLogos, setNumLogos] = useState(0);

  useEffect(() => {
    // Calculate the number of logos based on the viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const logoWidth = 100; // Set the logo width to 100 pixels
    const logoHeight = 100; // Set the logo height to 100 pixels
    const logosPerRow = Math.floor(viewportWidth / logoWidth);
    const rows = Math.floor(viewportHeight / logoHeight);
    const numLogos = logosPerRow * rows;

    setNumLogos(numLogos);
  }, []);

  return (
    <div className={styles['loading-screen']}>
      {/* Repeat the logo to fill the container */}
      {[...Array(numLogos)].map((_, index) => (
        <div key={index} className={styles['loading-screen__logo']}>
          <Image src="/logo-line.svg" alt="Logo" width={100} height={100} />
        </div>
      ))}
    </div>
  );
};

export default LoadingScreen;
