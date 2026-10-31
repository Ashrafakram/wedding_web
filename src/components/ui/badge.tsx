import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-[#163224] text-white',
        gold: 'border-[#C59B27]/40 bg-[#FAF3DE] text-[#9A7516]',
        goldSolid: 'border-[#C59B27] bg-[#C59B27] text-white font-semibold',
        dayPill: 'border-[#B8861B] bg-[#B8861B] text-white font-serif px-3.5 py-0.5 text-xs rounded-full',
        outline: 'border-[#D4C3A3] text-[#163224] bg-white/70',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}
