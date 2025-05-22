import { InputProps } from "@/app/types/interface/interfaces";



export default function InputForm(props: InputProps) {
  return (
    <input
      {...props}
      className="mt-1 block w-full rounded-md border border-text/40 p-1 text-text/80"
    />
  );
}
