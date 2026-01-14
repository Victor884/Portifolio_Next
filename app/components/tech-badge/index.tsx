type TechBadgeProps = {
  name: string
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className="text-primary-300 bg-primary-900/80 text-sm py-1 px-3 rounded-lg">
      {name}
    </span>
  )
}
