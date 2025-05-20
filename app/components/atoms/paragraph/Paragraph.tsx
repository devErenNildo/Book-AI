export default function Paragraph({ children }: { children: React.ReactNode }) {
    return <p className="text-text mt-4 mb-6 max-w-2xl text-center md:text-start">{children}</p>;
}
