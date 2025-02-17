import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopScrollButton from "../components/TopScrollButton";
import { Analytics } from "@vercel/analytics/react";
import ReloadButton from "../components/ReloadButton";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Saving UP</title>
        <meta property="og:title" content="Saving UP" />
        <meta
          property="og:description"
          content="オーストラリアで日本円の貯金を頑張る人のための計算サイト。毎週ごとに必要な貯金額を自動計算｜為替を自動計算で簡単シンプル｜登録・ダウンロードなしですぐに使える"
        />
        <meta
          property="og:image"
          content="https://saving-up.ari-life.com/img/ogp-img.jpg"
        />
        <meta property="og:url" content="https://saving-up.ari-life.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saving UP" />
        <meta
          name="twitter:description"
          content="オーストラリアで日本円の貯金を頑張る人のための計算サイト。毎週ごとに必要な貯金額を自動計算｜為替を自動計算で簡単シンプル｜登録・ダウンロードなしですぐに使える"
        />
        <meta
          name="twitter:image"
          content="https://saving-up.ari-life.com/img/ogp-img.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="android-chrome"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="android-chrome"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        <meta http-equiv="Cache-Control" content="no-store" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </Head>
      <Header />
      <main className="bg-bg_pink w-full min-h-screen text-sm text-textColor">
        <Component {...pageProps} />
        <Analytics />
      </main>
      <TopScrollButton />
      <ReloadButton />
      <Footer />
    </>
  );
}

export default MyApp;
