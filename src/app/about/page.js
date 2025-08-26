import Link from "next/link";
import { Leaf, Users, Award, Heart, CheckCircle, Shield, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About GreenLine
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a professional carpet and upholstery cleaning company, dedicated to improving the quality of our services every day.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We are a professional carpet and upholstery cleaning company, dedicated to improving the quality of our services every day. We believe that high service standards are not just words but the foundation of long-term relationships with our clients. That&apos;s why we constantly work to make our services even better and more convenient for you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Us?
                </h2>
                <div className="w-16 h-1 bg-green-500 mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our clients keep coming back because we always put their interests first. We offer not just high-quality cleaning, but attention to detail and care for your home and health.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our staff undergo thorough training, studying various types of materials and stains to effectively handle any cleaning challenge. Every month, on the 25th, our employees are tested to maintain a high level of knowledge and meet the company&apos;s standards.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  You can trust that your home is in the hands of professionals who know their craft.
                </p>
              </div>

              {/* Right Content - Features */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Training</h3>
                    <p className="text-gray-600">Our staff undergo thorough training and monthly testing to maintain excellence.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Standards</h3>
                    <p className="text-gray-600">We maintain high service standards as the foundation of client relationships.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-First Approach</h3>
                    <p className="text-gray-600">We always put our clients&apos; interests first with attention to detail.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content - Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl relative overflow-hidden" style={{backgroundImage: "url('/images/XXL.webp')", backgroundSize: "cover", backgroundPosition: "center"}}>
                </div>
              </div>

              {/* Right Content */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Eco-Friendly Cleaning for Your Health
                </h2>
                <div className="w-16 h-1 bg-green-500 mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We are proud to use only eco-friendly cleaning products. These solutions are not only safe for the environment but also beneficial for your health.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  They are free from harsh chemicals, which is especially important for families with children, pets, and those who suffer from allergies. Caring for the environment and the health of our clients is one of our top priorities.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Safe for children</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Pet-friendly</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Allergy-safe</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Environmentally safe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Sparkles className="w-16 h-16 text-white mx-auto mb-6 opacity-90" />
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <div className="w-16 h-1 bg-white/30 mx-auto mb-8"></div>
            </div>

            <p className="text-xl leading-relaxed mb-8 opacity-95">
              Our mission is to create an atmosphere of comfort and cleanliness in your home using the best eco-friendly solutions. We want every cleaning service to bring not only the joy of cleanliness but also the peace of mind that your health and comfort are in good hands.
            </p>

            <p className="text-lg leading-relaxed opacity-90">
              Our business is built on trust, attention to detail, and a commitment to excellence in every aspect of our work.
            </p>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
