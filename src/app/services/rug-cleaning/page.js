import Link from "next/link";
import { CheckCircle, Clock, Shield, Sparkles, Phone, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RugCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Rug Cleaning
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Area rugs do more than just decorate your home — they protect the floors underneath and add warmth to any room. Because they handle a lot of foot traffic and daily wear, they need regular cleaning to stay fresh. Without proper care, rugs start to look dingy and worn out.
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

      {/* What to look for in a rug cleaning service */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What to look for in a rug cleaning service
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The most important thing is the quality of cleaning, but you should also consider drying time, convenience, and price.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                If you want all of that, Green Line rug cleaning services are a great choice.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Quality of cleaning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Fast drying time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Convenience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Fair pricing</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl relative overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Beautiful Persian and oriental rugs"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Sparkles className="w-24 h-24 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Complete Service</h3>
                    <p className="text-white font-medium">Quality, speed, and value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us? */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why choose us?</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Safe Cleaning Solutions</h3>
              <p className="text-slate-600 text-sm">
                Our cleaning solutions safely break down stains and grime using minimal water, so your rugs dry quickly.
              </p>
            </div>

            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Expert Technicians</h3>
              <p className="text-slate-600 text-sm">
                Our trained technicians know how to bring your rugs back to life, making them look and feel fresh again.
              </p>
            </div>

            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Affordable Pricing</h3>
              <p className="text-slate-600 text-sm">
                We offer high-quality cleaning at prices that won&apos;t break the bank.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded text-center border border-slate-200">
            <Phone className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to restore your rugs?
            </h3>
            <p className="text-xl text-emerald-600 font-semibold mb-6">
              Contact us today for professional rug cleaning services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-medium shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now for FREE Consultation
              </Button>
              <Button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 text-lg font-medium">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
