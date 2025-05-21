import { ButtonProps } from "@/app/types/interface/interfaces";



export default function ButtonForm({ loading, children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={loading}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
    >
      {loading ? 'Enviando...' : children}
    </button>
  );
}
