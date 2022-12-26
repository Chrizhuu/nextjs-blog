import { Html, Main, Head } from "next/document";
import { NextScript } from "next/document";

export default () => (
  <Html className="dark">
    <Head />
    <body className="dark:bg-black dark:text-white">
      <Main />
      <NextScript />
    </body>
  </Html>
);
