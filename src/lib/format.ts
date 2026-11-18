import { siteConfig } from "@/config/site";
import { countries } from "@/config/options";
import type { CountryCode, CurrencyCode } from "@/types/common";

const currencySymbols: Record<CurrencyCode, string> = {
    SGD: "S$",
    PHP: "₱",
};

/** Converts between SGD and PHP using the demo exchange rate in site config. */
export function convertCurrency(amount: number, from: CurrencyCode, to: CurrencyCode): number {
    if (from === to) return amount;
    return from === "PHP" ? amount / siteConfig.phpPerSgd : amount * siteConfig.phpPerSgd;
}

export function toSgd(amount: number, currency: CurrencyCode): number {
    return convertCurrency(amount, currency, "SGD");
}

/**
 * Formats money in one currency.
 * "compact" gives "S$1.25M" or "₱850K" for cards; "full" gives "S$1,250,000".
 */
export function formatMoney(amount: number, currency: CurrencyCode, style: "compact" | "full" = "compact"): string {
    if (style === "full") {
        return currencySymbols[currency] + Math.round(amount).toLocaleString("en-US");
    }
    const short = new Intl.NumberFormat("en-US", {
        notation: "compact",
        // "S$1.45M" keeps two decimals, but thousands are rounded: "S$884K" rather than "S$883.72K".
        maximumFractionDigits: amount >= 1_000_000 ? 2 : 0,
    }).format(amount);
    return currencySymbols[currency] + short;
}

/** Profit as a percentage of revenue, rounded, e.g. 24. */
export function profitMargin(revenue: number, profit: number): number {
    if (revenue <= 0) return 0;
    return Math.round((profit / revenue) * 100);
}

export function countryName(code: CountryCode): string {
    return countries.find((country) => country.code === code)?.name ?? code;
}

/** Turns "2026-10-02" into "2 Oct 2026". */
export function formatDate(isoDate: string): string {
    return new Date(isoDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}
