// components/IntlProvider.tsx
'use client';

import { NextIntlClientProvider } from 'next-intl';

interface Props {
  locale: string;
  messages: Record<string, string | Record<string, string>>;
  children: React.ReactNode;
}

export default function IntlProvider({ locale, messages, children }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
