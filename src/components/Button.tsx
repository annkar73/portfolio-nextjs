import React from "react";
import { Button as ShadcnButton, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

type ButtonProps = React.ComponentProps<typeof ShadcnButton> & VariantProps<typeof buttonVariants>;

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <ShadcnButton
      className={cn(
        "border border-2 border-[var(--color-accent)] text-[var(--color-accent)] uppercase font-semibold bg-transparent cursor-pointer hover:border-[var(--color-secondary-accent)] hover:text-[var(--color-secondary-accent)] hover:bg-transparent",
        className
      )}
      {...props}
    />
  );
}
