import { FaArrowRight } from "react-icons/fa6";

interface IconArrowProps {
  className?: string;
}

export default function IconArrow({ className }: IconArrowProps) {
  return (
    <div
      className={`rounded-full w-10 h-10 flex items-center justify-center bg-[#2A2A2A] transition-all duration-300 ${className}`}
    >
      <FaArrowRight className="text-white transition-transform duration-300 group-hover:rotate-45" />
    </div>
  );
}
