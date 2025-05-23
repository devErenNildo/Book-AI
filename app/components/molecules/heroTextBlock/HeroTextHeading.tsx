import Heading from "../../atoms/heading/Heading";
import Paragraph from "../../atoms/paragraph/Paragraph";

interface HeroTextHeadingProps {
    text: string;
    subText?: string;
    paragraph?: string;
}

export default function HeroTextHeading({ text, subText, paragraph }: HeroTextHeadingProps) {
    return (
        <section className="max-w-4xl text-center mb-16">
            <Heading text={text} highlight={subText} />
            <Paragraph>
                {paragraph}
            </Paragraph>
        </section>
    );
}