import { Button } from "@/components/ui/button";
import EmptyState from "@/components/EmptyState";
import FranchiseCard from "@/components/FranchiseCard";
import FranchiseFilterPanel from "@/components/FranchiseFilterPanel";
import Layout from "@/components/Layout";
import ListingLayout from "@/components/ListingLayout";
import PageHeader from "@/components/PageHeader";
import ResultSummary from "@/components/ResultSummary";
import SearchBar from "@/components/SearchBar";
import SortSelect from "@/components/SortSelect";
import { getCategoryBySlug } from "@/assets/data/categories";
import { searchFranchises } from "@/assets/data/franchises";
import { useQueryFilters } from "@/hooks/useQueryFilters";
import type { FranchiseFilters } from "@/types/franchise";

export default function Franchises() {
    const { getFilter, setFilter, clearFilters } = useQueryFilters();

    // All filters live in the URL, e.g. /franchises?category=coffee-shops&country=PH
    const filters: FranchiseFilters = {
        keyword: getFilter("q"),
        category: getFilter("category"),
        country: getFilter("country"),
        price: getFilter("price"),
        sort: getFilter("sort") || "newest",
    };
    const results = searchFranchises(filters);
    const category = getCategoryBySlug(filters.category);
    const activeFilterCount = filters.price ? 1 : 0;

    return (
        <Layout>
            <PageHeader
                eyebrow="Franchise Opportunities"
                title={category ? `${category.name} Franchises` : "Franchises"}
                description="Start your own outlet with a proven brand. Compare investment cost, outlet profit and support in one place."
            >
                {/* The key resets the search fields when the URL changes from elsewhere (e.g. Clear All). */}
                <SearchBar key={`${filters.keyword}|${filters.category}|${filters.country}`} basePath="/franchises" />
            </PageHeader>

            <ListingLayout
                filters={<FranchiseFilterPanel filters={filters} onChange={setFilter} />}
                toolbar={<SortSelect value={filters.sort} onChange={(value) => setFilter("sort", value)} />}
                resultSummary={<ResultSummary count={results.length} singular="Franchise" plural="Franchises" keyword={filters.keyword} country={filters.country} />}
                resultCount={results.length}
                activeFilterCount={activeFilterCount}
                onClearFilters={clearFilters}
            >
                {results.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2">
                        {results.map((franchise) => (
                            <FranchiseCard key={franchise.id} franchise={franchise} />
                        ))}
                    </div>
                ) : (
                    <EmptyState
                        title="No Franchises Match Your Search"
                        message="Try another keyword, industry or budget."
                        action={<Button onClick={clearFilters}>Clear All Filters</Button>}
                    />
                )}
            </ListingLayout>
        </Layout>
    );
}
