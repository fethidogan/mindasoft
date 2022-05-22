import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";
import Layout from "../layout/Layout";
import { useRouter } from 'next/router';
import '../styles/globals.css'
import { StoreProvider } from "../utils/store"

// data layer problemi google tag lerinden kaynaklı olur.
function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const handleRouteChange = (url) => {
    window.gtag('config', 'G-JE9D8LEDKY', {
      page_path: url,
    });
  };

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap")
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events])

  return (
    <>
      <StoreProvider>
        <SSRProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SSRProvider>
      </StoreProvider>
    </>
  )
}

export default MyApp
