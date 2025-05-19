import SubHeading from "../../atoms/heading/SubHeading";
import { PropsAboutSection } from "@/app/types/interface/interfaces";
import Paragraph from "../../atoms/paragraph/Paragraph";
import ListItem from "../../atoms/list/ListItem";

export default function HeroTextListAbout({ children, color, paragraph, listItem }: PropsAboutSection) {
    return (
        <div className="space-y-4">
            <SubHeading color={color}>
                {children}
            </SubHeading>
            <Paragraph>
                {paragraph}
            </Paragraph>

            {listItem!.length > 0 &&
                <ul>
                    {listItem!.map((item, index) => (<ListItem key={index}>{item}</ListItem>))}
                </ul>
            }

        </div>
    );
}