import type { ReactNode } from "react";

interface PageHeaderProps {
    eyebrow?: string;
    title: string;
    description?: string;
    /** Extra content under the text, e.g. the search bar. */
    children?: ReactNode;
}

// Header band used at the top of list and info pages.
export default function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
    return (
        <section className="border-b border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
                {eyebrow && <p className="text-xs font-semibold tracking-widest text-primary uppercase">{eyebrow}</p>}
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
                {description && <p className="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">{description}</p>}
                {children && <div className="mt-8">{children}</div>}
            </div>
        </section>
    );
}
