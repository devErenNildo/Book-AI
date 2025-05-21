import { ErrorProps } from "@/app/types/interface/interfaces";

export default function ErrorMessage({ message }: ErrorProps) {
  if (!message) return null;
  return <p className="text-red-500 text-sm mt-1">{message}</p>;
}
