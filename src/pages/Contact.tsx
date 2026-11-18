import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/config/site";

const contactDetails = [
    { label: "Email", value: siteConfig.contactEmail },
    { label: "Phone", value: siteConfig.contactPhone },
    { label: "Office", value: siteConfig.officeAddress },
    { label: "Office Hours", value: "Monday to Friday, 9:00 AM – 6:00 PM (SGT)" },
];

export default function Contact() {
    return (
        <Layout>
            <PageHeader
                eyebrow="Contact Us"
                title="We're Here to Help"
                description="Questions about buying, selling or franchising? Send us a message and our team will get back to you."
            />
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8 lg:py-16">
                <dl className="divide-y divide-slate-200 self-start rounded-lg border border-slate-200 bg-white">
                    {contactDetails.map((detail) => (
                        <div key={detail.label} className="p-5">
                            <dt className="text-xs font-semibold tracking-wider text-slate-500 uppercase">{detail.label}</dt>
                            <dd className="mt-1 font-medium text-slate-900">{detail.value}</dd>
                        </div>
                    ))}
                </dl>
                <ContactForm />
            </div>
        </Layout>
    );
}
