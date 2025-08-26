import Link from "next/link";
import { CheckCircle, Clock, Shield, Sparkles, Phone, Zap, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CarpetSanitizerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Carpet Sanitizer — Keep Your Carpets Fresh and Clean
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Home is your sanctuary — a place to leave the world&apos;s worries behind. GreenLine Cleaning&apos;s carpet sanitizer is designed to help with that. This EPA-registered product effectively kills odor-causing bacteria trapped in carpets and upholstery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-medium shadow-lg">
              Get Free Quote
            </Button>
            <Button className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-3 text-lg font-medium">
              Call: +1 720 462 8866
            </Button>
          </div>
        </div>
      </section>

      {/* EPA Registered Solution */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                EPA-Registered Solution
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                In fact, it&apos;s one of the few products approved for use on soft surfaces. By eliminating these bacteria, we remove stubborn odors that can be impossible to get rid of.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                If your carpets have been struggling with a lingering smell, it&apos;s time to try GreenLine Cleaning&apos;s carpet sanitizer.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">EPA-registered product</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Kills odor-causing bacteria</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Safe for soft surfaces</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Removes stubborn odors</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl relative overflow-hidden shadow-lg">
                <img
                  src="/images/res_3.jpg"
                  alt="Clean and sanitized home interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clean and Sanitize */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Clean and Sanitize Your Carpets</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Carpets take a beating every day. Dirt, dust, and oils get tracked in constantly, turning beautiful floors grimy over time. Even with shoe removal and regular vacuuming, carpets lose their freshness eventually.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Add spills and stains into the mix — especially smelly ones like pet urine — and your carpets are in trouble.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded text-center border border-slate-200 mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Fortunately, GreenLine Cleaning has the solution
            </h3>
            <p className="text-slate-600 mb-6">
              Our oxygen-powered carpet cleaning effectively breaks down tough dirt and stains.
            </p>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Here&apos;s how we do it:</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Inspection & Pretreat</h3>
              <p className="text-slate-600 text-sm">
                After a careful inspection, we pretreat heavily soiled spots with a special enzyme-based cleaner that quickly and safely breaks down grease and grime.
              </p>
            </div>

            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Main Solution</h3>
              <p className="text-slate-600 text-sm">
                We apply our main solution — a blend of oxygenated booster and encapsulator — which breaks apart dirt and traps it in tiny crystals.
              </p>
            </div>

            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Gentle Extraction</h3>
              <p className="text-slate-600 text-sm">
                Using advanced equipment, we gently lift debris out of the carpet fibers without crushing the pile.
              </p>
            </div>

            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-emerald-600">4</span>
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Final Touch</h3>
              <p className="text-slate-600 text-sm">
                Finally, we vacuum and groom the carpets to leave them looking professionally cleaned and refreshed.
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded text-center border border-emerald-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Complete Restoration
            </h3>
            <p className="text-slate-600 mb-4">
              This process restores your floors and brings back their fresh appearance!
            </p>
            <p className="text-slate-600">
              If odor-causing bacteria are an issue, we add our sanitizer treatment to fully eliminate them and leave your carpets smelling fresh and clean.
            </p>
          </div>
        </div>
      </section>

      {/* Upholstery Sanitizing */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-2xl relative overflow-hidden shadow-lg">
                <img
                  src="/images/rest_4.JPG"
                  alt="Professional carpet and upholstery sanitizing equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Upholstery Cleaning and Sanitizing
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We don&apos;t stop at carpets — we also sanitize your upholstered furniture.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                If your sofa or chair has developed stubborn odors, we can remove dirt and bacteria causing the smell, restoring freshness and comfort.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Furniture sanitizing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Odor elimination</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Restored freshness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <Phone className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready for Fresh, Clean Carpets?
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 mb-4">
            Call our Scheduling Center today to book your carpet sanitizing service.
          </p>
          <p className="text-lg text-emerald-600 font-semibold mb-8">
            Schedule your carpet cleaning and sanitizing with GreenLine Cleaning today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-medium shadow-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Scheduling Center
            </Button>
            <Button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 text-lg font-medium">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
