import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
    /** Rating out of 5, e.g. 4.8. */
    rating: number;
    reviewCount: number;
}

// Five stars plus the numeric rating and review count, e.g. ★★★★★ 4.8 (126 reviews).
export default function StarRating({ rating, reviewCount }: StarRatingProps) {
    const filledStars = Math.round(rating);

    return (
        <div className="flex items-center gap-2">
            <div className="flex" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={cn("size-4", star <= filledStars ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200")} />
                ))}
            </div>
            <p className="text-sm">
                <span className="sr-only">Rated </span>
                <span className="font-semibold text-slate-900">{rating.toFixed(1)}</span>
                <span className="sr-only"> out of 5</span>
                <span className="text-slate-500"> ({reviewCount} reviews)</span>
            </p>
        </div>
    );
}
