import Navbar from "@/components/navbar";
import "./globals.css";
import "../public/fonts/Syne/stylesheet.css";
import "../public/fonts/matter/stylesheet.css";
import localFont from "next/font/local";

const matter = localFont({
  src: [
    {
      path: "../public/fonts/matter/Matter-Bold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../public/fonts/matter/Matter-BoldItalic.woff",
      weight: "bold",
      style: "italic",
    },
    {
      path: "../public/fonts/matter/Matter-Heavy.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/matter/Matter-HeavyItalic.woff",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/fonts/matter/Matter-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/matter/Matter-LightItalic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/matter/Matter-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/matter/Matter-Regular.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../public/fonts/matter/Matter-RegularItalic.woff",
      weight: "normal",
      style: "italic",
    },
    {
      path: "../public/fonts/matter/Matter-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/matter/Matter-SemiBoldItalic.woff",
      weight: "600",
      style: "italic",
    },
  ],
});

const syne = localFont({
  src: [
    {
      path: "../public/fonts/Syne/Syne-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../public/fonts/Syne/Syne-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Syne/Syne-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../public/fonts/Syne/Syne-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${matter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
