import { Button } from "@/components/ui/button";
import BusinessCard from "@/components/BusinessCard";
import BusinessFilterPanel from "@/components/BusinessFilterPanel";
import EmptyState from "@/components/EmptyState";
import Layout from "@/components/Layout";
import ListingLayout from "@/components/ListingLayout";
import PageHeader from "@/components/PageHeader";
import ResultSummary from "@/components/ResultSummary";
import SearchBar from "@/components/SearchBar";
import SortSelect from "@/components/SortSelect";
import { searchBusinesses } from "@/assets/data/businesses_for_sale";
import { getCategoryBySlug } from "@/assets/data/categories";
import { useQueryFilters } from "@/hooks/useQueryFilters";
import type { BusinessFilters } from "@/types/business";

export default function Businesses() {
    const { getFilter, setFilter, clearFilters } = useQueryFilters();

    // All filters live in the URL, e.g. /businesses?category=coffee-shops&country=SG
    const filters: BusinessFilters = {
        keyword: getFilter("q"),
        category: getFilter("category"),
        country: getFilter("country"),
        price: getFilter("price"),
        deal: getFilter("deal"),
        verifiedOnly: getFilter("verified") === "1",
        sort: getFilter("sort") || "newest",
    };
    const results = searchBusinesses(filters);
    const category = getCategoryBySlug(filters.category);
    const activeFilterCount = [filters.price, filters.deal, filters.verifiedOnly].filter(Boolean).length;

    return (
        <Layout>
            <PageHeader
                eyebrow="Marketplace"
                title={category ? `${category.name} for Sale` : "Businesses for Sale"}
                description="Established businesses in Singapore and the Philippines, with asking price, revenue and profit on every listing."
            >
                {/* The key resets the search fields when the URL changes from elsewhere (e.g. Clear All). */}
                <SearchBar key={`${filters.keyword}|${filters.category}|${filters.country}`} basePath="/businesses" />
            </PageHeader>

            <ListingLayout
                filters={<BusinessFilterPanel filters={filters} onChange={setFilter} />}
                toolbar={<SortSelect value={filters.sort} onChange={(value) => setFilter("sort", value)} />}
                resultSummary={<ResultSummary count={results.length} singular="Business" plural="Businesses" keyword={filters.keyword} country={filters.country} />}
                resultCount={results.length}
                activeFilterCount={activeFilterCount}
                onClearFilters={clearFilters}
            >
                {results.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2">
                        {results.map((business) => (
                            <BusinessCard key={business.id} business={business} />
                        ))}
                    </div>
                ) : (
                    <EmptyState
                        title="No Businesses Match Your Search"
                        message="Try a different keyword, remove a filter or choose a wider price range."
                        action={<Button onClick={clearFilters}>Clear All Filters</Button>}
                    />
                )}
            </ListingLayout>
        </Layout>
    );
}
