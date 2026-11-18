import HowItWorks from "@/components/HowItWorks";
import Layout from "@/components/Layout";
import PageSection from "@/components/PageSection";
import SellBusinessForm from "@/components/SellBusinessForm";

const benefits = [
    { title: "Two Markets, One Listing", text: "Reach buyers and investors in Singapore and the Philippines." },
    { title: "Stay Anonymous", text: "List with a teaser title. Your name is shared only when you choose." },
    { title: "Earn the Verified Badge", text: "Verified listings get more enquiries from serious buyers." },
];

export default function SellYourBusiness() {
    return (
        <Layout>
            <section className="border-b border-slate-200 bg-slate-50">
                <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-start lg:px-8">
                    <div className="lg:pt-4">
                        <p className="text-xs font-semibold tracking-widest text-primary uppercase">Sell Your Business</p>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl">
                            Find the Right Buyer for What You've Built
                        </h1>
                        <p className="mt-5 max-w-xl text-lg text-slate-600">
                            List your business for free and connect with serious buyers, investors and franchise operators across two markets.
                        </p>
                        <dl className="mt-10 space-y-6">
                            {benefits.map((benefit) => (
                                <div key={benefit.title} className="border-l-2 border-primary pl-4">
                                    <dt className="font-semibold text-slate-900">{benefit.title}</dt>
                                    <dd className="mt-1 text-slate-600">{benefit.text}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <SellBusinessForm />
                </div>
            </section>

            <PageSection eyebrow="How It Works" title="Selling in Three Steps">
                <HowItWorks audience="seller" />
            </PageSection>
        </Layout>
    );
}
