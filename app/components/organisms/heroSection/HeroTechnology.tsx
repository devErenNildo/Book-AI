import { PropsAboutSection } from "@/app/types/interface/interfaces";
import SubHeading from "../../atoms/heading/SubHeading";
import Paragraph from "../../atoms/paragraph/Paragraph";
import Tags from "../../atoms/book/Tags";

export default function HeroTechnology({ children, color, paragraph, listItem }: PropsAboutSection) {
    return (
        <section className="max-w-4xl text-center mb-12">
            <SubHeading color={color}>
                {children}
            </SubHeading>
            <Paragraph>
                {paragraph}
            </Paragraph>

            {listItem!.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    {listItem!.map((item, index) => (
                        <Tags key={index} tags={item} tag={false} />
                    ))}
                </div>)
            }
        </section>
    );
}