import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormFieldProps {
    id: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    /** Renders a multi-line textarea instead of an input. */
    multiline?: boolean;
    defaultValue?: string;
    autoComplete?: string;
}

// A labelled input or textarea used by the demo forms.
export default function FormField({ id, label, type = "text", placeholder, required, multiline, defaultValue, autoComplete }: FormFieldProps) {
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
            {multiline ? (
                <Textarea id={id} name={id} placeholder={placeholder} required={required} defaultValue={defaultValue} />
            ) : (
                <Input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    defaultValue={defaultValue}
                    autoComplete={autoComplete}
                />
            )}
        </div>
    );
}
