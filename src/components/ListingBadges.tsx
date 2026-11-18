import { BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { transactionTypeLabels } from "@/config/options";
import type { TransactionType } from "@/types/business";

// Small status badges shown on listing cards and detail pages.

export function VerifiedBadge() {
    return (
        <Badge className="h-6 bg-white px-2 text-emerald-700 shadow-sm ring-1 ring-emerald-600/25">
            <BadgeCheck aria-hidden="true" />
            Verified
        </Badge>
    );
}

export function ConfidentialBadge() {
    return <Badge className="h-6 bg-white px-2 text-slate-700 shadow-sm ring-1 ring-slate-300">Confidential</Badge>;
}

export function FeaturedBadge() {
    return <Badge className="h-6 bg-amber-400 px-2 font-semibold text-amber-950 shadow-sm">Featured</Badge>;
}

interface DealTypeBadgeProps {
    type: TransactionType;
    stakePercent?: number;
}

export function DealTypeBadge({ type, stakePercent }: DealTypeBadgeProps) {
    return (
        <Badge className="h-6 bg-slate-900 px-2 text-white shadow-sm">
            {transactionTypeLabels[type]}
            {stakePercent ? ` · ${stakePercent}%` : ""}
        </Badge>
    );
}
