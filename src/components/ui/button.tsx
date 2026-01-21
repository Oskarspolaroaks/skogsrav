import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Skogsrav Brand Variants - Bold Modern
        corporate:
          "bg-gradient-to-r from-orange via-orange-light to-orange text-white font-semibold tracking-wide hover:shadow-[0_0_20px_hsl(24_95%_53%/0.5)] hover:scale-[1.02] transition-all duration-300 shadow-orange",
        "corporate-outline":
          "border-2 border-orange text-orange font-semibold tracking-wide hover:bg-orange hover:text-white transition-all duration-300",
        "corporate-ghost":
          "text-orange font-semibold tracking-wide hover:bg-orange/10 transition-colors duration-300",
        "corporate-light":
          "bg-cream text-navy-deep font-semibold tracking-wide hover:bg-cream-dark transition-colors duration-300",
        hero:
          "bg-orange text-white font-bold tracking-wide hover:bg-orange-light transition-all duration-300 shadow-orange",
        "hero-outline":
          "border-2 border-white/40 text-white font-semibold tracking-wide hover:bg-white/10 hover:border-white/60 transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
