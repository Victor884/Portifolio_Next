import { cn } from '@/app/lib/utilis'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'bg-primary-600 text-gray-50 px-4 py-3 flex items-center gap-2 justify-center rounded-lg font-medium hover:bg-primary-500 transition-colors disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
