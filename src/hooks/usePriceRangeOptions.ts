import { priceRanges, type Option } from "@/config/options";
import { useCurrency } from "@/hooks/useCurrency";

// Price filter choices with labels in the selected currency, e.g. "Under S$100K" or "Under ₱4.3M".
export function usePriceRangeOptions(): Option[] {
    const { formatPrice } = useCurrency();

    return priceRanges.map((range) => {
        let label = `${formatPrice(range.min, "SGD")} – ${formatPrice(range.max, "SGD")}`;
        if (range.min === 0) label = `Under ${formatPrice(range.max, "SGD")}`;
        if (range.max === Infinity) label = `Over ${formatPrice(range.min, "SGD")}`;
        return { value: range.value, label };
    });
}
