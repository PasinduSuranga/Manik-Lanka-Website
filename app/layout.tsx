import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header"; // 1. Import your Header
import Footer from "../Components/Footer"
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manik Lanka Holidays",
  icons: {
    icon: "https://res.cloudinary.com/bnhex8aj/image/upload/v1783672260/logo_ef2rw8.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-C20RTQ4NL9`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C20RTQ4NL9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* End Google Analytics */}

        {/* 2. Add your Header here */}
        <Header />

        {/* 3. Wrap children in <main> for content */}
        <main>{children}</main>

        {/* You could also add a <Footer /> here */}
        <Footer />
      </body>
    </html>
  );
}