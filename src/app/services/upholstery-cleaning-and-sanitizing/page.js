import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-sky-300 via-sky-400 to-blue-600">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Upholstery Cleaning and Sanitizing
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            We don&apos;t stop at carpets — we also sanitize your upholstered furniture. If your sofa or chair has developed stubborn odors, we can remove dirt and bacteria causing the smell, restoring freshness and comfort.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            To book upholstery sanitizing, call our Scheduling Center. We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/booking">
              <Button className="bg-sky-700 hover:bg-sky-900 text-white px-8 py-3 text-lg font-medium">
                Book Online
              </Button>
            </a>
            <a href="/portfolio">
              <Button variant="outline" className="border-sky-700 text-sky-700 hover:bg-sky-50 px-8 py-3 text-lg font-medium">
                More Photos Here
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
