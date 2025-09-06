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
            Mattress Cleaning
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Maintaining a clean mattress is essential for a healthy sleep environment. Our services utilize steam cleaning to effectively eliminate mold and microorganisms. Trust our skilled mattress cleaners to remove stains and clean every part of your mattress, ensuring a hygienic and refreshed result.
          </p>
        </div>
      </section>

      {/* Why Clean Your Mattress */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Clean Your Mattress?
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Many people overlook the importance of their mattresses. Mattresses act like air filters, collecting dust, trapping odors, and harboring dust mites. For those with allergies or asthma, dust mites can be especially hazardous as they can trigger attacks.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                GreenLine Cleaning offers professional in-home mattress cleaning. Our process, similar to cleaning carpets or furniture, involves specialists using industrial vacuum cleaners, high temperatures, steam, and specialized cleaning agents to remove dirt.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Steam cleaning technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Mold and microorganism elimination</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Deep stain removal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Safe for humans and pets</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl relative overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional mattress cleaning services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Sparkles className="w-24 h-24 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Fresh & Clean</h3>
                    <p className="text-white font-medium">Healthy sleep environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
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
      </section>

      {/* Our Cleaning Process */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mattress Cleaning Process</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Professional Equipment</h3>
              <p className="text-slate-600 text-sm">
                Industrial vacuum cleaners and specialized cleaning agents for deep cleaning.
              </p>
            </div>

            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Steam Technology</h3>
              <p className="text-slate-600 text-sm">
                High temperatures and steam to eliminate mold and microorganisms effectively.
              </p>
            </div>

            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Safe & Hygienic</h3>
              <p className="text-slate-600 text-sm">
                We restore cleanliness and freshness using safe substances for humans and pets.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-emerald-600 font-semibold mb-4">Get your mattress professionally cleaned today.</p>
            <p className="text-sm text-gray-500 mb-8">Experience the difference with our expert mattress cleaning services.</p>
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
