import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Russo_One } from "next/font/google";
import { useContext, useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const russo = Russo_One({
  subsets: ["latin"],
  variable: "--font-russo",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <main
        className={`${inter.variable} ${russo.variable} font-sans max-w-[1920px] mx-auto`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
