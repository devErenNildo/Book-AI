import Link from "next/link"
import { PropsNavLink } from "@/app/types/interface/interfaces";

export default function NavLink({ href, children }: PropsNavLink) {
    return (
        <Link href={href} className="text-text font-extrabold hover:text-pink transition-colors">
            {children}
        </Link>
    );
}