import HeadingTwo from "../../atoms/heading/HeadingTwo";
import Paragraph from "../../atoms/paragraph/Paragraph";
import ButtonLogin from "../../atoms/buttonLogin/ButtonLogin";

export default function Comunnity() {
    return (
        <div className="flex flex-col items-center">
            <HeadingTwo
                highlight="+ 15 mil usuários "
                text=" ativos no Book AI"
            />
            <Paragraph>
                Nossos usuários adoram usar o Book AI para resumir seus livros e interagir com pessoas que tem o mesmo gosto delas. Nós os insentivamos a compartilhasr suas ideias e desenvolver um entendimento sobre um conteudo que demoraria para chegaer sozinho
            </Paragraph>
            <div className="flex items-center gap-4">
                <ButtonLogin />
            </div>
        </div>
    );
}