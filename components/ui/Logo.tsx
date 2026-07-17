import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-[200px] h-[90px]" }: LogoProps) {
  return (
    <Image
      src="/logo.jpg" 
      alt="Haris Building Solutions"
      width={200}
      height={100}
      className={className}
      priority
    />
  );
}
