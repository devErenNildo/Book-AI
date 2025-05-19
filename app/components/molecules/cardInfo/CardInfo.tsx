'use client'
import IconArrow from "../../atoms/iconArrow/IconArrow";
import CardArrow from "../cardArrow/CardArrow";
import CardText from "../cardText/CardText";
import { PropsCardText } from "@/app/types/interface/interfaces";

export default function CardInfo({ title, text}: PropsCardText) {
    return (
        <div
            className="
                group p-6 max-w-sm bg-foreground text-text rounded-xl border border-zinc-700
                hover:border-purple-500 hover:shadow-[0_0_15px_2px_rgba(168,85,247,0.4)]
                transition-all duration-300 relative
            "
        >
           <CardText title={title} text={text}/>

            <CardArrow />
        </div>
    );
}
