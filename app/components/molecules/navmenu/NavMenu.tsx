"use client"

import BtnLogin from "../../atoms/buttonLogin/ButtonLogin";
import ThemeToggle from "../../atoms/themetoggle/ThemeToggle";
import NavLink from "../navlinks/NavLinks";

export default function NavMenu() {
    return (
        <nav className="flex justify-center items-center gap-6">
            <NavLink href="/">Início</NavLink>
            <NavLink href="/sobre">Sobre</NavLink>
            <NavLink href="/contato">Contato</NavLink>
            <BtnLogin />
            <ThemeToggle />
        </nav>
    );
}