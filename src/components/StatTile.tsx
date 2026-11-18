import { cn } from "@/lib/utils";

interface StatTileProps {
    label: string;
    value: string;
    /** Small line under the value, e.g. "24% margin". */
    note?: string;
    /** Highlighted tiles use the brand colour (used for the price). */
    highlight?: boolean;
}

// Key number tile shown at the top of detail pages.
export default function StatTile({ label, value, note, highlight }: StatTileProps) {
    return (
        <div className={cn("min-w-0 rounded-lg p-4 sm:p-5", highlight ? "bg-slate-900 text-white" : "border border-slate-200 bg-white")}>
            <p className={cn("text-xs font-medium sm:text-sm", highlight ? "text-slate-300" : "text-slate-500")}>{label}</p>
            <p className={cn("mt-1 text-xl font-bold tracking-tight break-words sm:text-2xl", highlight ? "text-white" : "text-slate-900")}>{value}</p>
            {note && <p className={cn("mt-0.5 text-xs", highlight ? "text-slate-300" : "text-slate-500")}>{note}</p>}
        </div>
    );
}
