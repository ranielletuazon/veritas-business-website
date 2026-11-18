import type { Category } from "@/types/category";
import data from "./categories.json";

// All category data access goes through this file.
// To switch to a real API later, only these functions need to change.
export const categories: Category[] = data;

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((category) => category.slug === slug);
}
