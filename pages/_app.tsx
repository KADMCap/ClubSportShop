import { CartProvider } from "@/context/CartContext";
import { FilterProvider } from "@/context/FilterContext";
import { HeaderProvider } from "@/context/HeaderContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Russo_One } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { QueryClientProvider, QueryClient } from "react-query";

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

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const titleString = () => {
    if (router.route.slice(1).includes("/")) {
      const slashIndex = router.route.lastIndexOf("/");
      const dashIndex = router.route.lastIndexOf("-");

      return `${
        router.route.slice(slashIndex + 1, slashIndex + 2).toUpperCase() +
        router.route.slice(slashIndex + 2, dashIndex) +
        " " +
        router.route.slice(dashIndex + 1, dashIndex + 2).toUpperCase() +
        router.route.slice(dashIndex + 2)
      } - `;
    }

    return `${
      router.route.slice(1, 2).toUpperCase() + router.route.slice(2)
    } - `;
  };

  return (
    <ThemeProvider>
      <HeaderProvider>
        <CartProvider>
          <FilterProvider>
            <QueryClientProvider client={client}>
              <Head>
                <title>
                  {router.route !== "/" ? titleString() : ""}
                  Club Sport Shop
                </title>
                <meta
                  name="description"
                  content="Club Sport Shop - where you can find your sports clothes"
                />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <main
                className={`${inter.variable} ${russo.variable} font-sans max-w-[1920px] mx-auto`}
              >
                <Component {...pageProps} />
              </main>
            </QueryClientProvider>
          </FilterProvider>
        </CartProvider>
      </HeaderProvider>
    </ThemeProvider>
  );
}
