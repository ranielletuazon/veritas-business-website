import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AdvisorCard from "@/components/AdvisorCard";
import EmptyState from "@/components/EmptyState";
import FilterSelect from "@/components/FilterSelect";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { getAdvisors } from "@/assets/data/advisors";
import { advisorTypeLabels, countries } from "@/config/options";
import { useQueryFilters } from "@/hooks/useQueryFilters";

const typeOptions = Object.entries(advisorTypeLabels).map(([value, label]) => ({ value, label }));
const countryOptions = countries.map((country) => ({ value: country.code, label: country.name }));

export default function Advisors() {
    const { getFilter, setFilter, clearFilters } = useQueryFilters();
    const type = getFilter("type");
    const country = getFilter("country");
    const results = getAdvisors(type, country);

    return (
        <Layout>
            <PageHeader
                eyebrow="Advisors & Lenders"
                title="Get Expert Help with Your Deal"
                description="Rated business brokers, M&A advisors and acquisition lenders who know the Singapore and Philippine markets."
            />

            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <FilterSelect
                            id="advisor-type"
                            label="Type of Help"
                            options={typeOptions}
                            value={type}
                            onChange={(value) => setFilter("type", value)}
                            allLabel="All Types"
                        />
                        <FilterSelect
                            id="advisor-country"
                            label="Country"
                            options={countryOptions}
                            value={country}
                            onChange={(value) => setFilter("country", value)}
                            allLabel="All Countries"
                        />
                    </div>
                    <p className="text-sm text-slate-600" aria-live="polite">
                        Showing <span className="font-semibold text-slate-900">{results.length}</span>{" "}
                        {results.length === 1 ? "Partner" : "Partners"}, Highest Rated First
                    </p>
                </div>

                <div className="mt-8">
                    {results.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {results.map((advisor) => (
                                <AdvisorCard key={advisor.id} advisor={advisor} />
                            ))}
                        </div>
                    ) : (
                        <EmptyState
                            title="No Partners Match These Filters"
                            message="Try another type or country."
                            action={<Button onClick={clearFilters}>Show All Partners</Button>}
                        />
                    )}
                </div>

                <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:p-8">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">Are You a Broker, Advisor or Lender?</h2>
                        <p className="mt-1 text-slate-600">Join the directory and meet buyers and sellers in both markets.</p>
                    </div>
                    <Button asChild size="lg" variant="outline" className="bg-white">
                        <Link to="/contact-us">Become a Partner</Link>
                    </Button>
                </div>
            </div>
        </Layout>
    );
}
