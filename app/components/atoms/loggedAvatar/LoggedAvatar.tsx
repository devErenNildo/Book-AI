"use client";

import { useState } from "react";

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
        </div>
    );
}
