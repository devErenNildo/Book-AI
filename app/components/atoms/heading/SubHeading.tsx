import { PropsChildren } from "@/app/types/interface/interfaces";

export default function SubHeading ({ children, color }: PropsChildren) {
    return (
        <h2 className={`text-2xl font-semibold ${color === "pink" ? "text-pink" : "text-blue"}`}>   
            {children}
        </h2>
    );
}