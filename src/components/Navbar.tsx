import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CurrencySwitcher from "@/components/CurrencySwitcher";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
                <Logo />

                <nav aria-label="Main" className="hidden h-full items-stretch gap-6 lg:flex">
                    {siteConfig.navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                cn(
                                    "flex items-center border-b-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-ring",
                                    isActive ? "border-primary text-slate-900" : "border-transparent text-slate-600 hover:text-slate-900",
                                )
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <div className="hidden sm:block">
                        <CurrencySwitcher />
                    </div>
                    <Button asChild className="hidden sm:inline-flex">
                        <Link to="/sell-your-business">List Your Business</Link>
                    </Button>
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
