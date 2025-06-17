import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes, ReactNode } from "react"
import { ArrowRight } from "lucide-react"

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  showArrow?: boolean
}

export function CustomButton({
  children,
  variant = "primary",
  size = "md",
  className,
  showArrow = false,
  ...props
}: CustomButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover-scale click-response"

  const variants = {
    primary: "bg-[#96c32d] text-white hover:bg-[#7CB342] focus-visible:ring-[#8BC34A] hover-glow",
    secondary: "bg-[#0EA5E9] text-white hover:bg-[#0284C7] focus-visible:ring-[#0EA5E9] hover-glow",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 hover-lift",
    ghost: "hover:bg-gray-100 text-gray-700 hover-lift",
  }

  const sizes = {
    sm: "h-8 text-sm",
    md: "h-10 text-sm",
    lg: "h-12 text-base",
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], showArrow ? "pr-0" : "px-4", className)}
      {...props}
    >
      <span className="px-4">{children}</span>
      {showArrow && (
        <div
          className={cn(
            "h-full flex items-center justify-center px-4",
            variant === "primary"
              ? "bg-[#96c32d] border-l-2 border-white"
              : variant === "secondary"
                ? "bg-[#0284C7]"
                : variant === "outline"
                  ? "bg-gray-500"
                  : "bg-gray-200",
          )}
        >
          <ArrowRight size={20} />
        </div>
      )}
    </button>
  )
}
