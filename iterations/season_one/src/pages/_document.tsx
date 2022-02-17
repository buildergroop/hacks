import NextDocument, { Html, Head, Main, NextScript } from "next/document";
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-dark-main text-light-main overflow-x-none">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
