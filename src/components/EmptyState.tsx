import type { ReactNode } from "react";

interface EmptyStateProps {
    title: string;
    message: string;
    /** Optional button or link, e.g. "Clear All Filters". */
    action?: ReactNode;
}

export default function EmptyState({ title, message, action }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
            <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
            <p className="mt-2 max-w-md text-slate-600">{message}</p>
            {action && <div className="mt-6">{action}</div>}
        </div>
    );
}
