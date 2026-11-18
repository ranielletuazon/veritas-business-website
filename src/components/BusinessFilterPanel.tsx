import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import RadioFilter from "@/components/RadioFilter";
import { transactionTypeLabels } from "@/config/options";
import { usePriceRangeOptions } from "@/hooks/usePriceRangeOptions";
import type { BusinessFilters } from "@/types/business";

interface BusinessFilterPanelProps {
    filters: BusinessFilters;
    /** Called with the URL key and the new value, e.g. ("price", "under-100k"). */
    onChange: (key: string, value: string) => void;
}

const dealOptions = Object.entries(transactionTypeLabels).map(([value, label]) => ({ value, label }));

export default function BusinessFilterPanel({ filters, onChange }: BusinessFilterPanelProps) {
    const priceOptions = usePriceRangeOptions();

    return (
        <>
            <RadioFilter
                id="price"
                legend="Asking Price"
                options={priceOptions}
                value={filters.price}
                onChange={(value) => onChange("price", value)}
                allLabel="Any Price"
            />
            <RadioFilter
                id="deal"
                legend="Deal Type"
                options={dealOptions}
                value={filters.deal}
                onChange={(value) => onChange("deal", value)}
                allLabel="All Deal Types"
            />
            <div className="border-t border-slate-200 pt-5">
                <p className="mb-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">Trust</p>
                <Label htmlFor="verified-only" className="flex cursor-pointer items-center gap-3 px-2 text-sm font-normal text-slate-700">
                    <Checkbox
                        id="verified-only"
                        checked={filters.verifiedOnly}
                        onCheckedChange={(checked) => onChange("verified", checked === true ? "1" : "")}
                    />
                    Verified Listings Only
                </Label>
            </div>
        </>
    );
}
