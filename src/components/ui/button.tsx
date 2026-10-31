import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27]/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 active:scale-98",
  {
    variants: {
      variant: {
        default: 'bg-[#163224] text-white hover:bg-[#1E4331] shadow-md hover:shadow-lg',
        primaryGreen: 'bg-[#163224] text-white border border-[#2E5A44] hover:bg-[#204532] shadow-sm',
        greenPill: 'bg-[#1C3E2C] text-[#FBF7F0] border border-[#37694D] hover:bg-[#26533B] shadow-sm',
        gold: 'bg-gradient-to-r from-[#C59B27] to-[#B0861A] text-white font-semibold hover:brightness-105 shadow-md',
        goldOutline: 'border border-[#C59B27] text-[#C59B27] hover:bg-[#C59B27]/10',
        creamOutline: 'border border-[#E2D6C0] bg-[#FFFDF9] text-[#163224] hover:bg-[#F5EFE3] shadow-xs',
        greenOutlinePill: 'border border-[#2D5A43] bg-transparent text-[#FBF7F0] hover:bg-white/10 backdrop-blur-xs',
        ghost: 'text-[#163224] hover:bg-[#C59B27]/10',
      },
      size: {
        sm: 'h-8 px-4 text-xs tracking-wider uppercase',
        default: 'h-10 px-6 text-sm',
        lg: 'h-12 px-8 text-base',
        icon: 'size-10 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  if (asChild) {
    return (
      <Slot className={cn(buttonVariants({ variant, size, className }))} {...props}>
        {children}
      </Slot>
    )
  }

  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="animate-spin" />}
      {children}
    </button>
  )
}
