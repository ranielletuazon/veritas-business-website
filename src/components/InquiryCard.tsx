import ContactDialog from "@/components/ContactDialog";
import SaveButton from "@/components/SaveButton";
import { useCurrency } from "@/hooks/useCurrency";
import { siteConfig } from "@/config/site";
import type { CurrencyCode } from "@/types/common";

interface InquiryCardProps {
    priceLabel: string;
    /** Price already formatted in the selected currency. */
    price: string;
    /** Currency the listing was published in, used to explain conversions. */
    listingCurrency: CurrencyCode;
    recipient: string;
    subject: string;
    contactLabel: string;
    points: string[];
}

// Sticky side card on detail pages: price, contact button, save button and reassurance points.
export default function InquiryCard({ priceLabel, price, listingCurrency, recipient, subject, contactLabel, points }: InquiryCardProps) {
    const { currency } = useCurrency();

    return (
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 lg:sticky lg:top-24">
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">{priceLabel}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight break-words text-slate-900">{price}</p>
            {currency !== listingCurrency && (
                <p className="mt-1 text-xs text-slate-500">
                    Listed in {listingCurrency}. Converted at a demo rate of 1 SGD = {siteConfig.phpPerSgd} PHP.
                </p>
            )}

            <div className="mt-6 grid gap-3">
                <ContactDialog recipient={recipient} subject={subject} triggerLabel={contactLabel} triggerClassName="w-full" />
                <SaveButton />
            </div>

            <ul className="mt-6 space-y-2.5 border-t border-slate-200 pt-5">
                {points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
}
