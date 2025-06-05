// components/IntlProvider.tsx
'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState } from 'react';

interface Props {
  locale: string;
  children: React.ReactNode;
}

export default function IntlProvider({ locale, children }: Props) {
  const [messages, setMessages] = useState<any | null>(null);

  useEffect(() => {
    async function loadMessages() {
      const msgs = await import(`../messages/${locale}.json`);
      setMessages(msgs.default);
    }
    loadMessages();
  }, [locale]);

  if (!messages) return null; // eller en loader

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
