import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

interface LogoProps {
    /** Use "light" on dark backgrounds such as the footer. */
    tone?: "dark" | "light";
}

export default function Logo({ tone = "dark" }: LogoProps) {
    return (
        <Link
            to="/"
            className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
            <span className="relative flex size-9 items-center justify-center rounded-md bg-primary text-lg font-bold text-white shadow-sm">
                {siteConfig.name.charAt(0)}
                <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-amber-400 ring-2 ring-white" />
            </span>
            <span className={tone === "dark" ? "text-lg font-semibold tracking-tight text-slate-900" : "text-lg font-semibold tracking-tight text-white"}>
                {siteConfig.name}
            </span>
        </Link>
    );
}
