import { useState, type FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories } from "@/assets/data/categories";
import { countries } from "@/config/options";
import { cn } from "@/lib/utils";

type ListPath = "/businesses" | "/franchises";

interface SearchBarProps {
    /** List page the search goes to. */
    basePath?: ListPath;
    /** Show the "Businesses for Sale / Franchises" tabs (used on the home page). */
    showTabs?: boolean;
}

const tabs: { path: ListPath; label: string }[] = [
    { path: "/businesses", label: "Businesses for Sale" },
    { path: "/franchises", label: "Franchises" },
];

/** Sets a query parameter, or removes it when the value is empty. */
function setParam(params: URLSearchParams, key: string, value: string) {
    if (value) {
        params.set(key, value);
    } else {
        params.delete(key);
    }
}

// Keyword, industry and country search. Results only change when the visitor presses Search.
export default function SearchBar({ basePath = "/businesses", showTabs = false }: SearchBarProps) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [path, setPath] = useState<ListPath>(basePath);
    const [keyword, setKeyword] = useState(searchParams.get("q") ?? "");
    const [category, setCategory] = useState(searchParams.get("category") || "all");
    const [country, setCountry] = useState(searchParams.get("country") || "all");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Keep any other filters already in the URL (price, sort...) and replace the three search fields.
        const params = new URLSearchParams(searchParams);
        setParam(params, "q", keyword.trim());
        setParam(params, "category", category === "all" ? "" : category);
        setParam(params, "country", country === "all" ? "" : country);
        const query = params.toString();
        navigate(query ? `${path}?${query}` : path);
    }

    return (
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
            {showTabs && (
                <div className="flex border-b border-slate-200" role="group" aria-label="What are you looking for?">
                    {tabs.map((tab) => (
                        <button
                            key={tab.path}
                            type="button"
                            aria-pressed={path === tab.path}
                            onClick={() => setPath(tab.path)}
                            className={cn(
                                "-mb-px border-b-2 px-5 py-3.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
                                path === tab.path ? "border-primary text-slate-900" : "border-transparent text-slate-500 hover:text-slate-900",
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-4 p-4 text-left sm:p-5 md:grid-cols-[minmax(0,1fr)_14rem_11rem_auto] md:items-end">
                <div className="grid gap-1.5">
                    <Label htmlFor="search-keyword" className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                        Keyword
                    </Label>
                    <Input
                        id="search-keyword"
                        type="search"
                        value={keyword}
                        onChange={(event) => setKeyword(event.target.value)}
                        placeholder="Business type, city or country"
                        className="h-12 text-base md:text-base"
                    />
                </div>
                <div className="grid gap-1.5">
                    <Label htmlFor="search-category" className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                        Industry
                    </Label>
                    <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger id="search-category" className="h-12! w-full text-base">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="all">All Industries</SelectItem>
                            {categories.map((item) => (
                                <SelectItem key={item.slug} value={item.slug}>
                                    {item.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-1.5">
                    <Label htmlFor="search-country" className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                        Country
                    </Label>
                    <Select value={country} onValueChange={setCountry}>
                        <SelectTrigger id="search-country" className="h-12! w-full text-base">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="all">All Countries</SelectItem>
                            {countries.map((item) => (
                                <SelectItem key={item.code} value={item.code}>
                                    {item.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Button type="submit" size="lg" className="h-12 px-8">
                    Search
                </Button>
            </form>
        </div>
    );
}
