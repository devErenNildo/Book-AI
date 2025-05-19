import { useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

interface GoogleUser {
    name: string;
    email: string;
    picture: string;
}

export default function useFirebaseGoogleAuth() {
    const [user, setUser] = useState<GoogleUser | null>(null);

    const login = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const userInfo = result.user;

            setUser({
                name: userInfo.displayName || "Usuário",
                email: userInfo.email || "",
                picture: userInfo.photoURL || "",
            });
        } catch (error) {
            console.error("Erro no login com popup:", error);
        }
    };

    const logout = async () => {
        await signOut(auth);
        setUser(null);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser({
                    name: firebaseUser.displayName || "Usuário",
                    email: firebaseUser.email || "",
                    picture: firebaseUser.photoURL || "",
                });
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return { user, login, logout };
}
