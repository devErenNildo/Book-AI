import { TextAreaProps } from "@/app/types/interface/interfaces";

export default function TextArea(props: TextAreaProps) {
  return (
    <textarea
      {...props}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    />
  );
}
