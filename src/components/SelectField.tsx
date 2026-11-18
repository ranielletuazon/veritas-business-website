import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Option } from "@/config/options";

interface SelectFieldProps {
    id: string;
    label: string;
    options: Option[];
    placeholder: string;
    required?: boolean;
}

// A labelled dropdown used by the demo forms.
export default function SelectField({ id, label, options, placeholder, required }: SelectFieldProps) {
    return (
        <div className="grid gap-2">
            <Label htmlFor={id} className="text-sm font-medium text-slate-800">
                {label}
                {required && (
                    <span className="text-rose-600" aria-hidden="true">
                        *
                    </span>
                )}
            </Label>
            <Select name={id} required={required}>
                <SelectTrigger id={id} className="w-full">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent position="popper">
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
