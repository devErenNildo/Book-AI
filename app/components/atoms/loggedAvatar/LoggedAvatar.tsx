"use client";

import { useState } from "react";
import {
    FaUser,
    FaCog,
    FaQuestionCircle,
    FaBook,
    FaTh,
    FaSignOutAlt,
} from "react-icons/fa";

interface Props {
    img: string;
    name: string;
    email: string;
    onLogout: () => void;
}

export default function LoggedAvatar({ img, name, email, onLogout }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-full">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 px-2 py-2 w-full hover:bg-white/10 rounded transition"
            >
                <img
                    src={img}
                    alt={name}
                    className="w-8 h-8 rounded-full border border-pink-600"
                />
                <span className="text-sm font-medium text-white">{name}</span>
            </button>

            {/* {open && (
                <div className="absolute left-0 mt-2 w-60 bg-white text-black rounded-lg shadow z-50">
                    <div className="flex items-center gap-2 px-4 py-3 border-b">
                        <img src={img} alt={name} className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="font-semibold text-sm">{name}</p>
                            <p className="text-xs text-gray-500 truncate max-w-[150px]">{email}</p>
                        </div>
                    </div>

                    <ul className="text-sm py-2">
                        <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"><FaUser size={14} /> Conta</li>
                        <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"><FaCog size={14} /> Configurações</li>
                        <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"><FaBook size={14} /> Guia</li>
                        <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"><FaQuestionCircle size={14} /> Ajuda</li>
                    </ul>

                    <div className="flex justify-between items-center px-4 border-t text-xs" />

                    <button
                        onClick={onLogout}
                        className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 text-sm flex items-center gap-2"
                    >
                        <FaSignOutAlt size={14} /> Sign Out
                    </button>
                </div>
            )} */}
        </div>
    );
}
