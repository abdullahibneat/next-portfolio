import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          {/* Inter font */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="modal-root" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
