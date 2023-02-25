import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  const [numLogos, setNumLogos] = useState(0);
  const [fadeState, setFadeState] = useState("loading");

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

  useEffect(() => {
    if (fadeState === "loading") {
      setTimeout(() => {
        setFadeState("fading");
      }, 1500);
    }
  }, [fadeState]);

  const WHITE_LOGO_THRESHOLD = 0.2; // Adjust this value to change the amount of white logos

  return (
    <div className={`${styles["loading-screen"]} ${fadeState}`}>
      {/* Repeat the logo to fill the container */}
      {[...Array(numLogos)].map((_, index) => {
        const random = Math.random();
        const isWhite = random < WHITE_LOGO_THRESHOLD;

        return (
          <div
            key={index}
            className={`${styles["loading-screen__logo"]} ${
              isWhite ? styles["loading-screen__logo--white"] : ""
            }`}
          >
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          </div>
        );
      })}
    </div>
  );
};

export default LoadingScreen;
