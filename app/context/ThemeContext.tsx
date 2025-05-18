"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useThemeToggle } from "../hooks/useThemeToggle";

const ThemeContext = createContext<any>(null);

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

export function useTheme() {
    return useContext(ThemeContext);
}
