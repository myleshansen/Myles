import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        /*style={{
          backgroundColor: "#000",
          margin: "0px",
          backgroundImage:
            "radial-gradient(rgba(2255, 255, 255, 0.1) 9%, transparent 9%); background-position: 0 0; background-size: 12vmin 12vmin; position: absolute; left: 0px top: 0px; z-index: -1;",
        }}
        */
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
