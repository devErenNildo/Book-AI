interface SectionTitleProps {
    children: string;
}

export default function SectionTitle({ children }: SectionTitleProps) {
    return <h2 className="text-2xl font-bold mb-4">{children}</h2>;
}
