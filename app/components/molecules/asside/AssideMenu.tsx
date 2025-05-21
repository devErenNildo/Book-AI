import { FaHome, FaUpload, FaBook } from "react-icons/fa"
import AssideLinks from "../../atoms/asside/AssideLink";

export default function AssideMenu() {
    return (
        <nav className="flex flex-col gap-3">
            <AssideLinks href="/home" Icon={FaHome} placeholder="home" />

            <AssideLinks href="/upload" Icon={FaUpload} placeholder="Upload" />

            <AssideLinks href="/meuslivros" Icon={FaBook} placeholder="Seus Livros" />
        </nav>
    );
}