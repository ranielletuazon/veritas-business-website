interface CheckListProps {
    items: string[];
}

// Simple bullet list used for highlights and franchise support.
export default function CheckList({ items }: CheckListProps) {
    return (
        <ul className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-md border border-slate-200 bg-white p-4">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span className="text-slate-800">{item}</span>
                </li>
            ))}
        </ul>
    );
}
