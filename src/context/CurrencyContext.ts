import { createContext } from "react";
import type { CurrencyCode } from "@/types/common";

export interface CurrencyContextValue {
    /** The currency every price on the site is shown in. */
    currency: CurrencyCode;
    setCurrency: (currency: CurrencyCode) => void;
}

// Shared by CurrencyProvider (which holds the value) and useCurrency (which reads it).
export const CurrencyContext = createContext<CurrencyContextValue>({
    currency: "SGD",
    setCurrency: () => {},
});
