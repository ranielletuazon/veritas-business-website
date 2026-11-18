import Layout from "@/components/Layout";
import BusinessCard from "@/components/BusinessCard";
import CategoryCard from "@/components/CategoryCard";
import FranchiseCard from "@/components/FranchiseCard";
import HomeHero from "@/components/HomeHero";
import HowItWorks from "@/components/HowItWorks";
import PageSection from "@/components/PageSection";
import SellerCta from "@/components/SellerCta";
import TrustBadges from "@/components/TrustBadges";
import { getFeaturedBusinesses } from "@/assets/data/businesses_for_sale";
import { categories } from "@/assets/data/categories";
import { getFeaturedFranchises } from "@/assets/data/franchises";

export default function Home() {
    return (
        <Layout>
            <HomeHero />

            <PageSection
                eyebrow="Featured Listings"
                title="Businesses for Sale"
                description="Established opportunities with clear numbers and motivated sellers."
                linkTo="/businesses"
                linkLabel="View All Businesses"
            >
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {getFeaturedBusinesses().map((business) => (
                        <BusinessCard key={business.id} business={business} />
                    ))}
                </div>
            </PageSection>

            <PageSection
                eyebrow="Franchise Opportunities"
                title="Start with a Proven Brand"
                description="Compare investment cost and typical outlet profit before you commit."
                linkTo="/franchises"
                linkLabel="View All Franchises"
                className="border-y border-slate-200 bg-slate-50"
            >
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {getFeaturedFranchises().map((franchise) => (
                        <FranchiseCard
                            key={franchise.id}
                            franchise={franchise}
                        />
                    ))}
                </div>
            </PageSection>

            <PageSection
                eyebrow="Browse by Industry"
                title="Find the Right Kind of Business"
                linkTo="/businesses"
                linkLabel="View All Businesses"
            >
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.slug}
                            category={category}
                            basePath="/businesses"
                        />
                    ))}
                </div>
            </PageSection>

            <PageSection
                eyebrow="How It Works"
                title="Buying a Business in Three Steps"
                className="border-y border-slate-200 bg-slate-50"
            >
                <HowItWorks audience="buyer" />
            </PageSection>

            <PageSection
                eyebrow="Why Buyers Trust Us"
                title="Built for Safe, Confident Deals"
            >
                <TrustBadges />
            </PageSection>

            <SellerCta />
        </Layout>
    );
}
