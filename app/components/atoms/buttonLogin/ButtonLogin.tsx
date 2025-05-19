"use client"

import { useAuth } from "@/app/context/AuthContext";

export default function BtnLogin() {
    const { user, login, logout } = useAuth();

    return (
        <div className="p-4">
            {!user ? (
                <button
                    onClick={login}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Entrar com Google
                </button>
            ) : (
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <img src={user.picture} className="w-8 h-8 rounded-full" alt="avatar" />
                        <span>{user.name}</span>
                    </div>
                    <button
                        onClick={logout}
                        className="bg-red-500 text-white px-4 py-1 rounded"
                    >
                        Sair
                    </button>
                </div>
            )}
        </div>
    );
}
