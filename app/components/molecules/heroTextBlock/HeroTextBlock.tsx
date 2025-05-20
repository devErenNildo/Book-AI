import Heading from "../../atoms/heading/Heading";
import Paragraph from "../../atoms/paragraph/Paragraph";
import ButtonLogin from "../../atoms/buttonLogin/ButtonLogin";

export default function HeroTextBlock() {
    return (
        <div className="max-w-xl">
            <Heading text="A nova geração da leitura chegou " highlight="Bem-vindo ao Book AI." />
            <Paragraph>
                Explore um novo jeito de consumir conhecimento com tecnologia de ponta. Book AI combina leitura e inteligência artificial para oferecer uma experiência única, eficiente e personalizada.
            </Paragraph>
            <div className="flex items-center justify-center md:justify-start">
                <ButtonLogin />
            </div>
        </div>
    );
}