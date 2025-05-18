"use client"
import Image from "next/image";
import logo from "@/public/banner1.png";
import logoDark from "@/public/banner1-dark.png";
import { useTheme } from "@/app/context/ThemeContext";

export default function HeroBanner() {
    const { theme, isMounted } = useTheme();
    if (!isMounted) return null;

    return (
        <Image
            src={theme === "dark" ? logoDark : logo}
            alt="Logo de um livro com recursos de inteligencia artificial"
            width={400}
        />
    );
}