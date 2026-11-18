import { Link, useParams } from "react-router-dom";
import BackLink from "@/components/BackLink";
import CheckList from "@/components/CheckList";
import DetailSection from "@/components/DetailSection";
import FactList from "@/components/FactList";
import FranchiseCard from "@/components/FranchiseCard";
import InquiryCard from "@/components/InquiryCard";
import Layout from "@/components/Layout";
import ListingImage from "@/components/ListingImage";
import PageSection from "@/components/PageSection";
import StatTile from "@/components/StatTile";
import { FeaturedBadge } from "@/components/ListingBadges";
import { getCategoryBySlug } from "@/assets/data/categories";
import { getFranchiseById, getRelatedFranchises } from "@/assets/data/franchises";
import { useCurrency } from "@/hooks/useCurrency";
import { countryName, profitMargin } from "@/lib/format";
import NotFound from "./NotFound";

export default function FranchiseDetail() {
    const { id } = useParams();
    const { formatPrice } = useCurrency();
    const franchise = getFranchiseById(id ?? "");

    if (!franchise) return <NotFound />;

    const category = getCategoryBySlug(franchise.categorySlug);
    const related = getRelatedFranchises(franchise);
    const availableIn = franchise.countries.map(countryName).join(" & ");

    const facts = [
        { label: "Industry", value: category?.name ?? "Other" },
        { label: "Available In", value: availableIn },
        { label: "Investment Cost", value: `${formatPrice(franchise.investmentMin, franchise.currency)} – ${formatPrice(franchise.investmentMax, franchise.currency)}` },
        { label: "Franchise Fee", value: formatPrice(franchise.franchiseFee, franchise.currency, "full") },
        { label: "Royalty", value: `${franchise.royaltyPercent}% of Monthly Sales` },
        { label: "Outlets Open", value: String(franchise.outletsCount) },
        { label: "Brand Founded", value: String(franchise.yearFounded) },
        { label: "Outlet Profit Margin", value: `${profitMargin(franchise.avgOutletRevenue, franchise.avgOutletProfit)}%` },
    ];

    return (
        <Layout>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
                <BackLink to="/franchises" label="All Franchises" />

                {/* Same layout as the business detail page: sticky inquiry card on desktop. */}
                <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-10">
                    <div className="lg:col-start-1">
                        <ListingImage
                            categorySlug={franchise.categorySlug}
                            image={franchise.image}
                            alt={`${franchise.name} franchise`}
                            size="lg"
                            className="aspect-[2/1] w-full rounded-lg sm:aspect-[3/1]"
                        />

                        {franchise.isFeatured && (
                            <div className="mt-6">
                                <FeaturedBadge />
                            </div>
                        )}

                        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{franchise.name}</h1>
                        <p className="mt-2 text-lg text-slate-600">{franchise.tagline}</p>
                        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
                            <Link to={`/franchises?category=${franchise.categorySlug}`} className="font-semibold text-primary hover:underline">
                                {category?.name}
                            </Link>
                            <span aria-hidden="true" className="text-slate-300">|</span>
                            <span>Available in {availableIn}</span>
                            <span aria-hidden="true" className="text-slate-300">|</span>
                            <span>{franchise.outletsCount} Outlets</span>
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                            <StatTile label="Investment Cost" value={formatPrice(franchise.investmentMin, franchise.currency)} note="Starting From" highlight />
                            <StatTile label="Franchise Fee" value={formatPrice(franchise.franchiseFee, franchise.currency)} note="One-Time Payment" />
                            <StatTile label="Outlet Revenue" value={formatPrice(franchise.avgOutletRevenue, franchise.currency)} note="Average per Year" />
                            <StatTile
                                label="Outlet Profit"
                                value={formatPrice(franchise.avgOutletProfit, franchise.currency)}
                                note={`${profitMargin(franchise.avgOutletRevenue, franchise.avgOutletProfit)}% Margin`}
                            />
                        </div>
                    </div>

                    <aside className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <InquiryCard
                            priceLabel="Investment Cost"
                            price={`${formatPrice(franchise.investmentMin, franchise.currency)} – ${formatPrice(franchise.investmentMax, franchise.currency)}`}
                            listingCurrency={franchise.currency}
                            recipient={franchise.name}
                            subject={`${franchise.name} Franchise`}
                            contactLabel="Request Franchise Info"
                            points={["Free information pack", "Talk directly to the franchise team", "No commitment needed"]}
                        />
                    </aside>

                    <div className="space-y-8 lg:col-start-1">
                        <DetailSection title="About This Franchise">
                            <p>{franchise.description}</p>
                        </DetailSection>
                        <DetailSection title="Support Offered">
                            <CheckList items={franchise.supportOffered} />
                        </DetailSection>
                        <DetailSection title="Franchise at a Glance">
                            <FactList facts={facts} />
                        </DetailSection>
                    </div>
                </div>
            </div>

            {related.length > 0 && (
                <PageSection title="Similar Franchises" linkTo="/franchises" linkLabel="View All Franchises" className="border-t border-slate-200 bg-slate-50">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {related.map((item) => (
                            <FranchiseCard key={item.id} franchise={item} />
                        ))}
                    </div>
                </PageSection>
            )}
        </Layout>
    );
}
