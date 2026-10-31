import * as React from 'react'
import { cn } from '@/lib/utils'

export function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-xl border border-[#DCD0BA] bg-white px-3 py-2 text-sm text-[#163224] placeholder:text-[#A09585] focus:border-[#C59B27] focus:outline-hidden focus:ring-2 focus:ring-[#C59B27]/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all',
        className
      )}
      {...props}
    />
  )
}
