// components/Sidebar.tsx
"use client";

import { useAuth } from "../../../context/AuthContext";
import LogoText from "../../atoms/logoText/LogoText";
import AssideMenu from "../../molecules/asside/AssideMenu";
import ThemeToggle from "../../atoms/themetoggle/ThemeToggle";
import UserSidebarDropdown from "./UserSidebarDropdown";

export default function Asside() {
    const { user, logout } = useAuth();

    if (!user) return null;


    return (
        <aside className="fixed top-0 left-0 h-screen w-72 bg-foreground px-4 py-6 flex flex-col border-r border-gray-800 z-50">
            <LogoText />

            <UserSidebarDropdown img={user.picture} name={user.name} email={user.email} onLogout={logout} />

            <AssideMenu />

            <div className="fixed top-4 right-4  px-6 py-2">
                <ThemeToggle />
            </div>
        </aside>
    );
}
