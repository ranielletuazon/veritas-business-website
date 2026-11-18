import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Heart toggle. Only remembers the choice while the page is open (no account yet).
export default function SaveButton() {
    const [saved, setSaved] = useState(false);

    return (
        <Button variant="outline" size="lg" aria-pressed={saved} onClick={() => setSaved(!saved)} className="w-full">
            <Heart className={cn("transition-colors", saved && "fill-rose-500 text-rose-500")} aria-hidden="true" />
            {saved ? "Saved to Shortlist" : "Save to Shortlist"}
        </Button>
    );
}
