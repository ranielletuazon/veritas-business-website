import { useCurrency } from "@/hooks/useCurrency";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { CurrencyCode } from "@/types/common";

const currencyOptions: CurrencyCode[] = ["SGD", "PHP"];

// Two-option toggle that switches every price on the site between SGD and PHP.
export default function CurrencySwitcher() {
    const { currency, setCurrency } = useCurrency();

    return (
        <div
            role="group"
            aria-label="Display currency"
            title={`Prices are converted at a demo rate of 1 SGD = ${siteConfig.phpPerSgd} PHP`}
            className="inline-flex rounded-md border border-slate-200 bg-slate-50 p-0.5"
        >
            {currencyOptions.map((option) => (
                <button
                    key={option}
                    type="button"
                    aria-pressed={currency === option}
                    onClick={() => setCurrency(option)}
                    className={cn(
                        "rounded px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-ring",
                        currency === option ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200" : "text-slate-500 hover:text-slate-900",
                    )}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
