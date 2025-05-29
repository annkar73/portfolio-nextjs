"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export default function ToggleSwitch() {
  const router = useRouter();
  const pathname = usePathname();

  // Hämta språk från första segment, fallback sv
  const currentLocale = pathname.split("/")[1] || "sv";

  // State för switch, true = English, false = Swedish
  const [enabled, setEnabled] = React.useState(currentLocale === "en");

  // Sync state if pathname changes (ex. vid navigation utanför denna komponent)
  React.useEffect(() => {
    setEnabled(currentLocale === "en");
  }, [currentLocale]);

  // Funktion som byter språk genom att byta ut första segment i path
  const toggleLocale = () => {
    const newLocale = enabled ? "sv" : "en";

    // Dela upp path på /
    const segments = pathname.split("/");

    // Om första segment är sv eller en, byt ut, annars lägg till nytt språk
    if (segments[1] === "sv" || segments[1] === "en") {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPathname = segments.join("/") || "/";

    // Navigera till ny URL med nytt språk
    router.push(newPathname);

    // Uppdatera state så switchen ändras direkt
    setEnabled(!enabled);
  };

  return (
    <div className="flex items-center space-x-2 select-none">
      {/* Text för språk vänster om switch */}
      <span className={cn("text-sm font-semibold", !enabled ? "text-primary" : "text-muted-foreground")}>
        SV
      </span>

      <SwitchPrimitive.Root
        checked={enabled}
        onCheckedChange={toggleLocale}
        className={cn(
          "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.5rem] w-10 shrink-0 items-center rounded-full border border-transparent shadow transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
        )}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "bg-background pointer-events-none block h-6 w-6 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-4px)] data-[state=unchecked]:translate-x-0"
          )}
        />
      </SwitchPrimitive.Root>

      {/* Text för språk höger om switch */}
      <span className={cn("text-sm font-semibold", enabled ? "text-primary" : "text-muted-foreground")}>
        EN
      </span>
    </div>
  );
}
