import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Intro from "@/components/Intro/Intro";
import About from "@/components/About/About";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact/Contact";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Change the duration to suit your needs
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Myles Hansen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-line.svg" />
      </Head>

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          {
            <main>
              <Intro />
              <About />
              <Work />
              <Contact />
            </main>
          }
          <Analytics />
          <SpeedInsights />
        </div>
      )}
    </>
  );
}
