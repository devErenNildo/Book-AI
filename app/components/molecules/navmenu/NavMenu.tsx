"use client"
import Button from "../../atoms/button/Button";
import ThemeToggle from "../../atoms/themetoggle/ThemeToggle";
import NavLink from "../navlinks/NavLinks";

export default function NavMenu() {
    return (
        <nav className="flex justify-center items-center gap-6">
            <NavLink href="/">Início</NavLink>
            <NavLink href="/sobre">Sobre</NavLink>
            <NavLink href="/contato">Contato</NavLink>
            <Button label="Log in" onClick={() => alert("teste")} color="red" />
            <ThemeToggle />
        </nav>
    );
}