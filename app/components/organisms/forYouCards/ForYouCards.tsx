import CardInfo from "../../molecules/cardInfo/CardInfo";
import data from "@/app/data/cardsData.json";
import { PropsCardText } from "@/app/types/interface/interfaces";

export default function ForYouCards() {
    return (
        <section className="flex space-x-4">
            {
                data.map((card: PropsCardText) => (

                    <CardInfo key={card.id} title={card.title} text={card.text} />
                ))
            }
        </section>
    );
}