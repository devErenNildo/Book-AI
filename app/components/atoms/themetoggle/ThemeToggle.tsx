'use client';
import { useTheme } from "@/app/context/ThemeContext";
import { PiSunBold, PiMoonFill } from "react-icons/pi";

export default function ThemeToggle() {
  const { theme, toggleTheme, isMounted } = useTheme();
  if (!isMounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={`w-16 h-9 rounded-full relative transition-colors duration-300 ${theme === "dark" ? 'bg-foreground' : 'bg-foreground'
        }`}
    >
      <div
        className={`absolute top-0.5 left-0.5 w-8 h-8 rounded-full flex items-center justify-center text-white bg-blue-800 shadow-md transition-all duration-300 ${theme === "dark" ? 'translate-x-7' : 'translate-x-0'
          }`}
      >
        {theme === "dark" ? <PiMoonFill className="text-white text-sm" /> : <PiSunBold className="text-white text-sm" />}
      </div>

      {/* Ícones de fundo (sem destaque) */}
      <div className="absolute top-1 left-1 w-7 h-7 flex items-center justify-center text-gray-400 pointer-events-none">
        <PiSunBold className="text-sm" />
      </div>
      <div className="absolute top-1 right-1 w-7 h-7 flex items-center justify-center text-gray-400 pointer-events-none">
        <PiMoonFill className="text-sm" />
      </div>
    </button>
  );
}
