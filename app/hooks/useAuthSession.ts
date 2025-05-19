// hooks/useAuthSession.ts
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseConfig"; 
import { useRouter } from "next/navigation";

export default function useAuthSession(redirectIfUnauthenticated = true) {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthenticated(!!user);
            setLoading(false);

            if (!user && redirectIfUnauthenticated) {
                router.replace("/login");
            }
        });

        return () => unsubscribe();
    }, [redirectIfUnauthenticated, router]);

    return { isAuthenticated, loading };
}
