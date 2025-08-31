import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Mattress Cleaning
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Maintaining a clean mattress is essential for a healthy sleep environment. Our services utilize steam cleaning to effectively eliminate mold and microorganisms. Trust our skilled mattress cleaners to remove stains and clean every part of your mattress, ensuring a hygienic and refreshed result.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Clean Your Mattress?</h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>Many people overlook the importance of their mattresses. Mattresses act like air filters, collecting dust, trapping odors, and harboring dust mites. For those with allergies or asthma, dust mites can be especially hazardous as they can trigger attacks.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mattress Cleaning Process</h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-8">GreenLine Cleaning offers professional in-home mattress cleaning. Our process, similar to cleaning carpets or furniture, involves specialists using industrial vacuum cleaners, high temperatures, steam, and specialized cleaning agents to remove dirt. We restore cleanliness and freshness to mattresses using safe substances for both humans and pets.</p>
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
