import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body className="bg-white dark:bg-gray-800 transition-colors duration-100 ease-linear">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
