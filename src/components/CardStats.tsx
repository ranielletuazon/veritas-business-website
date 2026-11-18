interface Stat {
    label: string;
    value: string;
    /** Shows the value in the brand colour (used for profit). */
    highlight?: boolean;
}

interface CardStatsProps {
    stats: Stat[];
}

// Row of three key numbers on listing cards, e.g. Revenue | Profit | Margin.
export default function CardStats({ stats }: CardStatsProps) {
    return (
        <dl className="grid grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-3">
            {stats.map((stat) => (
                <div key={stat.label} className="min-w-0 px-3 first:pl-0 last:pr-0">
                    <dt className="truncate text-xs text-slate-500">{stat.label}</dt>
                    <dd className={stat.highlight ? "mt-1 truncate font-semibold text-emerald-700" : "mt-1 truncate font-semibold text-slate-900"}>
                        {stat.value}
                    </dd>
                </div>
            ))}
        </dl>
    );
}
