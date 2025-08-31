import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Professional Upholstery Cleaning
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Your furniture is where you relax and unwind, but over time, without proper cleaning, it loses its freshness and starts to look dull and worn. Isn’t it time to bring your upholstery back to life with GreenLine Cleaning?
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What We Clean</h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            We clean all types of upholstery — fabric, leather, polyester, cotton, rayon, olefin, and more. Our trained technicians carefully and effectively remove dirt, stains, and odors, restoring the beauty and comfort of your furniture — whether it’s a sofa, chair, ottoman, or headboard.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Take Care of Your Upholstery</h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-8">
            <p>First, we thoroughly inspect your furniture to identify stains, spots, and areas that need special attention. Then we use powerful vacuums with upholstery attachments to remove dry dirt and dust deep from the fibers.</p>
            <p>Next, we apply professional-grade cleaning solutions that break down dirt, grease, and stains without damaging the fabric. For stubborn spots, we treat them individually with specialized stain removers.</p>
            <p>After that, we perform deep extraction to rinse the upholstery thoroughly, removing cleaning agents, moisture, and dirt all at once. Because we use minimal moisture, your furniture dries quickly — usually within a few hours.</p>
          </div>
          <p className="text-lg text-emerald-600 font-semibold mb-8">With GreenLine Cleaning, your upholstery will look fresh, clean, and safe for your whole family. Contact us today for a free consultation and take the first step toward refreshing your home’s interior.</p>
          <p className="text-lg text-emerald-600 font-semibold mb-8">Experience the difference and enjoy the comfort of clean, revitalized furniture with GreenLine Cleaning!</p>
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
