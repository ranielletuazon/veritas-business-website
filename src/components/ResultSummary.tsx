import { countryName } from "@/lib/format";
import type { CountryCode } from "@/types/common";

interface ResultSummaryProps {
    count: number;
    singular: string;
    plural: string;
    keyword: string;
    /** Country code from the URL, or an empty string. */
    country: string;
}

// "Showing 5 Businesses matching "coffee" in Singapore"
export default function ResultSummary({ count, singular, plural, keyword, country }: ResultSummaryProps) {
    return (
        <p>
            Showing <span className="font-semibold text-slate-900">{count}</span> {count === 1 ? singular : plural}
            {keyword && (
                <>
                    {" "}
                    matching <span className="font-semibold text-slate-900">“{keyword}”</span>
                </>
            )}
            {country && (
                <>
                    {" "}
                    in <span className="font-semibold text-slate-900">{countryName(country as CountryCode)}</span>
                </>
            )}
        </p>
    );
}
