import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Target, Users, Award, Phone, ClipboardList, Sparkles, ShieldCheck, Heart, Star, Quote, ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ReviewsCarousel from "@/components/ReviewsCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/furgon.jpg')"}}>
        {/* Content */}
        <div className="relative flex flex-col md:flex-row h-full z-10">
          <div className="w-full h-full">
            {/* Left Content */}
            <div className="relative flex items-center h-full px-4 md:px-8 py-8 md:py-0">
              <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/50 md:bg-black/40"></div>
              <div className="relative z-10 text-white w-full md:w-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 uppercase text-center md:text-left">
                  GreenLine
                </h1>
                <p className="text-base md:text-lg text-green-200 font-semibold mb-4 text-center md:text-left">Eco-Friendly Cleaning for Your Health</p>
                <div className="flex justify-center md:justify-start">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
                  >
                    BOOK ONLINE
                  </Button>
                </div>

                {/* Address and Hours */}
                <div className="mt-6 md:mt-8 text-gray-100 text-center md:text-left">
                  <p className="mb-2 text-sm md:text-base">123 Environmental Way, Green City, GC 12345</p>
                  <p className="text-base md:text-lg font-semibold">8AM - 8PM MON - SAT</p>
                </div>
                {/* Contact message added by assistant */}
                <div className="mt-4 text-gray-100 text-xs md:text-sm max-w-md mx-auto md:mx-0 text-center md:text-left">
                  <p>
                    Please contact us directly through our website or call the number provided above for any assistance or questions you may have! We will be more than happy to help you! Thank you and have a great day!
                  </p>
                </div>
              </div>
            </div>

            {/* Right Promotional Boxes - Mobile: Below content, Desktop: Right side */}
            <div className="relative md:absolute md:top-0 md:right-0 bg-white md:bg-[linear-gradient(0.753turn,rgba(255,255,255,1)_45%,rgba(255,255,255,0.05)_95%,rgba(255,255,255,0.01)_100%)] w-full md:w-6/12 md:h-full flex flex-col md:items-end md:justify-center space-y-3 md:space-y-4 p-4 md:px-6 md:backdrop-blur-xs transition-all duration-700">
              {/* Free Service Call */}
              <div className="p-4 md:p-6 rounded-lg border-3 md:border-4 border-dashed border-red-500 w-full md:max-w-xs">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-1 md:mb-2">FREE</h3>
                  <p className="text-base md:text-lg font-semibold text-gray-800 mb-1">CONSULTATION</p>
                  <p className="text-xs md:text-sm text-gray-600">FOR ENVIRONMENTAL &</p>
                  <p className="text-xs md:text-sm text-gray-600">SUSTAINABILITY SERVICES</p>
                </div>
              </div>

              {/* Discount */}
              <div className="p-4 md:p-6 rounded-lg border-3 md:border-4 border-dashed border-red-500 w-full md:max-w-xs">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-1 md:mb-2">15%</h3>
                  <p className="text-base md:text-lg font-semibold text-gray-800 mb-1">DISCOUNT AVAILABLE</p>
                  <p className="text-xs md:text-sm text-gray-600">15% OFF SERVICES FOR MILITARY,</p>
                  <p className="text-xs md:text-sm text-gray-600">TEACHERS, POLICE AND FIRE SENIORS</p>
                  <p className="text-xs md:text-sm text-gray-600">FOR SERVICES UP TO $1000</p>
                </div>
              </div>

              {/* Starting Price */}
              <div className="p-4 md:p-6 rounded-lg border-3 md:border-4 border-dashed border-red-500 w-full md:max-w-xs">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-1 md:mb-2">$99</h3>
                  <p className="text-base md:text-lg font-semibold text-gray-800">CONSULTATION</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges & Certifications */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-autoj">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Trusted by Thousands of Customers
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our certifications and customer satisfaction speak for themselves
            </p>
          </div>

          {/* Auto-sliding logo carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-[slide-infinite_60s_linear_infinite] space-x-8 items-center">
              {/* First set of logos */}
              <img
                src="/images/logos/100-satisfaction-guaranteed-gold-label-with-red-ribbon-i-free-vector.jpg"
                alt="100% Satisfaction Guaranteed"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/1000_F_302829249_sGra3Q1AdTozqXHBHjzbwM8rkY4dtvOc.jpg"
                alt="Customer Satisfaction"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/1000_F_418370947_YmhKbbqmH20KtySvICWIUAQTewI16DRV.jpg"
                alt="Quality Service"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/100_-Customer-Satisfaction-scaled.webp"
                alt="Customer Satisfaction"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/325098.png"
                alt="Certification Badge"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/360_F_52353227_QN4uFwGBnLfLtZzAxacByJujbzneuGMB.jpg"
                alt="Service Award"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/576-5768110_groupon-mostra-il-meglio-dellitalia-heineken-serving-the.png"
                alt="Groupon Partner"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/673b02970b7a6d75beef9fa5_AngiSuperService_2024.png"
                alt="Angi Super Service Award"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/904490.jpg"
                alt="Service Excellence"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/9702949-100-satisfaction-guaranteed-sign.jpg"
                alt="Satisfaction Guarantee"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/Reel-Hosepower-5-Star-Google-Ratings.webp"
                alt="5 Star Google Reviews"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/Thumbtack-Alternatives.jpg"
                alt="Thumbtack Alternative"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/Thumbtack-Top-Pro-2024.png"
                alt="Thumbtack Top Pro 2024"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/carpet-cleaning-guarantee.avif"
                alt="Carpet Cleaning Guarantee"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/eco-label-eco-friendly-logo-organic-natural-product-icon_349999-1444.jpg"
                alt="Eco-Friendly Products"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/green-labels_54199-401.avif"
                alt="Natural Products"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/zelenaya-kruglaya-etikatka-sto-protsentov-naturalnoe-0005901658-preview.jpg"
                alt="100% Natural"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/выбор-зе-еного-яр-ыка-самый-учший-с-вектором-ент-32740210.webp"
                alt="Best Choice Award"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />

              {/* Duplicate set for seamless loop */}
              <img
                src="/images/logos/100-satisfaction-guaranteed-gold-label-with-red-ribbon-i-free-vector.jpg"
                alt="100% Satisfaction Guaranteed"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/1000_F_302829249_sGra3Q1AdTozqXHBHjzbwM8rkY4dtvOc.jpg"
                alt="Customer Satisfaction"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/1000_F_418370947_YmhKbbqmH20KtySvICWIUAQTewI16DRV.jpg"
                alt="Quality Service"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/100_-Customer-Satisfaction-scaled.webp"
                alt="Customer Satisfaction"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/325098.png"
                alt="Certification Badge"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/360_F_52353227_QN4uFwGBnLfLtZzAxacByJujbzneuGMB.jpg"
                alt="Service Award"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/576-5768110_groupon-mostra-il-meglio-dellitalia-heineken-serving-the.png"
                alt="Groupon Partner"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/673b02970b7a6d75beef9fa5_AngiSuperService_2024.png"
                alt="Angi Super Service Award"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/904490.jpg"
                alt="Service Excellence"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/9702949-100-satisfaction-guaranteed-sign.jpg"
                alt="Satisfaction Guarantee"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/Reel-Hosepower-5-Star-Google-Ratings.webp"
                alt="5 Star Google Reviews"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/Thumbtack-Alternatives.jpg"
                alt="Thumbtack Alternative"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/Thumbtack-Top-Pro-2024.png"
                alt="Thumbtack Top Pro 2024"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/carpet-cleaning-guarantee.avif"
                alt="Carpet Cleaning Guarantee"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/eco-label-eco-friendly-logo-organic-natural-product-icon_349999-1444.jpg"
                alt="Eco-Friendly Products"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/green-labels_54199-401.avif"
                alt="Natural Products"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/zelenaya-kruglaya-etikatka-sto-protsentov-naturalnoe-0005901658-preview.jpg"
                alt="100% Natural"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
              <img
                src="/images/logos/выбор-зе-еного-яр-ыка-самый-учший-с-вектором-ент-32740210.webp"
                alt="Best Choice Award"
                className="h-16 w-auto object-contain flex-shrink-0 hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - Minimal Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title */}
            <div className="lg:sticky lg:top-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                5 Simple Steps to a Perfect Clean
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our proven process ensures exceptional results every time. Follow these simple steps to get your space perfectly clean.
              </p>
            </div>

            {/* Right Column - Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-300"></div>

              {/* Step 1 */}
              <div className="relative flex items-start pb-12">
                <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
                  01
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
                  <p className="text-gray-600">
                    Submit a request online or give us a call – it only takes a few minutes. We&apos;ll respond quickly and start the process.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start pb-12">
                <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
                  02
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Plan</h3>
                  <p className="text-gray-600">
                    We&apos;ll discuss your needs and offer a tailored cleaning plan, ensuring you get exactly the results you&apos;re looking for.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start pb-12">
                <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
                  03
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Preparation</h3>
                  <p className="text-gray-600">
                    Before our arrival, we&apos;ll guide you on how to prepare the area for efficient cleaning. It only takes a few minutes.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start pb-12">
                <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
                  04
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Cleaning</h3>
                  <p className="text-gray-600">
                    Our trained specialists will thoroughly clean using safe, eco-friendly products. The result – freshness and cleanliness you can be proud of.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 border-2 border-green-500 rounded-full flex items-center justify-center text-sm font-semibold text-white">
                  05
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Enjoy Clean & Comfort</h3>
                  <p className="text-gray-600">
                    Feel the difference! Your home will be cozy, clean, and safe for your health. We guarantee your satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title */}
            <div className="lg:sticky lg:top-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About GreenLine
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15 years of experience, we&apos;ve been providing top-quality cleaning services to homes and businesses.
              </p>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We are a professional carpet and upholstery cleaning company, dedicated to improving the quality of our services every day. We believe that high service standards are not just words but the foundation of long-term relationships with our clients.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  That&apos;s why we constantly work to make our services even better and more convenient for you. Our commitment to excellence and eco-friendly solutions has made us the trusted choice.
                </p>
              </div>

              <div className="aspect-[4/3] rounded-2xl relative overflow-hidden mb-6" style={{backgroundImage: "url('/images/XXL.webp')", backgroundSize: "cover", backgroundPosition: "center"}}></div>

              {/* Navigation button */}
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-300"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BeforeAfterSlider />

      <ReviewsCarousel />

    </div>
  );
}
