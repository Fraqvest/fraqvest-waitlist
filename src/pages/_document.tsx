import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Fraqvest" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="application-name" content="Fraqvest" />
        {/* <meta
          name="keywords"
          content="Fraqvest, fraqvest, Real Estate, btc, blockchain, Investing, web3, ai, AI, dapp, dex, NFT, community, Blockchain"
        /> */}
        <meta property="og:title" content="Fraqvest" />
        <meta property="og:site_name" content="Fraqvest" />
        <meta property="og:url" content="https://fraqvest.com" />
        <meta
          property="og:description"
          content="Fraqvest empowers you to invest in global rental properties within minutes. Enjoy monthly rent payments and discover the simplest way to diversify your real estate investments"
        />
        <meta property="og:type" content="website" />
        <meta property="og:rich_attachment" content="true" />
        <meta property="og:image" content="https://fraqvest.com/assets/logo_light.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fraqvest" />
        <meta name="twitter:creator" content="Fraqvest" />
        <meta name="twitter:site" content="@fraqvest" />
        <meta name="twitter:image" content="https://fraqvest.com/assets/logo_light.svg" />
        <meta name="twitter:image:alt" content="Fraqvest" />
        <meta
          name="twitter:description"
          content="Fraqvest empowers you to invest in global rental properties within minutes. Enjoy monthly rent payments and discover the simplest way to diversify your real estate investments"
        />

        {/* Replace Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5WZ2GJ5KFF"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5WZ2GJ5KFF');
          `}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
