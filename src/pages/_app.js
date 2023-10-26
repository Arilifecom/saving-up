import "tailwindcss/tailwind.css";
import { AppLayout } from "../layouts";

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
