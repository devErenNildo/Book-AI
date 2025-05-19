import BookCard from "../book/BookCard";

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverURL: string;
  likes: number;
  tags?: string[];
}

interface BookListProps {
  books: Book[];
}

export default function MyBookList({ books }: BookListProps) {
  return (
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
  );
}
