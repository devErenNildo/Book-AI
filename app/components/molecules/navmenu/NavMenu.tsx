"use client"

import { useState, useEffect } from "react";
import BtnLogin from "../../atoms/buttonLogin/ButtonLogin";
import ThemeToggle from "../../atoms/themetoggle/ThemeToggle";
import NavLink from "../navlinks/NavLinks";
import { IoMenu, IoClose } from "react-icons/io5";

export default function NavMenu() {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, []);

    return (

        <>
            <button
                className="md:hidden text-2xl text-text"
                onClick={() => setOpen(!open)}
                aria-label="Abrir menu"
            >
                {open ? <IoClose /> : <IoMenu />}
            </button>
            <nav
                className={`flex-col md:flex-row md:flex items-center gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-background md:bg-transparent p-4 md:p-0 transition-all duration-300 z-40 ${open ? "flex" : "hidden"}`}
            >
                <NavLink href="/">Início</NavLink>
                <NavLink href="/sobre">Sobre</NavLink>
                <NavLink href="/contato">Contato</NavLink>
                <BtnLogin />
                <ThemeToggle />
            </nav>
        </>
    );
}