
export default function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="mt-1 block w-full rounded-md border border-text/40 shadow-sm focus:border-blue-500 focus:ring-blue-500 resize-none text-text/80"
      style={{ minHeight: "120px", maxHeight: "120px" }}
    />
  );
}
