import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { siteConfig } from "@/config/site";

const footerColumns = [
    {
        title: "Buy",
        links: [
            { label: "Businesses for Sale", to: "/businesses" },
            { label: "Franchises", to: "/franchises" },
            { label: "Verified Listings", to: "/businesses?verified=1" },
        ],
    },
    {
        title: "Markets",
        links: [
            { label: "Singapore", to: "/businesses?country=SG" },
            { label: "Philippines", to: "/businesses?country=PH" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "Sell Your Business", to: "/sell-your-business" },
            { label: "Advisors & Lenders", to: "/advisors" },
            { label: "Contact Us", to: "/contact-us" },
        ],
    },
];

// Worked out once when the app loads, not on every render.
const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
                <div className="lg:col-span-2">
                    <Logo tone="light" />
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{siteConfig.tagline}</p>
                </div>

                {footerColumns.map((column) => (
                    <div key={column.title}>
                        <h2 className="text-xs font-semibold tracking-wider text-white uppercase">{column.title}</h2>
                        <ul className="mt-4 space-y-3">
                            {column.links.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.to} className="text-sm text-slate-400 transition-colors hover:text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="border-t border-slate-800">
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <p>
                        © {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                    <p>
                        Prices are converted at a fixed demo rate of 1 SGD = {siteConfig.phpPerSgd} PHP. {siteConfig.demoNote}
                    </p>
                </div>
            </div>
        </footer>
    );
}
