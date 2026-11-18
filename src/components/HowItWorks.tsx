interface HowItWorksProps {
    audience: "buyer" | "seller";
}

const steps = {
    buyer: [
        { title: "Browse and Compare", text: "Search by industry, country and budget. Every listing shows the asking price, revenue and profit up front." },
        { title: "Contact the Seller", text: "Send an enquiry in one click. Confidential sellers share their name and details once they reply." },
        { title: "Review and Close", text: "Check the numbers, visit the business and agree a deal, with help from a broker or lender if you need one." },
    ],
    seller: [
        { title: "Tell Us About Your Business", text: "Share the basics: industry, location, revenue, profit and your asking price. It takes about 10 minutes." },
        { title: "We Review and Publish", text: "We check the details, help you write a teaser, and keep your name confidential if you prefer." },
        { title: "Meet Serious Buyers", text: "Interested buyers contact you directly. You decide who to talk to and when to share more." },
    ],
};

// Three numbered steps, for either buyers or sellers.
export default function HowItWorks({ audience }: HowItWorksProps) {
    return (
        <ol className="grid gap-6 md:grid-cols-3">
            {steps[audience].map((step, index) => (
                <li key={step.title} className="rounded-lg border border-slate-200 bg-white p-6">
                    <span className="text-sm font-semibold text-primary">Step 0{index + 1}</span>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{step.text}</p>
                </li>
            ))}
        </ol>
    );
}
