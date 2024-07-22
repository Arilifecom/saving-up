import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopScrollButton from "../components/TopScrollButton";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Saving UP</title>
        <meta property="og:title" content="Saving UP" />
        <meta
          property="og:description"
          content="オーストラリアで貯金日本円貯金を頑張っている人に向けた、モチベーションを保持するための計算サイトです。"
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://saving-up.vercel.app" />
        <meta property="og:type" content="website" />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon/favicon-32x32.png"
        />
        <link
          rel="android-chrome"
          type="image/png"
          sizes="192x192"
          href="/public/favicon/android-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/favicon/apple-touch-icon.png"
        />
        <link
          rel="android-chrome"
          sizes="512x512"
          href="/public/favicon/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/public/favicon/site.webmanifest" />
      </Head>
      <Header />
      <main className="bg-bg_pink w-full min-h-screen text-sm text-textColor">
        <Component {...pageProps} />
      </main>
      <TopScrollButton />
      <Footer />
    </>
  );
}

export default MyApp;
