import { AppProps } from "next/app";

import { theme } from "../styles/theme";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Context, ContextProvider } from "../contexts/ContextProvider";
import { Html, Main, NextScript } from "next/document";
import { useContext, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const { user } = useContext(Context);

  return (
    <ContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ContextProvider>
  );
}

export default MyApp;
