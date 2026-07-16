interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`block font-light uppercase leading-tight tracking-[0.2em] text-white ${className}`}
    >
      <span className="block text-sm sm:text-base">Haris Building</span>
      <span className="block text-xs tracking-[0.35em] text-white/80 sm:text-sm">
        Solutions
      </span>
    </span>
  );
}
