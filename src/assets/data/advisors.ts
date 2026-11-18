import type { Advisor } from "@/types/advisor";
import data from "./advisors.json";

// All advisor data access goes through this file.
export const advisors = data as Advisor[];

/** Filters advisors by type and country (an empty string means "any"), best rated first. */
export function getAdvisors(type: string, country: string): Advisor[] {
    return advisors
        .filter((advisor) => (type === "" || advisor.type === type) && (country === "" || advisor.country === country))
        .sort((a, b) => b.rating - a.rating);
}
