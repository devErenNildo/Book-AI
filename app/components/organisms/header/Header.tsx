"use client"

import LogoText from "../../atoms/logoText/LogoText";
import NavMenu from "../../molecules/navmenu/NavMenu";
import { useAuth } from "@/app/context/AuthContext";

export default function Header() {

    const { user } = useAuth();

    if ( user ) return null;

    return (

        <header className="fixed top-0 left-0 w-full py-4 px-6 bg-background shadow flex items-center justify-between z-50">
            <LogoText />
            <NavMenu />
        </header>
    );
}