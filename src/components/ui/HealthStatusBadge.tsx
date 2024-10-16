import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full text-white font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        normal:
          "bg-palette-blue",
        warning:
          "bg-palette-red", 
      },
      size: {
        small:
          "text-[10px] py-1 px-2 h-5",
        large:
          "text-xs py-1 px-2.5 h-5",
      }
    },
    defaultVariants: {
      variant: "normal",
      size: "small"
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function HealthStatusBadge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { HealthStatusBadge, badgeVariants }
