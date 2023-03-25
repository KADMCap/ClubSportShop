import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Russo_One } from "next/font/google";

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
  return (
    <main
      className={`${inter.variable} ${russo.variable} font-sans max-w-[1440px] mx-auto`}
    >
      <Component {...pageProps} />
    </main>
  );
}
