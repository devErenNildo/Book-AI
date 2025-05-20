export default function ParagraphMin({ children }: { children: React.ReactNode }) {
    return <p className="text-sm text-text/70 max-w-md text-center md:text-right">{children}</p>;
}