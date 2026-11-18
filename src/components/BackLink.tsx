import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackLinkProps {
    to: string;
    label: string;
}

export default function BackLink({ to, label }: BackLinkProps) {
    return (
        <Link
            to={to}
            className="group inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-slate-600 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
            {label}
        </Link>
    );
}
