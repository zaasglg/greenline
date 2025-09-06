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
            GreenLine Cleaning and COVID-19: Your Safety Is Our Priority
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            At GreenLine Cleaning, your safety and comfort come first. Even in challenging times, we continue to provide clean and safe carpets and upholstery so you can enjoy peace of mind.
          </p>
        </div>
      </section>

      {/* What We Do to Protect You */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What We Do to Protect You
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our sanitation services are recognized as essential for maintaining health and safety in homes. The Cybersecurity and Infrastructure Security Agency includes services like ours as critical to keeping residences safe and sanitary.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We use hospital-grade disinfectants and follow strict protocols to ensure your home stays safe and clean.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Hospital-grade disinfectants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">EPA-registered sanitizers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Thorough equipment disinfection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Daily vehicle sanitization</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl relative overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional cleaning and sanitization services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Shield className="w-24 h-24 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Safe & Protected</h3>
                    <p className="text-white font-medium">Your health is our priority</p>
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

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose GreenLine Cleaning?</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Essential Services</h3>
              <p className="text-slate-600 text-sm">
                Recognized as critical for maintaining health and safety in homes during challenging times.
              </p>
            </div>

            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Expert Protection</h3>
              <p className="text-slate-600 text-sm">
                Our trained technicians follow strict safety measures and CDC guidelines.
              </p>
            </div>

            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Peace of Mind</h3>
              <p className="text-slate-600 text-sm">
                We care about the health and safety of your home and family.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-emerald-600 font-semibold mb-4">Contact us today to find out what sanitation services are available in your area.</p>
            <p className="text-sm text-gray-500 mb-8">Services are subject to local laws and regulations. Some locations may temporarily suspend operations based on local decisions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
