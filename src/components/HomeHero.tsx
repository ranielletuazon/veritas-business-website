import { Link } from "react-router-dom";
import SearchBar from "@/components/SearchBar";

interface HomeHeroProps {
    businessCount: number;
    franchiseCount: number;
    advisorCount: number;
}

const popularSearches = [
    { label: "Coffee Shops in Singapore", to: "/businesses?category=coffee-shops&country=SG" },
    { label: "Restaurants in the Philippines", to: "/businesses?category=restaurants&country=PH" },
    { label: "Tech & SaaS", to: "/businesses?category=tech-saas" },
    { label: "Verified Listings", to: "/businesses?verified=1" },
];

export default function HomeHero({ businessCount, franchiseCount, advisorCount }: HomeHeroProps) {
    const stats = [
        { value: businessCount, label: "Businesses for Sale" },
        { value: franchiseCount, label: "Franchise Brands" },
        { value: advisorCount, label: "Advisors & Lenders" },
        { value: 2, label: "Markets Covered" },
    ];

    return (
        <section className="bg-linear-to-b from-slate-950 via-slate-900 to-emerald-950 text-white">
            <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-semibold tracking-widest text-emerald-300 uppercase">Singapore & Philippines Business Marketplace</p>
                    <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                        Buy a Business That Is Already Working
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg text-pretty text-slate-300">
                        Verified businesses for sale, franchises and investment opportunities, with asking price, revenue and profit shown on
                        every listing.
                    </p>
                </div>

                <div className="mx-auto mt-10 max-w-5xl text-slate-900">
                    <SearchBar showTabs />
                </div>

                <p className="mx-auto mt-5 flex max-w-5xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
                    <span className="text-slate-400">Popular:</span>
                    {popularSearches.map((search) => (
                        <Link key={search.label} to={search.to} className="text-slate-200 underline-offset-4 hover:text-white hover:underline">
                            {search.label}
                        </Link>
                    ))}
                </p>

                <dl className="mx-auto mt-14 grid max-w-5xl grid-cols-2 border-t border-white/10 pt-8 sm:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col-reverse py-2 text-center">
                            <dt className="mt-1 text-sm text-slate-400">{stat.label}</dt>
                            <dd className="text-3xl font-semibold tracking-tight">{stat.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
