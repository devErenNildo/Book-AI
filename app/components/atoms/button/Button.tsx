import React from "react";
import { PropsButton } from "@/app/types/interface/interfaces";

export default function Button({ label, onClick }: PropsButton) {
    return (
        <button
            onClick={onClick}
            className="
               p-[2px] rounded-lg bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]
            "
        >
            <span className="block rounded-md bg-background px-6 py-2 text-sm font-semibold text-text">
                {label}
            </span>
        </button>

    );
}