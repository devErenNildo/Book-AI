import { SelectHTMLAttributes } from 'react';

export default function SelectOptionForm(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="mt-1 block w-full rounded-md border border-text/50 bg-background shadow-sm focus:border-blue-500 focus:ring-blue-500 text-text/80 p-3"
    />
  );
}
