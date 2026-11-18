import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function NotFound() {
    return (
        <Layout>
            <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:py-32">
                <p className="text-6xl font-bold tracking-tight text-primary">404</p>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">We Couldn't Find That Page</h1>
                <p className="mt-4 text-lg text-slate-600">The listing may have been sold or removed, or the link might be mistyped.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg">
                        <Link to="/businesses">Browse Businesses</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link to="/">Back to Home</Link>
                    </Button>
                </div>
            </div>
        </Layout>
    );
}
