import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/app/config/firebaseConfig";
import BookCard from "../../molecules/book/BookCard";
export default function ListBooks() {
    const [books, setBooks] = useState<any[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const q = query(collection(db, "pdfs"), orderBy("createdAt", "desc"));
            const snapshot = await getDocs(q);
            const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setBooks(docs);
        };
        fetchBooks();
    }, []);

    return (
        <main className="min-h-screen bg-background text-text p-8 flex flex-col gap-6 items-center">
            <h2 className="text-2xl font-bold mb-4">Livros Disponíveis</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        coverURL={book.coverURL}
                        likes={book.likes}
                        tags={book.tags}
                    />
                ))}
            </div>
        </main>
    );
}