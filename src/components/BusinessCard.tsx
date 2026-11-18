import { Link } from "react-router-dom";
import CardStats from "@/components/CardStats";
import ListingImage from "@/components/ListingImage";
import { ConfidentialBadge, DealTypeBadge, FeaturedBadge, VerifiedBadge } from "@/components/ListingBadges";
import { getCategoryBySlug } from "@/assets/data/categories";
import { useCurrency } from "@/hooks/useCurrency";
import { countryName, profitMargin } from "@/lib/format";
import type { BusinessForSale } from "@/types/business";

interface BusinessCardProps {
    business: BusinessForSale;
}

export default function BusinessCard({ business }: BusinessCardProps) {
    const { formatPrice } = useCurrency();
    const category = getCategoryBySlug(business.categorySlug);

    return (
        <article className="group relative flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-200 focus-within:ring-2 focus-within:ring-ring hover:border-slate-300 hover:shadow-lg">
            {/* All badges sit on the image so every card body lines up the same way. */}
            <div className="relative">
                <ListingImage
                    categorySlug={business.categorySlug}
                    image={business.image}
                    alt={category?.name ?? "Business"}
                    className="aspect-[2/1] w-full"
                />
                <div className="absolute top-3 left-3">
                    <DealTypeBadge type={business.transactionType} stakePercent={business.stakePercent} />
                </div>
                {business.isFeatured && (
                    <div className="absolute top-3 right-3">
                        <FeaturedBadge />
                    </div>
                )}
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                    {business.isVerified && <VerifiedBadge />}
                    {business.isConfidential && <ConfidentialBadge />}
                </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <p className="truncate text-xs font-semibold tracking-wider text-primary uppercase">{category?.name}</p>
                <h3 className="mt-2 line-clamp-2 min-h-14 text-lg leading-7 font-semibold text-slate-900">
                    {/* The ::after overlay makes the whole card clickable with a single link. */}
                    <Link to={`/businesses/${business.id}`} className="after:absolute after:inset-0 focus:outline-none">
                        {business.title}
                    </Link>
                </h3>
                <p className="mt-1 truncate text-sm text-slate-500">
                    {business.city}, {countryName(business.country)}
                </p>

                <div className="mt-5">
                    <CardStats
                        stats={[
                            { label: "Revenue", value: formatPrice(business.annualRevenue, business.currency) },
                            { label: "Profit", value: formatPrice(business.annualProfit, business.currency), highlight: true },
                            { label: "Margin", value: `${profitMargin(business.annualRevenue, business.annualProfit)}%` },
                        ]}
                    />
                </div>

                <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                    <div className="min-w-0">
                        <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">Asking Price</p>
                        <p className="truncate text-2xl font-bold tracking-tight text-slate-900">{formatPrice(business.askingPrice, business.currency)}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-primary group-hover:underline">View Details</span>
                </div>
            </div>
        </article>
    );
}
