import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="bg-bg_pink w-full min-h-screen text-sm text-textColor">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
