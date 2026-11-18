// Labels and choices used by filters, badges and forms.
import type { CountryCode } from "@/types/common";
import type { TransactionType } from "@/types/business";
import type { AdvisorType } from "@/types/advisor";

export interface Option {
    value: string;
    label: string;
}

export const countries: { code: CountryCode; name: string }[] = [
    { code: "SG", name: "Singapore" },
    { code: "PH", name: "Philippines" },
];

/**
 * Price brackets, stored in SGD. Listings in PHP are converted before comparing,
 * and the labels are shown in whichever currency the visitor has selected.
 */
export const priceRanges: { value: string; min: number; max: number }[] = [
    { value: "under-100k", min: 0, max: 100_000 },
    { value: "100k-500k", min: 100_000, max: 500_000 },
    { value: "500k-1m", min: 500_000, max: 1_000_000 },
    { value: "over-1m", min: 1_000_000, max: Infinity },
];

export const sortOptions: Option[] = [
    { value: "newest", label: "Newest First" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
];

export const transactionTypeLabels: Record<TransactionType, string> = {
    "full-sale": "Full Sale",
    "partial-stake": "Partial Stake",
    investment: "Seeking Investment",
};

export const advisorTypeLabels: Record<AdvisorType, string> = {
    broker: "Business Broker",
    "ma-advisor": "M&A Advisor",
    lender: "Lender",
};
