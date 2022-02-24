import "../styles/globals.css";

import { AppProps } from "next/app";
import { HackathonStartedContextProvider } from "~/context/HackathonStartedContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HackathonStartedContextProvider>
      <Component {...pageProps} />
    </HackathonStartedContextProvider>
  );
}
