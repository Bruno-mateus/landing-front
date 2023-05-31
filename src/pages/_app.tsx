import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { Red_Hat_Display } from "next/font/google";
import "../styles/banner.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <main className={redHatDisplay.className}>
      <Component {...pageProps} />
    </main>
  );
}
