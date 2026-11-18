import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import CardStats from "@/components/CardStats";
import ListingImage from "@/components/ListingImage";
import { FeaturedBadge } from "@/components/ListingBadges";
import { getCategoryBySlug } from "@/assets/data/categories";
import { useCurrency } from "@/hooks/useCurrency";
import { countryName, profitMargin } from "@/lib/format";
import type { Franchise } from "@/types/franchise";

interface FranchiseCardProps {
    franchise: Franchise;
}

// Same layout as BusinessCard so buyers can compare franchises and businesses the same way.
export default function FranchiseCard({ franchise }: FranchiseCardProps) {
    const { formatPrice } = useCurrency();
    const category = getCategoryBySlug(franchise.categorySlug);

    return (
        <article className="group relative flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-200 focus-within:ring-2 focus-within:ring-ring hover:border-slate-300 hover:shadow-lg">
            <div className="relative">
                <ListingImage
                    categorySlug={franchise.categorySlug}
                    image={franchise.image}
                    alt={`${franchise.name} franchise`}
                    className="aspect-[2/1] w-full"
                />
                <div className="absolute top-3 left-3">
                    <Badge className="h-6 bg-slate-900 px-2 text-white shadow-sm">{franchise.outletsCount} Outlets</Badge>
                </div>
                {franchise.isFeatured && (
                    <div className="absolute top-3 right-3">
                        <FeaturedBadge />
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col p-6">
                <p className="truncate text-xs font-semibold tracking-wider text-primary uppercase">{category?.name}</p>
                <h3 className="mt-2 line-clamp-2 min-h-14 text-lg leading-7 font-semibold text-slate-900">
                    <Link to={`/franchises/${franchise.id}`} className="after:absolute after:inset-0 focus:outline-none">
                        {franchise.name}
                        <span className="font-normal text-slate-500"> · {franchise.tagline}</span>
                    </Link>
                </h3>
                <p className="mt-1 truncate text-sm text-slate-500">Available in {franchise.countries.map(countryName).join(" & ")}</p>

                <div className="mt-5">
                    <CardStats
                        stats={[
                            { label: "Outlet Revenue", value: formatPrice(franchise.avgOutletRevenue, franchise.currency) },
                            { label: "Outlet Profit", value: formatPrice(franchise.avgOutletProfit, franchise.currency), highlight: true },
                            { label: "Margin", value: `${profitMargin(franchise.avgOutletRevenue, franchise.avgOutletProfit)}%` },
                        ]}
                    />
                </div>

                <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                    <div className="min-w-0">
                        <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">Investment Cost</p>
                        <p className="truncate text-2xl font-bold tracking-tight text-slate-900">
                            <span className="text-base font-medium text-slate-500">From </span>
                            {formatPrice(franchise.investmentMin, franchise.currency)}
                        </p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-primary group-hover:underline">View Details</span>
                </div>
            </div>
        </article>
    );
}
