import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg px-[18px]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 hover:bg-primary-800 text-white disabled:bg-primary-200 disabled:text-primary-100",
        secondary:
          "bg-gray-800 hover:bg-black text-white disabled:bg-gray-300 disabled:text-gray-400",
        tertiary:
          "border-gray-400 bg-white hover:shadow-inner text-gray-600 disabled:border-gray-300 disabled:text-gray-400",
        warning:
          "bg-palette-red hover:bg-palette-red-dark text-white disabled:bg-palette-red-light",
      },
      size: {
        small: "h-10",
        medium: "h-[46px]",
        large: "h-[50px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CustomButton.displayName = "CustomButton";

export { CustomButton, buttonVariants };
