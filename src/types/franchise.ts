import type { CountryCode, CurrencyCode } from "./common";

export interface Franchise {
    id: string;
    name: string;
    tagline: string;
    categorySlug: string;
    countries: CountryCode[];
    currency: CurrencyCode;
    investmentMin: number;
    investmentMax: number;
    franchiseFee: number;
    royaltyPercent: number;
    outletsCount: number;
    yearFounded: number;
    /** Average yearly sales of one existing outlet. */
    avgOutletRevenue: number;
    /** Average yearly profit of one existing outlet, after royalties. */
    avgOutletProfit: number;
    supportOffered: string[];
    description: string;
    isFeatured: boolean;
    image?: string;
}

/** Filters read from the URL on the Franchises page. Empty string means "any". */
export interface FranchiseFilters {
    keyword: string;
    category: string;
    country: string;
    price: string;
    sort: string;
}
