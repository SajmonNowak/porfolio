import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/inconsolata/400.css";
import "../styles/scrollBar.scss";

import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

import "../styles/nprogress.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
