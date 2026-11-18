import ContactDialog from "@/components/ContactDialog";
import StarRating from "@/components/StarRating";
import { advisorTypeLabels } from "@/config/options";
import { countryName } from "@/lib/format";
import type { Advisor } from "@/types/advisor";

interface AdvisorCardProps {
    advisor: Advisor;
}

/** First letters of the first two words, e.g. "Harbourline Business Partners" -> "HB". */
function getInitials(name: string): string {
    return name
        .split(" ")
        .slice(0, 2)
        .map((word) => word.charAt(0))
        .join("");
}

export default function AdvisorCard({ advisor }: AdvisorCardProps) {
    return (
        <article className="flex min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md">
            <div className="flex items-center gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-md bg-slate-900 text-lg font-semibold text-white" aria-hidden="true">
                    {getInitials(advisor.name)}
                </div>
                <div className="min-w-0">
                    <p className="truncate text-xs font-semibold tracking-wider text-primary uppercase">{advisorTypeLabels[advisor.type]}</p>
                    <h3 className="mt-0.5 truncate text-lg font-semibold text-slate-900">{advisor.name}</h3>
                    <p className="truncate text-sm text-slate-500">
                        {/* Avoid "Singapore, Singapore" when the city and country share a name. */}
                        {advisor.city === countryName(advisor.country) ? advisor.city : `${advisor.city}, ${countryName(advisor.country)}`}
                    </p>
                </div>
            </div>

            <div className="mt-4">
                <StarRating rating={advisor.rating} reviewCount={advisor.reviewCount} />
            </div>

            <p className="mt-4 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-slate-600">{advisor.description}</p>

            <ul className="mt-4 flex h-6 flex-wrap gap-1.5 overflow-hidden" aria-label="Specialties">
                {advisor.specialties.map((specialty) => (
                    <li key={specialty} className="rounded-sm bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                        {specialty}
                    </li>
                ))}
            </ul>

            <dl className="mt-5 grid grid-cols-2 divide-x divide-slate-200 border-y border-slate-200 py-3">
                <div className="pr-3">
                    <dt className="text-xs text-slate-500">Deals Closed</dt>
                    <dd className="mt-1 font-semibold text-slate-900">{advisor.dealsClosed}</dd>
                </div>
                <div className="pl-3">
                    <dt className="text-xs text-slate-500">Experience</dt>
                    <dd className="mt-1 font-semibold text-slate-900">{advisor.yearsExperience} Years</dd>
                </div>
            </dl>

            <div className="mt-auto pt-5">
                <ContactDialog
                    recipient={advisor.name}
                    subject={`Working with ${advisor.name}`}
                    triggerLabel={advisor.type === "lender" ? "Contact Lender" : "Contact Advisor"}
                    triggerVariant="outline"
                    triggerSize="default"
                    triggerClassName="w-full"
                />
            </div>
        </article>
    );
}
