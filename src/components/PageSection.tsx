import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PageSectionProps {
    eyebrow?: string;
    title: string;
    description?: string;
    /** Optional "see all" link shown next to the heading. */
    linkTo?: string;
    linkLabel?: string;
    /** Background or spacing tweaks, e.g. "bg-slate-50". */
    className?: string;
    children: ReactNode;
}

// A full-width page section with a consistent heading and container.
export default function PageSection({ eyebrow, title, description, linkTo, linkLabel, className, children }: PageSectionProps) {
    return (
        <section className={cn("py-16 sm:py-20", className)}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        {eyebrow && <p className="text-xs font-semibold tracking-widest text-primary uppercase">{eyebrow}</p>}
                        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
                        {description && <p className="mt-3 text-base text-slate-600 sm:text-lg">{description}</p>}
                    </div>
                    {linkTo && (
                        <Link
                            to={linkTo}
                            className="shrink-0 rounded-sm text-sm font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                        >
                            {linkLabel} →
                        </Link>
                    )}
                </div>
                {children}
            </div>
        </section>
    );
}
