"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { auth, db } from "@/app/config/firebaseConfig";
import SectionTitle from "../../atoms/MyBooks/SectionTitle";
import MyBookList from "../../molecules/MyBooks/MyBookList";

export default function MyBooksContainer() {
    const [books, setBooks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const q = query(
                    collection(db, "pdfs"),
                    where("userId", "==", user.uid),
                    orderBy("createdAt", "desc")
                );

                const snapshot = await getDocs(q);
                const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setBooks(docs);
            }

            setLoading(false);
        });

        return () => unsub();
    }, []);

    return (
        <main className="w-full min-h-screen bg-background text-text p-8 flex flex-col gap-6 items-center">
            <SectionTitle>Seus livros enviados</SectionTitle>

            {loading ? (
                <p className="text-white/60">Carregando...</p>
            ) : books.length === 0 ? (
                <p className="text-white/60">Você ainda não enviou nenhum livro.</p>
            ) : (
                <MyBookList books={books} />
            )}
        </main>
    );
}
