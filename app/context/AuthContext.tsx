"use client"

import { createContext, ReactNode, useContext } from 'react';
import useFirebaseGoogleAuth from '../hooks/useGoogleAuth';

const AuthContext = createContext<ReturnType<typeof useFirebaseGoogleAuth > | null>(null);

export function AuthProvider({children}: { children: ReactNode}) {
    const auth = useFirebaseGoogleAuth();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth () {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth precisa estar dentro de AuthProvider");
  return context;
};
