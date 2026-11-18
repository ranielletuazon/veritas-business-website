import type { Franchise, FranchiseFilters } from "@/types/franchise";
import { getCategoryBySlug } from "./categories";
import { isInPriceRange, matchesKeyword } from "@/lib/filters";
import { countryName, toSgd } from "@/lib/format";
import data from "./franchises.json";

// All franchise data access goes through this file.
// To switch to a real API later, only these functions need to change.
export const franchises = data as Franchise[];

export function getFranchiseById(id: string): Franchise | undefined {
    return franchises.find((franchise) => franchise.id === id);
}

export function getFranchisesByCategory(slug: string): Franchise[] {
    return franchises.filter((franchise) => franchise.categorySlug === slug);
}

export function getFeaturedFranchises(limit = 3): Franchise[] {
    return franchises.filter((franchise) => franchise.isFeatured).slice(0, limit);
}

/** Other franchises in the same category first, then any others, excluding the one being viewed. */
export function getRelatedFranchises(franchise: Franchise, limit = 3): Franchise[] {
    const sameCategory = getFranchisesByCategory(franchise.categorySlug);
    const others = franchises.filter((item) => item.categorySlug !== franchise.categorySlug);
    return [...sameCategory, ...others].filter((item) => item.id !== franchise.id).slice(0, limit);
}

/** Applies the filters and sort order from the Franchises page. Price uses the minimum investment. */
export function searchFranchises(filters: FranchiseFilters): Franchise[] {
    const results = franchises.filter((franchise) => {
        const categoryName = getCategoryBySlug(franchise.categorySlug)?.name ?? "";
        return (
            matchesKeyword(
                [franchise.name, franchise.tagline, franchise.description, ...franchise.countries.map(countryName), categoryName],
                filters.keyword,
            ) &&
            (filters.category === "" || franchise.categorySlug === filters.category) &&
            (filters.country === "" || franchise.countries.some((country) => country === filters.country)) &&
            isInPriceRange(toSgd(franchise.investmentMin, franchise.currency), filters.price)
        );
    });

    return results.sort((a, b) => {
        const priceA = toSgd(a.investmentMin, a.currency);
        const priceB = toSgd(b.investmentMin, b.currency);
        if (filters.sort === "price-asc") return priceA - priceB;
        if (filters.sort === "price-desc") return priceB - priceA;
        return b.yearFounded - a.yearFounded;
    });
}
