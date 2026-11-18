import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sortOptions } from "@/config/options";

interface SortSelectProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SortSelect({ value, onChange }: SortSelectProps) {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger aria-label="Sort results" className="w-52">
                <span className="text-slate-500">Sort:</span>
                <SelectValue />
            </SelectTrigger>
            <SelectContent position="popper" align="end">
                {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
