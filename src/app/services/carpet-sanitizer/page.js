import Link from "next/link";
import { CheckCircle, Clock, Shield, Sparkles, Phone, Zap, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CarpetSanitizerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-sky-300 via-sky-400 to-blue-600">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Carpet Sanitizer — Keep Your Carpets Fresh and Clean
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Home is your sanctuary — a place to leave the world&apos;s worries behind. GreenLine Cleaning&apos;s carpet sanitizer is designed to help with that. This EPA-registered product effectively kills odor-causing bacteria trapped in carpets and upholstery. In fact, it&apos;s one of the few products approved for use on soft surfaces.
            <br /><br />
            By eliminating these bacteria, we remove stubborn odors that can be impossible to get rid of. If your carpets have been struggling with a lingering smell, it&apos;s time to try GreenLine Cleaning&apos;s carpet sanitizer.
            <br /><br />
            Call our Scheduling Center today to book your carpet sanitizing service.
          </p>
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
        </div>
      </section>
    </div>
  );
}
