import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export default function ToggleSwitch() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "sv";
  const [enabled, setEnabled] = React.useState(currentLocale === "en");

  React.useEffect(() => {
    setEnabled(currentLocale === "en");
  }, [currentLocale]);

  const toggleLocale = () => {
    const newLocale = enabled ? "sv" : "en";
    const segments = pathname.split("/");
    if (segments[1] === "sv" || segments[1] === "en") {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPathname = segments.join("/") || "/";
    router.push(newPathname);
    setEnabled(!enabled);
  };

  return (
    <SwitchPrimitive.Root
      checked={enabled}
      onCheckedChange={toggleLocale}
      className="relative inline-flex h-8 w-16 cursor-pointer items-center rounded-full border transition-colors duration-300
        bg-[var(--color-foreground)]
        border-[var(--color-accent)]
        focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-0"
    >
      {/* Text på "spåret" som visar vad man togglar till */}
      <span
        className={`absolute left-3 text-xs font-semibold select-none pointer-events-none
          ${enabled ? "text-[var(--color-accent)]" : "text-transparent"}`}
      >
        SV
      </span>
      <span
        className={`absolute right-3 text-xs font-semibold select-none pointer-events-none
          ${!enabled ? "text-[var(--color-accent)]" : "text-transparent"}`}
      >
        EN
      </span>

      {/* Bollen med text och färger */}
      <SwitchPrimitive.Thumb
        className="flex h-7 w-7 items-center justify-center rounded-full shadow-md transition-transform duration-300
          bg-[var(--color-accent)]
          border border-[var(--color-accent)]
          text-[var(--color-foreground)] font-semibold text-xs select-none
          data-[state=checked]:translate-x-8 data-[state=unchecked]:translate-x-0"
      >
        {enabled ? "EN" : "SV"}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}
