"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useThemeToggle } from "../hooks/useThemeToggle";
import { ThemeContextType } from "../types/interface/interfaces";

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, toggleTheme } = useThemeToggle();


    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isMounted }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("O tema precisa tar em um contexto");
    }
    return context;
}
