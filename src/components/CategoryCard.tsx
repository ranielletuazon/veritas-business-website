import { Link } from "react-router-dom";
import CategoryIcon from "@/components/CategoryIcon";
import type { Category } from "@/types/category";

interface CategoryCardProps {
    category: Category;
    /** List page the card links to, with the category filter applied. */
    basePath: "/businesses" | "/franchises";
}

export default function CategoryCard({
    category,
    basePath,
}: CategoryCardProps) {
    return (
        <Link
            to={`${basePath}?category=${category.slug}`}
            className="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
            <span
                className="flex size-11 shrink-0 items-center justify-center rounded-md"
                // Each category has its own hue in categories.json.
                style={{
                    backgroundColor: `oklch(0.96 0.025 ${category.hue})`,
                    color: `oklch(0.42 0.1 ${category.hue})`,
                }}
            >
                <CategoryIcon name={category.icon} className="size-5" />
            </span>
            <span className="min-w-0">
                <span className="block truncate font-semibold text-slate-900 group-hover:text-primary">
                    {category.name}
                </span>
            </span>
        </Link>
    );
}
