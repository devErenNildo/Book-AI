// "use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import ButtonLogin from "../../atoms/buttonLogin/ButtonLogin";
import ThemeToggle from "../../atoms/themetoggle/ThemeToggle";
import NavLink from "../navlinks/NavLinks";
import ButtonNavMenuMobile from "./ButtonNavMenuMobile";


export default function NavMenu() {
    const [open, setOpen] = useState(false);
    const locale = useLocale();

    return (
        <>

            <ButtonNavMenuMobile open={open} setOpen={setOpen} />
            <nav
                className={`flex-col md:flex-row md:flex items-center gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-background md:bg-transparent p-4 md:p-0 transition-all duration-300 z-40 ${open ? "flex" : "hidden"}`}
            >
                <NavLink href={`/${locale}`}>Início</NavLink>
                <NavLink href={`/${locale}/sobre`}>Sobre</NavLink>
                <NavLink href={`/${locale}/contato`}>Contato</NavLink>
                <ButtonLogin />
                <ThemeToggle />
            </nav>
        </>
    );
}