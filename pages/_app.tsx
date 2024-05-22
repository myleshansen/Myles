import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import localFont from "next/font/local"
import { Raleway } from 'next/font/google'

const jacquard = localFont({
  src: "../public/fonts/Jacquard12-Regular.ttf",
  display: "swap",
  variable: '--font-jacquard',
})

const ralewayELight = localFont({
  src: "../public/fonts/Raleway-ExtraLight.ttf",
  display: 'swap',
  style: 'normal',
  weight: '400',
  variable: '--font-raleway-e-light',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${jacquard.variable} ${ralewayELight.variable}`}>
      <CustomCursor>
        <Component {...pageProps} />
      </CustomCursor>
    </main>
  );
}
