// src/messages/index.ts
//import sv from "./sv.json";
//import en from "./en.json";

export async function getMessages(locale: string) {
  switch (locale) {
    case "sv":
      return (await import("./sv.json")).default;
    case "en":
      return (await import("./en.json")).default;
    default:
      return (await import("./sv.json")).default; // fallback
  }
}
