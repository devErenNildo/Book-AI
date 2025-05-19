import { PropsOrganismAbout } from "@/app/types/interface/interfaces";
import Image from "next/image";
import HeroTextListAbout from "../../molecules/heroTextBlock/HeroTextListAbout";

export default function HeroAbout({ children, color, paragraph, listItem, image, imageLeft }: PropsOrganismAbout) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-center mb-24 pb-16">
            {imageLeft &&
                <Image
                    src={image}
                    alt="Tumbnail de leitura e livros"
                    width={500}
                    height={500}
                    className="rrounded-lg"
                />
            }

            <HeroTextListAbout
                color={color}
                paragraph={paragraph}
                listItem={listItem}
            >{children}</HeroTextListAbout>

            { !imageLeft &&
                <Image
                    src={image}
                    alt="Tumbnail de leitura e livros"
                    width={500}
                    height={500}
                    className="rrounded-lg"
                />
            }
        </section>
    );
}