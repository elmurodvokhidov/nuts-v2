import type { Metadata } from "next";
import { Russo_One } from "next/font/google";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const russo_one = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-russo_one",
});

export const metadata: Metadata = {
  title: "UYCHI NUTS",
  description: "UYCHI NUTS - Tabiatning Eng Toza Ta'mi!",
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${russo_one.className} antialiased overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}