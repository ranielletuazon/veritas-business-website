import type { CountryCode } from "./common";

export type AdvisorType = "broker" | "ma-advisor" | "lender";

export interface Advisor {
    id: string;
    name: string;
    type: AdvisorType;
    country: CountryCode;
    city: string;
    specialties: string[];
    dealsClosed: number;
    yearsExperience: number;
    /** Average client rating out of 5. */
    rating: number;
    reviewCount: number;
    description: string;
}
