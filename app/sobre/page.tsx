import Link from "next/link";
import HeroTextHeading from "../components/molecules/heroTextBlock/HeroTextHeading";
import HeroAbout from "../components/organisms/heroSection/HeroAbout";
import img1 from "@/public/leitura.png";
import img2 from "@/public/publishLivro.png";
import HeroTechnology from "../components/organisms/heroSection/HeroTechnology";

export default function Sobre() {
    return (
        <main className="w-full min-h-screen bg-background text-white py-12 pt-32 px-6 flex flex-col items-center">
            {/* Cabeçalho */}
            <HeroTextHeading />

            <HeroAbout
                color="pink"
                paragraph="Cada livro conta com um espaço exclusivo para discussões em tempo real, onde você pode
                        comentar e interagir com outros leitores enquanto visualiza o conteúdo."
                listItem={["Comentários em tempo real", "Foto e nome de quem comenta", "Atualizações automáticas"]}
                image={img1}
                imageLeft={true}
            >{"Leitura com interação"}</HeroAbout>

            <HeroAbout
                color="blue"
                paragraph="Publique seus livros em PDF com capa, título, autor, descrição e tags. Cada publicação é
                        exibida com elegância na galeria."
                listItem={["Upload de PDF e imagem de capa", "Campos personalizados", "Likes, tags e organização por autor"]}
                image={img2}
                imageLeft={false}
            >{"Publicação com qualidade"}</HeroAbout>

            {/* Tecnologias */}
            <HeroTechnology
                color="pink"
                paragraph="O projeto foi desenvolvido utilizando ferramentas modernas:"
                listItem={["Next.js", "TypeScript", "Tailwind CSS, Firebase", "Atomic Design"]}
            >{"Tecnologias Utilizadas"}</HeroTechnology>

            {/* Créditos */}
            <footer className="text-sm text-white/40 text-center mt-12">
                Desenvolvido por <Link href="https://github.com/seuusuario" className="underline">Seu Nome</Link> • 2024
            </footer>
        </main>

    );
}