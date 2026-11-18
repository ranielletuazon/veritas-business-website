import { Link, useParams } from "react-router-dom";
import BackLink from "@/components/BackLink";
import BusinessCard from "@/components/BusinessCard";
import CheckList from "@/components/CheckList";
import DetailSection from "@/components/DetailSection";
import FactList from "@/components/FactList";
import InquiryCard from "@/components/InquiryCard";
import Layout from "@/components/Layout";
import ListingImage from "@/components/ListingImage";
import PageSection from "@/components/PageSection";
import StatTile from "@/components/StatTile";
import { ConfidentialBadge, DealTypeBadge, FeaturedBadge, VerifiedBadge } from "@/components/ListingBadges";
import { getBusinessById, getRelatedBusinesses } from "@/assets/data/businesses_for_sale";
import { getCategoryBySlug } from "@/assets/data/categories";
import { transactionTypeLabels } from "@/config/options";
import { useCurrency } from "@/hooks/useCurrency";
import { countryName, formatDate, profitMargin } from "@/lib/format";
import NotFound from "./NotFound";

export default function BusinessDetail() {
    const { id } = useParams();
    const { formatPrice } = useCurrency();
    const business = getBusinessById(id ?? "");

    if (!business) return <NotFound />;

    const category = getCategoryBySlug(business.categorySlug);
    const related = getRelatedBusinesses(business);
    const location = `${business.city}, ${countryName(business.country)}`;

    const facts = [
        { label: "Industry", value: category?.name ?? "Other" },
        { label: "Location", value: location },
        { label: "Deal Type", value: transactionTypeLabels[business.transactionType] },
        { label: "Stake on Offer", value: `${business.stakePercent ?? 100}%` },
        { label: "Years in Operation", value: `${business.yearsInOperation} Years` },
        { label: "Employees", value: String(business.employees) },
        { label: "Business Name", value: business.isConfidential ? "Shared After First Contact" : business.businessName },
        { label: "Listed On", value: formatDate(business.listedOn) },
    ];

    return (
        <Layout>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
                <BackLink to="/businesses" label="All Businesses for Sale" />

                {/* On mobile the inquiry card sits between the key numbers and the details; on desktop it is a sticky sidebar. */}
                <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-10">
                    <div className="lg:col-start-1">
                        <ListingImage
                            categorySlug={business.categorySlug}
                            image={business.image}
                            alt={category?.name ?? "Business"}
                            size="lg"
                            className="aspect-[2/1] w-full rounded-lg sm:aspect-[3/1]"
                        />

                        <div className="mt-6 flex flex-wrap gap-2">
                            <DealTypeBadge type={business.transactionType} stakePercent={business.stakePercent} />
                            {business.isVerified && <VerifiedBadge />}
                            {business.isConfidential && <ConfidentialBadge />}
                            {business.isFeatured && <FeaturedBadge />}
                        </div>

                        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-slate-900 sm:text-4xl">{business.title}</h1>

                        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
                            <Link to={`/businesses?category=${business.categorySlug}`} className="font-semibold text-primary hover:underline">
                                {category?.name}
                            </Link>
                            <span aria-hidden="true" className="text-slate-300">|</span>
                            <span>{location}</span>
                            <span aria-hidden="true" className="text-slate-300">|</span>
                            <span>Listed {formatDate(business.listedOn)}</span>
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                            <StatTile
                                label="Asking Price"
                                value={formatPrice(business.askingPrice, business.currency)}
                                note={business.stakePercent ? `For a ${business.stakePercent}% Stake` : "For 100% of the Business"}
                                highlight
                            />
                            <StatTile label="Annual Revenue" value={formatPrice(business.annualRevenue, business.currency)} />
                            <StatTile
                                label="Annual Profit"
                                value={formatPrice(business.annualProfit, business.currency)}
                                note={`${profitMargin(business.annualRevenue, business.annualProfit)}% Margin`}
                            />
                            <StatTile label="Established" value={`${business.yearsInOperation} Years`} note={`${business.employees} Employees`} />
                        </div>
                    </div>

                    <aside className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <InquiryCard
                            priceLabel="Asking Price"
                            price={formatPrice(business.askingPrice, business.currency, "full")}
                            listingCurrency={business.currency}
                            recipient="the Seller"
                            subject={business.title}
                            contactLabel="Contact Seller"
                            points={[
                                "Free for buyers to enquire",
                                "The seller replies to you directly",
                                business.isVerified ? "Seller identity and registration checked" : "Verification in progress",
                            ]}
                        />
                    </aside>

                    <div className="space-y-8 lg:col-start-1">
                        <DetailSection title="About This Business">
                            <p>{business.description}</p>
                        </DetailSection>
                        <DetailSection title="Highlights">
                            <CheckList items={business.highlights} />
                        </DetailSection>
                        <DetailSection title="Reason for Sale">
                            <p>{business.reasonForSale}</p>
                        </DetailSection>
                        <DetailSection title="Business at a Glance">
                            <FactList facts={facts} />
                        </DetailSection>
                    </div>
                </div>
            </div>

            {related.length > 0 && (
                <PageSection
                    title={`More ${category?.name ?? "Businesses"} for Sale`}
                    linkTo={`/businesses?category=${business.categorySlug}`}
                    linkLabel="View All in This Industry"
                    className="border-t border-slate-200 bg-slate-50"
                >
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {related.map((item) => (
                            <BusinessCard key={item.id} business={item} />
                        ))}
                    </div>
                </PageSection>
            )}
        </Layout>
    );
}
