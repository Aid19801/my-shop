import { AppProps } from "next/app";
import { SWRConfig } from "swr";
import fetchJson from "lib/fetchJson";
import { MainContextProvider } from "context/main";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainContextProvider>
      <SWRConfig
        value={{
          fetcher: fetchJson,
          onError: (err) => {
            console.error(err);
          },
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </MainContextProvider>
  );
}

export default MyApp;
