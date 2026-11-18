import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Option } from "@/config/options";

interface FilterSelectProps {
    id: string;
    label: string;
    options: Option[];
    /** Selected value. An empty string means the "all" option. */
    value: string;
    onChange: (value: string) => void;
    allLabel: string;
}

// Labelled dropdown filter with an "all" option, used on the advisors page.
export default function FilterSelect({ id, label, options, value, onChange, allLabel }: FilterSelectProps) {
    return (
        <div className="grid gap-1.5">
            <Label htmlFor={id} className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                {label}
            </Label>
            <Select value={value || "all"} onValueChange={(next) => onChange(next === "all" ? "" : next)}>
                <SelectTrigger id={id} className="w-full sm:w-56">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="all">{allLabel}</SelectItem>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
