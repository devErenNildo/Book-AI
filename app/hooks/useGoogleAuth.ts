// import { useGoogleLogin } from "@react-oauth/google";
// import { useState } from "react";
// import axios from "axios";
// import { signInWithCredential, GoogleAuthProvider, signOut } from "firebase/auth";
// import { auth } from "../config/firebaseConfig";
// import { GoogleUser } from "../types/interface/interfaces";

// export default function useGoogleAuth() {
//     const [user, setUser] = useState<GoogleUser | null>(null);

//     const login = useGoogleLogin({
//         onSuccess: async (tokenResponse) => {
//             try {
//                 const accessToken = tokenResponse.access_token;

//                 const credential = GoogleAuthProvider.credential(null, accessToken);
//                 await signInWithCredential(auth, credential);

//                 const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
//                     headers: { Authorization: `Bearer ${accessToken}` },
//                 });

//                 const { name, email, picture } = res.data;
//                 setUser({ name, email, picture });
//             } catch (err) {
//                 console.error("Erro ao autenticar:", err);
//             }
//         },
//         onError: (err) => {
//             console.error("Erro no login:", err);
//         },
//     });

//     const logout = async () => {
//         await signOut(auth);
//         setUser(null);
//     };

//     return { user, login, logout };
// }

// hooks/useFirebaseGoogleAuth.ts
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
