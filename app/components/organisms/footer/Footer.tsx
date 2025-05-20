import Heading from '../../atoms/heading/Heading';
import ParagraphMin from '../../atoms/paragraph/ParagraphMin';
import LogoText from '../../atoms/logoText/LogoText';

export default function Footer() {
    return (
        <footer className="w-full bg-background text-text py-10 px-6 border-t border-text/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex items-center gap-1">
                    <LogoText />
                </div>
                <ParagraphMin>
                    BookAI se compromete com a segurança e privacidade de todos os conteúdos publicados.
                    Todos os arquivos são tratados com criptografia e protegidos em servidores seguros,
                    garantindo integridade e confiança.
                </ParagraphMin>
            </div>
        </footer>
    );
}
