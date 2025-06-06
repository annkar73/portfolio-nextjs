// app/[locale]/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntlProvider from "@/components/IntlProvider";
import "@/app/globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anna Karlsen - Portfolio",
  description: "Portfolio of Anna Karlsen, Front End Developer",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

// ✅ Rätt sätt att importera med dynamic path i Next.js App Router
async function getMessages(locale: string) {
  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return messages as Record<string, string | Record<string, string>>;
  } catch (error) {
    console.error(`Could not load messages for locale "${locale}"`, error);
    return {}; // fallback till tomma texter
  }
}

// ✅ RootLayout som async funktion
export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <IntlProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </IntlProvider>
      </body>
    </html>
  );
}