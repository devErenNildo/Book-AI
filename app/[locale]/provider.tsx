"use client"

import { ReactNode } from "react"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { AuthProvider } from "../context/AuthContext"
import { ThemeProvider } from "../context/ThemeContext"
import { NextIntlClientProvider } from "next-intl"

export default function Providers({ children, locale }: Readonly<{
    children: ReactNode,
    locale: string
}>) {

    return (
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
            <NextIntlClientProvider locale={locale}>
                <ThemeProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </ThemeProvider>
            </NextIntlClientProvider>
        </GoogleOAuthProvider>
    );
}