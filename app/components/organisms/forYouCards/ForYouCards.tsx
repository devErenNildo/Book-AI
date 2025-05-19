import CardInfo from "../../molecules/cardInfo/CardInfo";
import data from "@/app/data/cardsData.json";
import { PropsCardText } from "@/app/types/interface/interfaces";

export default function ForYouCards() {
    return (
        <section className="flex space-x-4 w-full justify-center gap-x-10 pb-8">
            {
                data.map((card: PropsCardText) => (

                    <CardInfo key={card.id} title={card.title} text={card.text} />
                ))
            }
        </section>
    );
}