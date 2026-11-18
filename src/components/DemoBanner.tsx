import { siteConfig } from "@/config/site";

export default function DemoBanner() {
    return (
        <div className="bg-slate-950 px-4 py-2 text-center text-xs text-slate-300">
            <p>
                <span className="mr-2 rounded-sm bg-amber-400 px-1.5 py-0.5 font-semibold text-amber-950">DEMO</span>
                {siteConfig.demoNote}
            </p>
        </div>
    );
}
