"use client"
import MyBooksContainer from "@/app/components/organisms/myBooks/MyBooksContainer";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function MeusLivrosPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/');
    } else {
      setChecking(false)
    }
  }, [user, router]);

  if (checking) {
    return <p>Verificando acesso...</p>; // Tela de carregamento antes de exibir o conteúdo
  }
  return <MyBooksContainer />;
}
