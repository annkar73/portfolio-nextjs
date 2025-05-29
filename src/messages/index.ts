// src/messages/index.ts
import sv from "./sv.json";
import en from "./en.json";

export function getMessages(locale: string) {
  switch (locale) {
    case "sv":
      return sv;
    case "en":
      return en;
    default:
      return sv; // fallback
  }
}
