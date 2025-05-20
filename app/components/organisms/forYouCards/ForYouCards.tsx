import CardInfo from "../../molecules/cardInfo/CardInfo";
import data from "@/app/data/cardsData.json";
import { PropsCardText } from "@/app/types/interface/interfaces";

export default function ForYouCards() {
    return (
        <section className="flex flex-wrap justify-center gap-6 px-4 pb-8 w-full">
            {
                data.map((card: PropsCardText) => (

                    <CardInfo key={card.id} title={card.title} text={card.text} />
                ))
            }
        </section>
    );
}