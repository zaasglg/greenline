import Link from "next/link";
import { CheckCircle, Clock, Shield, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CarpetCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Carpet Cleaning That Actually Works
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Tired of looking at a dull carpet with spots that just won't come out?
            Dirt works its way deep into the fibers, clinging tight. In those high‑traffic areas, oils and grime build up, leaving your carpet looking worn and tired. And it's not just about looks — that buildup can hold on to bacteria and allergens that affect your family's health.
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

      {/* Here's how we fix it */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Here's how we fix it
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We start with a powerful prespray on the toughest areas to loosen up the dirt and oils. Then we hit it with our oxygenated booster and EPA Safer Choice encapsulator.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The booster breaks the bond between dirt and fibers, and the encapsulator traps it all in tiny crystals so it can't settle back in.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Powerful prespray on tough areas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Oxygenated booster breaks dirt bonds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">EPA Safer Choice encapsulator</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Safe for children and pets</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl relative overflow-hidden shadow-lg">
                <img
                  src="/images/res_1.JPG"
                  alt="Professional carpet cleaning equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Less Water, Faster Dry Time */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-2xl relative overflow-hidden shadow-lg">
                <img
                  src="/images/res_2.JPG"
                  alt="Clean living room with beautiful carpet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Less Water, Faster Dry Time
              </h2>
              <div className="w-16 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our process uses very little moisture, so your carpets dry in just a few hours — not days.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                And we don't just do a quick pass — we go over every area twice to make sure every fiber gets the attention it needs.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Dry in just a few hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Low moisture process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Double pass cleaning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Every fiber gets attention</span>
                </div>
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
              <h3 className="text-lg font-medium text-slate-900 mb-2">Your carpet traps dirt, dust, and allergens year after year</h3>
              <p className="text-slate-600 text-sm">
                Every day, more contaminants build up deep in the fibers where regular vacuuming can't reach.
              </p>
            </div>

            <div className="bg-white p-6 border-l-2 border-slate-400 text-center">
              <h3 className="text-lg font-medium text-slate-900 mb-2">DIY or regular cleaning can't get it all out</h3>
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

          <div className="bg-slate-50 p-6 rounded text-center border border-slate-200">
            <Phone className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              📞 Call or message us today — your carpet could be fresh, clean, and safe for your family by tomorrow.
            </h3>
            <p className="text-xl text-emerald-600 font-semibold mb-6">
              Let's bring your carpet back to life now.
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
