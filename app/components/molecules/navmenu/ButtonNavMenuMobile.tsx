"use client";
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function ButtonNavMenuMobile({open, setOpen}: {open: boolean, setOpen: (open: boolean) => void}) {

    useEffect(() => {
        setOpen(false);
    }, []);

    return (
        <button
            className="md:hidden text-2xl text-text"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
        >
            {open ? <IoClose /> : <IoMenu />}
        </button>
    );
}