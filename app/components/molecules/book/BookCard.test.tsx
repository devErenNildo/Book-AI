import { render, screen } from '@testing-library/react';
import BookCard from './BookCard';

describe('BookCard (com componentes reais)', () => {
    const mockData = {
        id: 'abc123',
        title: 'O Senhor dos Testes',
        author: 'Jest Tolkien',
        description: 'Um livro sobre aventuras nos reinos do Jest.',
        coverURL: '/img/livro.png',
        likes: 42,
        tags: ['aventura', 'épico']
    };

    it('renderiza todos os dados corretamente', () => {
        render(<BookCard {...mockData} />);

        // Título, autor e descrição (vindos de BookInfos)
        expect(screen.getByText(mockData.title)).toBeInTheDocument();
        expect(screen.getByText(mockData.author)).toBeInTheDocument();
        expect(screen.getByText(mockData.description)).toBeInTheDocument();

        // Tags (vindas de BookTags)
        const tagAventura = screen.getAllByText((text) => text.includes('aventura'))
            .find((el) => el.tagName.toLowerCase() === 'span');
        expect(tagAventura).toBeInTheDocument();

        const tagEpico = screen.getAllByText((text) => text.includes('épico'))
            .find((el) => el.tagName.toLowerCase() === 'span');
        expect(tagEpico).toBeInTheDocument();

        // Likes (vindo de Like)
        expect(screen.getByText(/42/i)).toBeInTheDocument();

        // Imagem — testa se está presente com o src correto
        const img = screen.getByAltText(mockData.title) as HTMLImageElement;
        expect(img).toBeInTheDocument();
        expect(img.src).toContain(mockData.coverURL); // agora testando o valor real

        // Link — deve direcionar para /pdf/:id/chat
        const link = screen.getByRole('link') as HTMLAnchorElement;
        expect(link.href).toContain(`/pdf/${mockData.id}/chat`);
    });
});