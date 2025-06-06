// components/IntlProvider.tsx
'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useMemo } from 'react';

interface Props {
  locale: string;
  messages: Record<string, string | Record<string, string>>;
  children: React.ReactNode;
}

export default function IntlProvider({ children, locale, messages }: Props) {

  const now = useMemo(() => new Date(), []);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="Europe/Stockholm" // 👈 Lägg till denna rad!
      now={now}
    >
      {children}
    </NextIntlClientProvider>
  );
}
