import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { Option } from "@/config/options";

interface RadioFilterProps {
    /** Unique prefix for the radio ids, e.g. "price". */
    id: string;
    legend: string;
    options: Option[];
    /** Selected value. An empty string means the "all" option. */
    value: string;
    onChange: (value: string) => void;
    allLabel: string;
}

// A titled list of radio buttons where one option can be chosen, plus an "all" option.
export default function RadioFilter({ id, legend, options, value, onChange, allLabel }: RadioFilterProps) {
    // Radix radio groups need a non-empty value, so "all" stands for "no filter".
    const allOptions = [{ value: "all", label: allLabel }, ...options];

    return (
        <div className="border-t border-slate-200 pt-5 first:border-t-0 first:pt-0">
            <p id={`${id}-label`} className="mb-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                {legend}
            </p>
            <RadioGroup
                value={value || "all"}
                onValueChange={(next) => onChange(next === "all" ? "" : next)}
                aria-labelledby={`${id}-label`}
                className="gap-0.5"
            >
                {allOptions.map((option) => (
                    <Label
                        key={option.value}
                        htmlFor={`${id}-${option.value}`}
                        className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-sm font-normal text-slate-700 transition-colors hover:bg-slate-50 has-[[data-state=checked]]:font-semibold has-[[data-state=checked]]:text-slate-900"
                    >
                        <RadioGroupItem id={`${id}-${option.value}`} value={option.value} />
                        {option.label}
                    </Label>
                ))}
            </RadioGroup>
        </div>
    );
}
