import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Intro from "@/components/Intro";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Vinith Shetty",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {/* Intro always loads on refresh/open */}
        <SmoothScroll />
        <Intro />
        {children}
      </body>
    </html>
  );
}
