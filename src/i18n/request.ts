import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale ?? 'sv'; // fallback to swedish

  return {
    messages: (await import(`../messages/${safeLocale}.json`)).default,
    locale: safeLocale,
    timeZone: 'Europe/Stockholm', 
  };
});
