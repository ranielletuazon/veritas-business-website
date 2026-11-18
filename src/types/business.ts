import type { CountryCode, CurrencyCode } from "./common";

export type TransactionType = "full-sale" | "partial-stake" | "investment";

export interface BusinessForSale {
    id: string;
    /** Teaser headline shown on cards. Never contains the business name. */
    title: string;
    /** Real trading name. Hidden in the UI when isConfidential is true. */
    businessName: string;
    categorySlug: string;
    country: CountryCode;
    city: string;
    currency: CurrencyCode;
    transactionType: TransactionType;
    /** For partial-stake and investment deals: the share of the business on offer. */
    stakePercent?: number;
    askingPrice: number;
    annualRevenue: number;
    annualProfit: number;
    yearsInOperation: number;
    employees: number;
    reasonForSale: string;
    description: string;
    highlights: string[];
    isVerified: boolean;
    isFeatured: boolean;
    isConfidential: boolean;
    /** ISO date (YYYY-MM-DD) used for "newest" sorting. */
    listedOn: string;
    image?: string;
}

/** Filters read from the URL on the Businesses page. Empty string means "any". */
export interface BusinessFilters {
    keyword: string;
    category: string;
    country: string;
    price: string;
    deal: string;
    verifiedOnly: boolean;
    sort: string;
}
