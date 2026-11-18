import { useState, type ReactNode } from "react";
import { CurrencyContext } from "@/context/CurrencyContext";
import type { CurrencyCode } from "@/types/common";

interface CurrencyProviderProps {
    children: ReactNode;
}

// Holds the visitor's chosen display currency for the whole app (in memory only).
export default function CurrencyProvider({ children }: CurrencyProviderProps) {
    const [currency, setCurrency] = useState<CurrencyCode>("SGD");

    return <CurrencyContext.Provider value={{ currency, setCurrency }}>{children}</CurrencyContext.Provider>;
}
