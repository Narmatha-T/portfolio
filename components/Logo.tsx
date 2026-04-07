interface LogoProps {
  className?: string;
}

/**
 * Code-style logo — renders as  <NT />
 * Brackets use the site's green accent; text inherits the parent color.
 * Usage:
 *   <Logo className="text-xl text-zinc-900 dark:text-white" />
 */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`font-mono font-bold inline-flex items-baseline tracking-tight select-none ${className}`}
      aria-label="NT — Narmatha Thiyagarajan"
    >
      <span className="text-green-600 dark:text-green-400">&lt;</span>
      <span>NT</span>
      <span className="text-green-600 dark:text-green-400 ml-0.5">/&gt;</span>
    </span>
  );
}
