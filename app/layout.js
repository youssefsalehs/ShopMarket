import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";
import MySessionProvider from "./_components/MySessionProvider/MySessionProvider";
import { Toaster } from "react-hot-toast";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShopMarket",
  description:
    "ShopMarket is a modern e-commerce web application built with Next.js, React, and Tailwind CSS. It features product browsing, advanced filtering, authentication, wishlist and shopping cart functionality, responsive design, and seamless API integration to deliver a fast and user-friendly shopping experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${robotoSans.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        {" "}
        <Toaster />
        <MySessionProvider>
          <Navbar />
          <main className=" mt-24 ">{children} </main>
          <Footer />
        </MySessionProvider>
      </body>
    </html>
  );
}
