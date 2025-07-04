import { LabelProps } from "@/app/types/interface/interfaces";



export default function LabelForm({ children, htmlFor }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className="block text-sm font-medium text-text/50">
            {children}
        </label>
    );
}
