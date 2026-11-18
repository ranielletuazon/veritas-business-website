import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface ListingLayoutProps {
    /** The filter controls. Shown in a sidebar on desktop and in a slide-over panel on mobile. */
    filters: ReactNode;
    /** Controls shown next to the result count, e.g. a sort dropdown. */
    toolbar: ReactNode;
    /** Sentence describing the results, e.g. "15 Businesses for Sale". */
    resultSummary: ReactNode;
    resultCount: number;
    activeFilterCount: number;
    onClearFilters: () => void;
    children: ReactNode;
}

// Shared two-column layout for listing pages: filters on the left, results on the right.
export default function ListingLayout({
    filters,
    toolbar,
    resultSummary,
    resultCount,
    activeFilterCount,
    onClearFilters,
    children,
}: ListingLayoutProps) {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10 lg:px-8 lg:py-10">
            <aside className="hidden lg:block" aria-label="Filters">
                <div className="sticky top-24 rounded-lg border border-slate-200 bg-white p-5">
                    <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
                        <h2 className="font-semibold text-slate-900">Refine Results</h2>
                        {activeFilterCount > 0 && (
                            <button type="button" onClick={onClearFilters} className="text-sm font-medium text-primary hover:underline">
                                Clear All
                            </button>
                        )}
                    </div>
                    <div className="space-y-5">{filters}</div>
                </div>
            </aside>

            <div>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
                    <div className="text-sm text-slate-600" aria-live="polite">
                        {resultSummary}
                    </div>
                    <div className="flex items-center gap-2">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" className="lg:hidden">
                                    Filters
                                    {activeFilterCount > 0 && (
                                        <span className="rounded-sm bg-primary px-1.5 text-xs text-white">{activeFilterCount}</span>
                                    )}
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full max-w-sm overflow-y-auto p-6">
                                <SheetHeader className="p-0">
                                    <SheetTitle className="text-lg">Refine Results</SheetTitle>
                                    <SheetDescription>Changes apply instantly.</SheetDescription>
                                </SheetHeader>
                                <div className="space-y-5">{filters}</div>
                                <SheetFooter className="mt-auto flex-row gap-2 p-0">
                                    <Button variant="outline" className="flex-1" onClick={onClearFilters}>
                                        Clear All
                                    </Button>
                                    <SheetClose asChild>
                                        <Button className="flex-1">Show {resultCount} Results</Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                        {toolbar}
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}
