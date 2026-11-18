import { priceRanges } from "@/config/options";

/** True when the SGD amount falls inside the chosen price bracket (or no bracket is chosen). */
export function isInPriceRange(amountSgd: number, rangeValue: string): boolean {
    const range = priceRanges.find((item) => item.value === rangeValue);
    if (!range) return true;
    return amountSgd >= range.min && amountSgd < range.max;
}

/** Case-insensitive check that the keyword appears in any of the given texts. */
export function matchesKeyword(texts: string[], keyword: string): boolean {
    const needle = keyword.trim().toLowerCase();
    if (!needle) return true;
    return texts.some((text) => text.toLowerCase().includes(needle));
}
