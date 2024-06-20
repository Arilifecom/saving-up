import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-light w-full min-h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
