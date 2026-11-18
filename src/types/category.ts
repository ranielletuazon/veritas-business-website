export interface Category {
    slug: string;
    name: string;
    /** Name of a lucide icon, e.g. "Coffee". See src/components/CategoryIcon.tsx for the supported list. */
    icon: string;
    description: string;
    /** Colour hue (0-360) used for the placeholder gradient on cards. */
    hue: number;
}
