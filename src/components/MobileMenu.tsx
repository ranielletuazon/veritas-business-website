import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import CurrencySwitcher from "@/components/CurrencySwitcher";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const mobileLinks = [{ label: "Home", to: "/" }, ...siteConfig.navLinks];

export default function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-6">
                <SheetHeader className="p-0">
                    <SheetTitle className="text-lg">{siteConfig.name}</SheetTitle>
                    <SheetDescription>Businesses and franchises in Singapore and the Philippines.</SheetDescription>
                </SheetHeader>
                <nav aria-label="Mobile" className="flex flex-col border-y border-slate-200 py-2">
                    {mobileLinks.map((link) => (
                        <SheetClose asChild key={link.to}>
                            <NavLink
                                to={link.to}
                                end={link.to === "/"}
                                className={({ isActive }) =>
                                    cn(
                                        "rounded-md px-3 py-3 text-base font-medium transition-colors",
                                        isActive ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                                    )
                                }
                            >
                                {link.label}
                            </NavLink>
                        </SheetClose>
                    ))}
                </nav>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Currency</span>
                    <CurrencySwitcher />
                </div>
                <SheetClose asChild>
                    <Button asChild size="lg">
                        <Link to="/sell-your-business">List Your Business</Link>
                    </Button>
                </SheetClose>
            </SheetContent>
        </Sheet>
    );
}
