"use client";

import { useState } from "react";
import {
    FaUser,
    FaCog,
    FaQuestionCircle,
    FaSignOutAlt,
} from "react-icons/fa";
import AvatarImage from "../../atoms/user/AvatarImage";
import LoggedAvatarItem from "../../atoms/asside/LoggedAvatarItem";
import UserInfos from "../../molecules/moleculesAsside/UserInfos";


interface Props {
    img: string;
    name: string;
    email: string;
    onLogout: () => void;
}

export default function UserSidebarDropdown({ img, name, email, onLogout }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-full pt-6">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 px-2 py-2 w-full hover:bg-white/10 rounded transition"
            >
                <AvatarImage src={img} alt={name} width={40} height={40}/>
                <span className="text-sm font-medium text-text">{name}</span>
            </button>

            {open && (
                <div className="absolute left-0 mt-2 w-60 bg-white text-black rounded-lg shadow z-50">
                    <UserInfos img={img} name={name} email={email} />

                    <ul className="py-2">
                        <LoggedAvatarItem icon={<FaUser size={14} />} label="Conta" />
                        <LoggedAvatarItem icon={<FaCog size={14} />} label="Configurações" />
                        <LoggedAvatarItem icon={<FaQuestionCircle size={14} />} label="Ajuda" />
                    </ul>

                    <div className="flex justify-between items-center px-4 py-2 border-t text-xs" />

                    <button
                        onClick={onLogout}
                        className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 text-sm flex items-center gap-2"
                    >
                        <FaSignOutAlt size={14} /> Sign Out
                    </button>
                </div>
            )}
        </div>
    );
}
