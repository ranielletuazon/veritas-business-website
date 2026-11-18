import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DemoFormNote from "@/components/DemoFormNote";
import FormField from "@/components/FormField";

interface ContactDialogProps {
    /** Who the buyer is contacting, e.g. "the seller" or an advisor's name. */
    recipient: string;
    /** What the enquiry is about, shown in the dialog and pre-filled in the message. */
    subject: string;
    triggerLabel?: string;
    triggerVariant?: "default" | "outline";
    triggerSize?: "default" | "lg";
    triggerClassName?: string;
}

// "Contact" button that opens a fake enquiry form. Submitting only shows a toast.
export default function ContactDialog({
    recipient,
    subject,
    triggerLabel = "Contact Seller",
    triggerVariant = "default",
    triggerSize = "lg",
    triggerClassName,
}: ContactDialogProps) {
    const [open, setOpen] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setOpen(false);
        toast.success("Enquiry Sent", {
            description: `In the live site, ${recipient} would receive your message. This demo did not store anything.`,
        });
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={triggerVariant} size={triggerSize} className={triggerClassName}>
                    {triggerLabel}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-xl">Contact {recipient}</DialogTitle>
                    <DialogDescription>
                        About: <span className="font-medium text-slate-700">{subject}</span>
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <FormField id="contact-name" label="Full Name" required autoComplete="name" />
                        <FormField id="contact-phone" label="Phone" type="tel" autoComplete="tel" />
                    </div>
                    <FormField id="contact-email" label="Email" type="email" required autoComplete="email" />
                    <FormField
                        id="contact-message"
                        label="Message"
                        multiline
                        required
                        defaultValue={`Hi, I'm interested in "${subject}". Could you share more details?`}
                    />
                    <DemoFormNote />
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">Send Enquiry</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
