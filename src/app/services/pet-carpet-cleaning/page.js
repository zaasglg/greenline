import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            A Fresh, Odor‑Free Home Starts Today!
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Love your pets but tired of dealing with stubborn odors and stains on your carpet or furniture? We get it — the smell lingers, the spots keep coming back, and your home just doesn’t feel truly clean.
            <br />At GreenLine Cleaning, we don’t just cover up the problem — we go straight to the source.
          </p>
        </div>
      </section>

      {/* Why Homeowners Choose Us */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Homeowners Choose Us</h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
            <li>We completely remove odors — not just mask them.</li>
            <li>Safe cleaning products for both your family and pets.</li>
            <li>Deep fiber penetration to tackle even old, set‑in stains.</li>
            <li>Fast dry times — enjoy your carpet or furniture in just a few hours.</li>
            <li>Final walk‑through with you to make sure everything looks perfect.</li>
          </ul>
          <p className="text-lg text-emerald-600 font-semibold mb-8 text-center">Bring back the freshness and comfort of your home today!</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready for a Cleaner, Cozier Home?</h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-8">📞 Call or message us now — and we’ll get rid of those pet odors and stains so you can enjoy a cleaner, cozier home.</p>
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
