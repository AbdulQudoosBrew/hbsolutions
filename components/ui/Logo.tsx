import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-[210px] h-[93px]" }: LogoProps) {
  return (
    <Image
      src="/logo.jpg" 
      alt="Haris Building Solutions"
      width={130}
      height={93}
      className={className}
      priority
    />
  );
}
