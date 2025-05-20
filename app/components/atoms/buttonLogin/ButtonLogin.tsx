"use client"

import { useAuth } from "@/app/context/AuthContext";
import Button from "../button/Button";

export default function ButtonLogin() {
    const { user, login, logout } = useAuth();

    return (
        <div className="py-4">
            {!user && (
                <Button
                    onClick={login}
                    label="Entrar com Google"
                >
                </Button>
            )}
        </div>
    );
}
