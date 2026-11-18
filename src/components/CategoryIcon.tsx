import {
    Baby,
    Briefcase,
    Car,
    CodeXml,
    Coffee,
    Dumbbell,
    Factory,
    GraduationCap,
    Hotel,
    Leaf,
    PawPrint,
    Scissors,
    ShoppingBag,
    ShoppingCart,
    Sparkles,
    Stethoscope,
    Store,
    Truck,
    UtensilsCrossed,
    WashingMachine,
    Wrench,
    type LucideIcon,
} from "lucide-react";

// Icons that categories.json can refer to by name.
// To use a new icon in the JSON, import it from lucide-react and add it here.
const categoryIcons: Record<string, LucideIcon> = {
    Baby,
    Briefcase,
    Car,
    CodeXml,
    Coffee,
    Dumbbell,
    Factory,
    GraduationCap,
    Hotel,
    Leaf,
    PawPrint,
    Scissors,
    ShoppingBag,
    ShoppingCart,
    Sparkles,
    Stethoscope,
    Store,
    Truck,
    UtensilsCrossed,
    WashingMachine,
    Wrench,
};

interface CategoryIconProps {
    /** Icon name from categories.json, e.g. "Coffee". Unknown names show a briefcase. */
    name: string;
    className?: string;
}

export default function CategoryIcon({ name, className }: CategoryIconProps) {
    const Icon = categoryIcons[name] ?? Briefcase;
    return <Icon className={className} aria-hidden="true" />;
}
