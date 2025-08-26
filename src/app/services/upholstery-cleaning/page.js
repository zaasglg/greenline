import Link from "next/link";
import { CheckCircle, Clock, Shield, Sparkles, Phone, Eye, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UpholsteryCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Professional Upholstery Cleaning by GreenLine Cleaning
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Your furniture is where you relax and unwind, but over time, without proper cleaning, it loses its freshness and starts to look dull and worn. Isn&apos;t it time to bring your upholstery back to life with GreenLine Cleaning?
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

      {/* What We Clean */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                All Types of Upholstery
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We clean all types of upholstery — fabric, leather, polyester, cotton, rayon, olefin, and more.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our trained technicians carefully and effectively remove dirt, stains, and odors, restoring the beauty and comfort of your furniture — whether it&apos;s a sofa, chair, ottoman, or headboard.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Fabric upholstery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Leather furniture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Synthetic materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">All furniture types</span>
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

      {/* How We Take Care */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Take Care of Your Upholstery</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Thorough Inspection</h3>
              <p className="text-slate-600 text-sm">
                We thoroughly inspect your furniture to identify stains, spots, and areas that need special attention.
              </p>
            </div>

            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <Wind className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Deep Vacuuming</h3>
              <p className="text-slate-600 text-sm">
                We use powerful vacuums with upholstery attachments to remove dry dirt and dust deep from the fibers.
              </p>
            </div>

            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Professional Solutions</h3>
              <p className="text-slate-600 text-sm">
                We apply professional-grade cleaning solutions that break down dirt, grease, and stains without damaging the fabric.
              </p>
            </div>

            <div className="bg-white p-6 rounded border-l-2 border-slate-400 text-center">
              <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Quick Drying</h3>
              <p className="text-slate-600 text-sm">
                Because we use minimal moisture, your furniture dries quickly — usually within a few hours.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded text-center border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Deep Extraction Process
            </h3>
            <p className="text-slate-600 mb-6">
              We perform deep extraction to rinse the upholstery thoroughly, removing cleaning agents, moisture, and dirt all at once. For stubborn spots, we treat them individually with specialized stain removers.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Experience Clean, Revitalized Furniture
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            With GreenLine Cleaning, your upholstery will look fresh, clean, and safe for your whole family. Contact us today for a free consultation and take the first step toward refreshing your home&apos;s interior.
          </p>
          <p className="text-lg text-emerald-600 font-semibold mb-8">
            Experience the difference and enjoy the comfort of clean, revitalized furniture with GreenLine Cleaning!
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
      </section>
    </div>
  );
}
