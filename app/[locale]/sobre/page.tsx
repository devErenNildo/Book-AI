import HeroTextHeading from "@/app/components/molecules/heroTextBlock/HeroTextHeading";
import HeroAbout from "@/app/components/organisms/heroSection/HeroAbout";
import img1 from "@/public/leitura.png";
import img2 from "@/public/publishLivro.png";
import HeroTechnology from "@/app/components/organisms/heroSection/HeroTechnology";
import { useTranslations } from "next-intl";

export default function Sobre() {
    const t = useTranslations('SobrePage');
    return (
        <main className="w-full min-h-screen bg-background text-white py-12 pt-32 px-6 flex flex-col items-center">
            {/* Cabeçalho */}
            <HeroTextHeading
                text={t("headingText")}
                subText={t("highlight")}
                paragraph={t("paragraph")}
            />

            <HeroAbout
                color="pink"
                paragraph={t("about1.paragraph")}
                listItem={[
                    t("about1.list.0"),
                    t("about1.list.1"),
                    t("about1.list.2"),
                ]}
                image={img1}
                imageLeft={true}
            >
                {t("about1.title")}
            </HeroAbout>

            <HeroAbout
                color="blue"
                paragraph={t("about2.paragraph")}
                listItem={[
                    t("about2.list.0"),
                    t("about2.list.1"),
                    t("about2.list.2"),
                ]}
                image={img2}
                imageLeft={false}
            >
                {t("about2.title")}
            </HeroAbout>

            {/* Tecnologias */}
            <HeroTechnology
                color="pink"
                paragraph="O projeto foi desenvolvido utilizando ferramentas modernas:"
                listItem={["Next.js", "TypeScript", "Tailwind CSS, Firebase", "Atomic Design"]}
            >{"Tecnologias Utilizadas"}</HeroTechnology>
        </main>

    );
}