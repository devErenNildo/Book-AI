
export default function InputForm(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="mt-1 block w-full rounded-md border border-text/40 p-1 text-text/80"
    />
  );
}
