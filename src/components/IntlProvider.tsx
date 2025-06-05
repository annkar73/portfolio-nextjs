'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState } from 'react';

interface Props {
  locale: string;
  children: React.ReactNode;
}

// Du kan definiera en grov typ för messages här:
type Messages = Record<string, string | Record<string, string>>;

export default function IntlProvider({ locale, children }: Props) {
  const [messages, setMessages] = useState<Messages | null>(null);

  useEffect(() => {
    async function loadMessages() {
      const msgs = await import(`../messages/${locale}.json`);
      setMessages(msgs.default);
    }
    loadMessages();
  }, [locale]);

  if (!messages) return null; // Visa gärna en loader här

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
