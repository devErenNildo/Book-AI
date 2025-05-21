import Link from "next/link";
import { PropsAssideLinks } from "@/app/types/interface/interfaces";

export default function AssideLinks({ href, Icon, placeholder }: PropsAssideLinks) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 hover:bg-purple-600/20 px-3 py-2 rounded transition text-text"
        >
            <Icon color="var(--text)"/>
            {placeholder}
        </Link>
    );
}