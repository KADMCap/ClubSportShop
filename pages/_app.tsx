import { apolloClient } from "@/graphql/apolloClient";
import nextSeoConfig from "@/next-seo.config";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Inter, Russo_One } from "next/font/google";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { SessionProvider } from "next-auth/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const russo = Russo_One({
  subsets: ["latin"],
  variable: "--font-russo",
  weight: "400",
});

const client = new QueryClient();
if (typeof window === "undefined") React.useLayoutEffect = React.useEffect; // for Tickets dropdown (useLayoutEffect has warning on ssr site i.e products/slug but withour useLayoutEffect Tickets dropdown are blinking because of re-render sidebar)

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <QueryClientProvider client={client}>
            <DefaultSeo
              {...nextSeoConfig}
              additionalLinkTags={[
                {
                  rel: "icon",
                  href: "/favicon.ico",
                },
              ]}
            />
            <main
              className={`${inter.variable} ${russo.variable} font-sans max-w-[1920px] mx-auto`}
            >
              <Component {...pageProps} />
            </main>
          </QueryClientProvider>
        </Provider>
      </ApolloProvider>
    </SessionProvider>
  );
}
