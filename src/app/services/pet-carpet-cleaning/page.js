import Link from "next/link";
import { CheckCircle, Clock, Shield, Sparkles, Phone, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-sky-300 via-sky-400 to-blue-600">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            A Fresh, Odor‑Free Home Starts Today!
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Love your pets but tired of dealing with stubborn odors and stains on your carpet or furniture? We get it — the smell lingers, the spots keep coming back, and your home just doesn't feel truly clean.
            <br />At GreenLine Cleaning, we don't just cover up the problem — we go straight to the source.
          </p>
        </div>
      </section>

      {/* Why Homeowners Choose Us */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Homeowners Choose Us
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We completely remove odors — not just mask them. Our professional cleaning services tackle pet stains and odors at the source, bringing back the freshness and comfort of your home.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Bring back the freshness and comfort of your home today!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Complete odor removal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Safe for family and pets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Deep fiber penetration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Fast dry times</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl relative overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional pet stain and odor removal services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Sparkles className="w-24 h-24 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Fresh & Clean</h3>
                    <p className="text-white font-medium">Odor-free home guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
            {/* More Information */}
      <section className="py-20 px-4 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Pets Love Our Carpet Cleaning
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We use pet-safe, non-toxic solutions that effectively remove odors and stains while keeping your furry friends safe and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors">
                <Heart className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pet-Safe Solutions</h3>
              <p className="text-gray-600">
                All our cleaning products are non-toxic and safe for pets, giving you peace of mind.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Odor Elimination</h3>
              <p className="text-gray-600">
                We don't just mask odors – we eliminate them at the source for lasting freshness.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-100 transition-colors">
                <Sparkles className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Cleaning</h3>
              <p className="text-gray-600">
                Our advanced techniques reach deep into carpet fibers to remove embedded pet hair and allergens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Pet Cleaning Services</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Complete Odor Removal</h3>
              <p className="text-slate-600 text-sm">
                We completely remove odors — not just mask them. Say goodbye to stubborn pet smells.
              </p>
            </div>

            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Deep Stain Treatment</h3>
              <p className="text-slate-600 text-sm">
                Deep fiber penetration to tackle even old, set-in stains from pets.
              </p>
            </div>

            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Quality Assurance</h3>
              <p className="text-slate-600 text-sm">
                Final walk-through with you to make sure everything looks perfect.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-emerald-600 font-semibold mb-4">Ready for a cleaner, cozier home?</p>
            <p className="text-sm text-gray-500 mb-8">📞 Call or message us now — and we'll get rid of those pet odors and stains so you can enjoy a cleaner, cozier home.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </div>
  );
}
