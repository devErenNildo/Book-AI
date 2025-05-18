import LogoText from "../../atoms/logoText/LogoText";
import NavMenu from "../../molecules/navmenu/NavMenu";

export default function Header() {
    return (

        <header className="w-full py-4 px-6 bg-background shadow flex items-center justify-between">
            <LogoText />
            <NavMenu />
        </header>
    );
}