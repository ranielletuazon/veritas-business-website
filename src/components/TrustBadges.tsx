const trustPoints = [
    {
        title: "Verified Listings",
        text: "Listings with the Verified badge have had the seller's identity and business registration checked before going live.",
    },
    {
        title: "Confidential by Default",
        text: "Sellers can hide their business name. Details are shared only with serious buyers who make contact.",
    },
    {
        title: "Cross-Border Ready",
        text: "Compare Singapore and Philippine opportunities side by side, in the currency of your choice.",
    },
];

export default function TrustBadges() {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            {trustPoints.map((point) => (
                <div key={point.title} className="border-t-2 border-primary pt-5">
                    <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{point.text}</p>
                </div>
            ))}
        </div>
    );
}
