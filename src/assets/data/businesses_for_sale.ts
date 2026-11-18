import type { BusinessFilters, BusinessForSale } from "@/types/business";
import { getCategoryBySlug } from "./categories";
import { isInPriceRange, matchesKeyword } from "@/lib/filters";
import { countryName, toSgd } from "@/lib/format";
import data from "./businesses_for_sale.json";

// All business listing data access goes through this file.
// To switch to a real API later, only these functions need to change.
export const businessesForSale = data as BusinessForSale[];

export function getBusinessById(id: string): BusinessForSale | undefined {
    return businessesForSale.find((business) => business.id === id);
}

export function getBusinessesByCategory(slug: string): BusinessForSale[] {
    return businessesForSale.filter((business) => business.categorySlug === slug);
}

export function getFeaturedBusinesses(limit = 6): BusinessForSale[] {
    return businessesForSale.filter((business) => business.isFeatured).slice(0, limit);
}

/** Other listings in the same category, excluding the one being viewed. */
export function getRelatedBusinesses(business: BusinessForSale, limit = 3): BusinessForSale[] {
    return getBusinessesByCategory(business.categorySlug)
        .filter((item) => item.id !== business.id)
        .slice(0, limit);
}

/** Applies the filters and sort order from the Businesses page. */
export function searchBusinesses(filters: BusinessFilters): BusinessForSale[] {
    const results = businessesForSale.filter((business) => {
        const categoryName = getCategoryBySlug(business.categorySlug)?.name ?? "";
        return (
            matchesKeyword(
                [business.title, business.description, business.city, countryName(business.country), categoryName],
                filters.keyword,
            ) &&
            (filters.category === "" || business.categorySlug === filters.category) &&
            (filters.country === "" || business.country === filters.country) &&
            (filters.deal === "" || business.transactionType === filters.deal) &&
            (!filters.verifiedOnly || business.isVerified) &&
            isInPriceRange(toSgd(business.askingPrice, business.currency), filters.price)
        );
    });

    // Prices are compared in SGD so SG and PH listings sort together correctly.
    return results.sort((a, b) => {
        const priceA = toSgd(a.askingPrice, a.currency);
        const priceB = toSgd(b.askingPrice, b.currency);
        if (filters.sort === "price-asc") return priceA - priceB;
        if (filters.sort === "price-desc") return priceB - priceA;
        return b.listedOn.localeCompare(a.listedOn);
    });
}
