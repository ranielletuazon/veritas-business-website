import type { ReactNode } from "react";
import DemoBanner from "@/components/DemoBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface LayoutProps {
    children: ReactNode;
}

// Shared page frame: demo banner, navbar, page content and footer.
export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <a
                href="#main"
                className="sr-only rounded-lg bg-white px-4 py-2 font-medium text-primary shadow-lg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
            >
                Skip to content
            </a>
            <DemoBanner />
            <Navbar />
            <main id="main" className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
