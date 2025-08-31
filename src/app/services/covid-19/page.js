import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            GreenLine Cleaning and COVID-19: Your Safety Is Our Priority
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
            At GreenLine Cleaning, your safety and comfort come first. Even in challenging times, we continue to provide clean and safe carpets and upholstery so you can enjoy peace of mind.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What We Do to Protect You</h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>Our sanitation services are recognized as essential for maintaining health and safety in homes. The Cybersecurity and Infrastructure Security Agency includes services like ours as critical to keeping residences safe and sanitary.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We use hospital-grade disinfectants approved by the EPA to sanitize high-touch surfaces like doorknobs, countertops, and more.</li>
              <li>Our EPA-registered carpet sanitizers kill odor-causing bacteria and help keep your carpets and upholstery fresh.</li>
              <li>All our tools and equipment are thoroughly disinfected after every appointment to prevent any risk of contamination.</li>
              <li>We disinfect the interiors of our vehicles daily for added safety.</li>
              <li>Uniforms are washed and changed regularly following strict hygiene protocols.</li>
              <li>Our technicians follow strict safety measures including social distancing, wearing gloves, masks, and shoe covers, frequent hand washing, and minimizing contact inside your home.</li>
              <li>We continuously monitor CDC and local health authority guidelines and update our procedures accordingly.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose GreenLine Cleaning?</h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 mb-8">We don’t just clean — we care about the health and safety of your home. With us, your carpets and furniture will look great and be protected from bacteria and viruses.</p>
            <p className="text-lg text-emerald-600 font-semibold mb-8">Contact us today to find out what sanitation services are available in your area. We are here to help you keep your home safe and comfortable.</p>
            <p className="text-sm text-gray-500 mb-4">Services are subject to local laws and regulations. Some locations may temporarily suspend operations based on local decisions.</p>
              <a href="/booking">
                <Button className="bg-sky-700 hover:bg-sky-900 text-white px-8 py-3 text-lg font-medium">
                  Book Online
                </Button>
              </a>
        </div>
      </section>
    </div>
  );
}
