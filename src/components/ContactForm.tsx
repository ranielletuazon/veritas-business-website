import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import DemoFormNote from "@/components/DemoFormNote";
import FormField from "@/components/FormField";
import SelectField from "@/components/SelectField";

const topics = [
    { value: "buying", label: "Buying a Business" },
    { value: "selling", label: "Selling My Business" },
    { value: "franchise", label: "Franchise Enquiry" },
    { value: "partner", label: "Advisor or Lender Partnership" },
    { value: "other", label: "Something Else" },
];

// Non-functional contact form. Submitting only shows a toast and clears the fields.
export default function ContactForm() {
    const [formKey, setFormKey] = useState(0);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setFormKey(formKey + 1); // remounting the form clears every field, including the dropdowns
        toast.success("Message Sent", {
            description: "In the live site we would reply within 1 working day. This demo did not store anything.",
        });
    }

    return (
        <form key={formKey} onSubmit={handleSubmit} className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="message-name" label="Your Name" required autoComplete="name" />
                <FormField id="message-email" label="Email" type="email" required autoComplete="email" />
            </div>
            <SelectField id="message-topic" label="How Can We Help?" placeholder="Choose a Topic" options={topics} required />
            <FormField id="message-body" label="Message" multiline required placeholder="Tell us a little about what you're looking for." />
            <DemoFormNote />
            <Button type="submit" size="lg" className="w-full sm:w-auto sm:justify-self-start">
                Send Message
            </Button>
        </form>
    );
}
