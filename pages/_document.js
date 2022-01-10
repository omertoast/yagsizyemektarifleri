import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx)
  }

  render() {
    const meta = {
      title: 'Yağsız Yemek Tarifleri | Yemeğin en ekonomik hali',
      description: 'Sıfır aşçılık tecrübesi ile siz de yağsız yemekler yapmaya başlayabilirsiniz.',
    }

    return (
      <Html lang="en" className="bg-white text-gray-700 antialiased">
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
