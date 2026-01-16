import Link from 'next/link'
import { cn } from '@/app/lib/utilis'

type NavItemProps = {
  href: string
  label: string
  isActive?: boolean
}

export const NavItem = ({ href, label, isActive }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'text-gray-400 flex items-center gap-2 font-medium font-mono transition-colors duration-200 hover:text-[var(--accent)]',
        isActive && 'text-[var(--accent)]',
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      <span className="text-primary-300">#</span>
      {label}
    </Link>
  )
}
