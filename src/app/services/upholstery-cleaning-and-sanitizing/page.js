import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Upholstery Cleaning & Sanitizing That Actually Works
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Your furniture is where you relax and unwind, but over time, without proper cleaning, it loses its freshness and starts to look dull and worn. Isn’t it time to bring your upholstery back to life with GreenLine Cleaning?
          </p>
        </div>
      </section>

      {/* What We Clean & How We Care */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                All Types of Upholstery — and How We Care
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We clean all types of upholstery — fabric, leather, polyester, cotton, rayon, olefin, and more. Our trained technicians carefully and effectively remove dirt, stains, and odors, restoring the beauty and comfort of your furniture — whether it’s a sofa, chair, ottoman, or headboard.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                First, we thoroughly inspect your furniture to identify stains, spots, and areas that need special attention. Then we use powerful vacuums with upholstery attachments to remove dry dirt and dust deep from the fibers. Next, we apply professional-grade cleaning solutions that break down dirt, grease, and stains without damaging the fabric. For stubborn spots, we treat them individually with specialized stain removers. After that, we perform deep extraction to rinse the upholstery thoroughly, removing cleaning agents, moisture, and dirt all at once. Because we use minimal moisture, your furniture dries quickly — usually within a few hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Fabric, leather, synthetic, and more</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Thorough inspection and vacuuming</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Professional cleaning solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Deep extraction & quick drying</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl relative overflow-hidden shadow-lg">
                <img
                  src="/images/rest_4.JPG"
                  alt="Clean modern sofa and furniture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Wait Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Wait?</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 border-slate-400 text-center">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Your upholstery traps dirt, dust, and allergens year after year</h3>
              <p className="text-slate-600 text-sm">
                Every day, more contaminants build up deep in the fibers where regular vacuuming can&apos;t reach.
              </p>
            </div>

            <div className="bg-white p-6 border-l-2 border-slate-400 text-center">
              <h3 className="text-lg font-medium text-slate-900 mb-2">DIY or regular cleaning can&apos;t get it all out</h3>
              <p className="text-slate-600 text-sm">
                Store-bought cleaners and rental machines lack the power to reach embedded dirt and oils.
              </p>
            </div>

            <div className="bg-white p-6 border-l-2 border-slate-400 text-center">
              <h3 className="text-lg font-medium text-slate-900 mb-2">The longer you wait, the harder it is to bring it back</h3>
              <p className="text-slate-600 text-sm">
                Dirt and stains become more permanent over time, making restoration more difficult and expensive.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/booking">
              <Button className="bg-sky-700 hover:bg-sky-900 text-white px-8 py-3 text-lg font-medium">
                Book Online
              </Button>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
