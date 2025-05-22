"use client"

import React, { useEffect, useState } from "react";
import ListBooks from '@/app/components/organisms/BooksMain/ListBooks';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/app/context/AuthContext";
import Loading from "@/app/components/atoms/loading/Loading";

export default function MediaControlCard() {
  const router = useRouter();
  const { user } = useAuth();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/');
    } else {
      setTimeout(() => setChecking(false), 2000);
    }
  }, [user, router]);

  if (checking) {
    return <Loading />
  }

  return (
    <ListBooks />
  );
}