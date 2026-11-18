import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import DemoFormNote from "@/components/DemoFormNote";
import FormField from "@/components/FormField";
import SelectField from "@/components/SelectField";
import { categories } from "@/assets/data/categories";
import { countries } from "@/config/options";

// Non-functional "list your business" form. Submitting only shows a toast and clears the fields.
export default function SellBusinessForm() {
    const [formKey, setFormKey] = useState(0);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setFormKey(formKey + 1); // remounting the form clears every field, including the dropdowns
        toast.success("Listing Request Received", {
            description: "In the live site our team would contact you within 2 working days. This demo did not store anything.",
        });
    }

    return (
        <form key={formKey} onSubmit={handleSubmit} className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
            <div>
                <h2 className="text-2xl font-semibold text-slate-900">Tell Us About Your Business</h2>
                <p className="mt-1 text-slate-600">Free to list. Your business name stays private unless you choose otherwise.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="sell-name" label="Your Name" required autoComplete="name" />
                <FormField id="sell-email" label="Email" type="email" required autoComplete="email" />
                <FormField id="sell-phone" label="Phone" type="tel" autoComplete="tel" />
                <SelectField
                    id="sell-country"
                    label="Country"
                    placeholder="Select a Country"
                    options={countries.map((country) => ({ value: country.code, label: country.name }))}
                    required
                />
                <SelectField
                    id="sell-category"
                    label="Industry"
                    placeholder="Select an Industry"
                    options={categories.map((category) => ({ value: category.slug, label: category.name }))}
                    required
                />
                <FormField id="sell-price" label="Asking Price" placeholder="e.g. 500,000 (in SGD or PHP)" />
            </div>

            <FormField
                id="sell-description"
                label="Short Description"
                multiline
                placeholder="What does the business do, how long has it been running, and why are you selling?"
            />

            <DemoFormNote />
            <Button type="submit" size="lg" className="w-full sm:w-auto sm:justify-self-start">
                Submit for Review
            </Button>
        </form>
    );
}
