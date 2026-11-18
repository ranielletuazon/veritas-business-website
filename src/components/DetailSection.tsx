import type { ReactNode } from "react";

interface DetailSectionProps {
    title: string;
    children: ReactNode;
}

// A titled block of content on detail pages.
export default function DetailSection({ title, children }: DetailSectionProps) {
    return (
        <section className="border-t border-slate-200 pt-8">
            <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
            <div className="mt-4 text-base leading-relaxed text-slate-700">{children}</div>
        </section>
    );
}
