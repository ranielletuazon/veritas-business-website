import { useSearchParams } from "react-router-dom";

// Reads and writes list filters in the URL query string (?category=...&country=...),
// so filtered pages can be bookmarked and shared.
export function useQueryFilters() {
    const [searchParams, setSearchParams] = useSearchParams();

    function getFilter(key: string): string {
        return searchParams.get(key) ?? "";
    }

    function setFilter(key: string, value: string) {
        const next = new URLSearchParams(searchParams);
        if (value) {
            next.set(key, value);
        } else {
            next.delete(key);
        }
        setSearchParams(next, { replace: true });
    }

    function clearFilters() {
        setSearchParams({}, { replace: true });
    }

    return { getFilter, setFilter, clearFilters };
}
