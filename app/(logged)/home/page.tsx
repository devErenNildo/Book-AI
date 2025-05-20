"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/app/context/AuthContext";
import ListBooks from "@/app/components/organisms/BooksMain/ListBooks";

export default function Home() {
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
    return <p>Verificando acesso...</p>;
  }
  return (
    <main className="ml-72">
      <ListBooks />
    </main>
  );
}