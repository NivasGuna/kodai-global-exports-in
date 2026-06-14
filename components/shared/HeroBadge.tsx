interface HeroBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroBadge({ children, className }: HeroBadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full bg-kodai-gold px-5 py-2 text-[11px] font-bold tracking-[0.25em] text-kodai-charcoal uppercase shadow-xl transition-all hover:scale-105 hover:bg-white${className ? ` ${className}` : ''}`}
    >
      {children}
    </span>
  );
}
