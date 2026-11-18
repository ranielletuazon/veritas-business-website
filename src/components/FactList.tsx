interface Fact {
    label: string;
    value: string;
}

interface FactListProps {
    facts: Fact[];
}

// Two-column list of label / value pairs, e.g. "Employees: 18".
export default function FactList({ facts }: FactListProps) {
    return (
        <dl className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {facts.map((fact) => (
                <div key={fact.label} className="flex justify-between gap-4 bg-white px-5 py-3.5 text-sm">
                    <dt className="text-slate-500">{fact.label}</dt>
                    <dd className="text-right font-medium text-slate-900">{fact.value}</dd>
                </div>
            ))}
        </dl>
    );
}
