import Heading from "../../atoms/heading/Heading";
import Paragraph from "../../atoms/paragraph/Paragraph";

export default function HeroTextHeading () {
    return (
        <section className="max-w-4xl text-center mb-16">
            <Heading text="Sobre o " highlight="Book-AI" />
            <Paragraph >
                Uma plataforma elegante e moderna para compartilhar livros em PDF,
                interagir em tempo real e promover conhecimento colaborativo.
            </Paragraph>
        </section>
    );
}