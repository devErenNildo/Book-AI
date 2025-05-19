import { PropsChildren } from "@/app/types/interface/interfaces";

export default function ListItem({ children }: PropsChildren) {
    return <li className="text-text/70 text-sm list-disc list-inside">{children}</li>;
}