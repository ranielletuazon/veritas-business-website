import CategoryIcon from "@/components/CategoryIcon";
import { getCategoryBySlug } from "@/assets/data/categories";
import { cn } from "@/lib/utils";

interface ListingImageProps {
    categorySlug: string;
    /** Real photo URL. When missing, a soft gradient with the category icon is shown instead. */
    image?: string;
    alt: string;
    size?: "md" | "lg";
    className?: string;
}

export default function ListingImage({ categorySlug, image, alt, size = "md", className }: ListingImageProps) {
    if (image) {
        return <img src={image} alt={alt} className={cn("object-cover", className)} />;
    }

    const category = getCategoryBySlug(categorySlug);
    const hue = category?.hue ?? 160;

    return (
        <div
            role="img"
            aria-label={alt}
            className={cn("flex items-center justify-center", className)}
            // The colours come from the category's hue in categories.json, so they are set inline.
            style={{ backgroundImage: `linear-gradient(135deg, oklch(0.975 0.015 ${hue}), oklch(0.91 0.045 ${hue + 20}))` }}
        >
            <div
                className={cn(
                    "flex items-center justify-center rounded-lg bg-white/80 shadow-sm ring-1 ring-slate-900/5",
                    size === "lg" ? "size-24" : "size-16",
                )}
                style={{ color: `oklch(0.42 0.1 ${hue})` }}
            >
                <CategoryIcon name={category?.icon ?? ""} className={size === "lg" ? "size-11" : "size-7"} />
            </div>
        </div>
    );
}
