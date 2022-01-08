import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/inconsolata/400.css";
import "../styles/scrollBar.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
