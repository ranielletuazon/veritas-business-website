// One place for the brand and site-wide settings, so the site can be renamed later.
export const siteConfig = {
    name: "Veritas Business",
    tagline: "The trusted marketplace for buying and selling businesses in Singapore and the Philippines.",
    contactEmail: "hello@example.com",
    contactPhone: "+65 6000 0000",
    officeAddress: "1 Demo Street, #10-01, Singapore 000001",
    demoNote: "Demo prototype: every listing, name and figure on this site is fictional sample data.",
    /** Fixed demo exchange rate used by the currency switcher. Replace with a live rate later. */
    phpPerSgd: 43,
    navLinks: [
        { label: "Businesses for Sale", to: "/businesses" },
        { label: "Franchises", to: "/franchises" },
        { label: "Advisors & Lenders", to: "/advisors" },
        { label: "Contact Us", to: "/contact-us" },
    ],
};
