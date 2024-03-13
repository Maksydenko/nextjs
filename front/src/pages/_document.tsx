import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="en" id="html">
    <Head>
      <link rel="apple-touch-icon" href="/img/logos/favicon.png" />
      <link rel="icon" href="/img/logos/favicon.png" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
