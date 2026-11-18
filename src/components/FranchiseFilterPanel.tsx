import RadioFilter from "@/components/RadioFilter";
import { usePriceRangeOptions } from "@/hooks/usePriceRangeOptions";
import type { FranchiseFilters } from "@/types/franchise";

interface FranchiseFilterPanelProps {
    filters: FranchiseFilters;
    /** Called with the URL key and the new value, e.g. ("price", "under-100k"). */
    onChange: (key: string, value: string) => void;
}

export default function FranchiseFilterPanel({ filters, onChange }: FranchiseFilterPanelProps) {
    const priceOptions = usePriceRangeOptions();

    return (
        <RadioFilter
            id="investment"
            legend="Investment Cost"
            options={priceOptions}
            value={filters.price}
            onChange={(value) => onChange("price", value)}
            allLabel="Any Budget"
        />
    );
}
