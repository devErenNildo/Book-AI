import { render, screen, waitFor } from "@testing-library/react";
import ListBooks from "./ListBooks";
import mockBooks from "@/app/data/test/mockBooks.json";

jest.mock('@/app/config/firebaseConfig', () => ({
    db: {}
}));

jest.mock('firebase/firestore', () => {
    return {
        collection: jest.fn(() => ({})),
        query: jest.fn(() => ({})),
        orderBy: jest.fn(() => ({})),
        getDocs: jest.fn(() =>
            Promise.resolve({
                docs: mockBooks.map((book) => ({
                    id: book.id,
                    data: () => ({
                        title: book.title,
                        author: book.author,
                        description: book.description,
                        coverURL: book.coverURL,
                        likes: book.likes,
                        tags: book.tags,
                    }),
                })),
            })
        ),
    };
});

describe("Organism ListBooks", () => {
    it("renderiza os livros disponíveis corretamente", async () => {
        render(<ListBooks />);

        expect(screen.getByText('Livros Disponíveis')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Livro 1')).toBeInTheDocument();
            expect(screen.getByText('Livro 2')).toBeInTheDocument();
        });
    })
})
