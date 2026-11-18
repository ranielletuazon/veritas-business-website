import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Call to action band inviting business owners to list.
export default function SellerCta() {
    return (
        <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-lg bg-slate-900 px-6 py-12 sm:px-12 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                    <p className="text-xs font-semibold tracking-widest text-emerald-300 uppercase">For Business Owners</p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Thinking of Selling Your Business?</h2>
                    <p className="mt-3 text-lg text-slate-300">
                        Reach buyers and investors in Singapore and the Philippines, and keep your name private until you're ready.
                    </p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <Button asChild size="lg">
                        <Link to="/sell-your-business">List Your Business</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-slate-600 bg-transparent text-white hover:bg-white/10 hover:text-white">
                        <Link to="/advisors">Talk to an Advisor</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
