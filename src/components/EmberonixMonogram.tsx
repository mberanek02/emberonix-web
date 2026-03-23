interface EmberonixMonogramProps {
  size?: number;
  className?: string;
}

export function EmberonixMonogram({ size = 32, className = '' }: EmberonixMonogramProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Emberonix monogram"
      role="img"
    >
      {/* Geometric E — three horizontal bars with vertical spine */}
      <line x1="8" y1="5" x2="8" y2="31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="5" x2="24" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="31" x2="24" y2="31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Ember spark — a small diamond / rhombus at the top-right */}
      <path
        d="M28 7 L30 10 L28 13 L26 10 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
