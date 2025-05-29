// app/[locale]/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IntlProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anna Karlsen - Portfolio",
  description: "Portfolio of Anna Karlsen, Front End Developer",
};

// Route param-typ för Next.js 13 app dir
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = params;

  // Dynamiskt importera rätt meddelandefil beroende på locale
  const messages = (await import(`../../src/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <IntlProvider messages={messages} locale={locale}>
          <Header />
          {children}
          <Footer />
        </IntlProvider>
      </body>
    </html>
  );
}
