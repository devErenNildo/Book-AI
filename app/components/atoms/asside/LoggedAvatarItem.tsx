import { ReactNode } from "react";

interface Props {
    icon: ReactNode;
    label: string;
    onClick?: () => void;
}

export default function LoggedAvatarItem({ icon, label, onClick }: Props) {
    return (
        <li
            onClick={onClick}
            className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer text-sm"
        >
            {icon} {label}
        </li>
    );
}
