import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Welcome to SEOHive | Home",
  description: `SEOHive represents the fusion of "SEO," denoting search engine optimization, and "Hive," symbolizing a collaborative community working collectively towards common digital marketing objectives. It signifies a shared effort and network dedicated to pioneering SEO and digital marketing strategies.`,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
