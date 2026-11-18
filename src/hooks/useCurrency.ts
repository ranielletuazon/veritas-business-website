import { useContext } from "react";
import { CurrencyContext } from "@/context/CurrencyContext";
import { convertCurrency, formatMoney } from "@/lib/format";
import type { CurrencyCode } from "@/types/common";

// Gives components the selected currency and a helper that converts and formats any price into it.
export function useCurrency() {
    const { currency, setCurrency } = useContext(CurrencyContext);

    /** Converts an amount from its listing currency into the selected currency and formats it. */
    function formatPrice(amount: number, from: CurrencyCode, style: "compact" | "full" = "compact"): string {
        let converted = convertCurrency(amount, from, currency);
        // Converted amounts are approximate, so round them to the nearest thousand to avoid false precision.
        if (from !== currency) converted = Math.round(converted / 1000) * 1000;
        return formatMoney(converted, currency, style);
    }

    return { currency, setCurrency, formatPrice };
}
