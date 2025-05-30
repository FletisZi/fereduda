import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#f8f8f8" />
        {/* Fontes do Google */}
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Oooh+Baby&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
