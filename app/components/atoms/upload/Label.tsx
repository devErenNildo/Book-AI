interface LabelProps {
    children: string;
}
export default function Label({ children }: LabelProps) {
    return <label className="text-sm">{children}</label>;
}
