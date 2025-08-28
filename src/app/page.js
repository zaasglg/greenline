"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Leaf, Target, Users, Award, Phone, ClipboardList, Sparkles, ShieldCheck, Heart, Star, Quote, ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const plugin1 = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  const plugin2 = React.useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:h-[450px] bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
            {/* Left Content */}
            <div className="text-white space-y-6 relative z-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                GreenLine, the Right <br /> Way to Clean
              </h1>
              <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-lg">
                Refresh and renew your carpets the safe, professional way with GreenLine. We clean using our proprietary Zr™ Water—no soaps or harsh chemicals. Enjoy a deep, fast-drying clean that's safe for your family and pets, and trusted by over 400,000 customers each year.
              </p>
              
              <Button 
                size="lg" 
                className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold px-10 py-5 text-xl"
              >
                BOOK ONLINE
              </Button>
            </div>

            {/* Right Image */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2" style={{clipPath: 'circle(75% at 70% 51%'}}>
              <img
                src="/images/professional-cleaner.webp"
                alt="Professional carpet cleaner at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Cleaning Surfaces That Matter Most
            </h2>
            <p className="text-slate-600 max-w-4xl mx-auto text-lg">
              You deserve more than just clean carpets! Keep you and your family healthier by trusting us to expertly remove dirt and grime from living spaces and surfaces throughout your home with our non-toxic proprietary Zr™ Water, which is free of dirt-attracting soaps, detergents, and fragrances.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Steam Carpet Cleaning */}
            <div className="group cursor-pointer flex flex-col h-full">
              <div className="aspect-[4/3] rounded-t-lg overflow-hidden mb-0">
                <img
                  src="https://img.freepik.com/premium-photo/cleaning-service-company-employee-removing-dirt-from-carpet-flat-with-professional-steam-cleaner-equipment-close-up_194143-6643.jpg"
                  alt="Steam carpet cleaning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-blue-500 group-hover:bg-blue-700 text-white p-4 rounded-b-lg flex-1 flex items-center transition-colors duration-300">
                <h3 className="text-lg font-medium flex items-center justify-between w-full">
                  Steam Carpet Cleaning
                  <ArrowRight className="w-5 h-5" />
                </h3>
              </div>
            </div>

            {/* Steam Cleaning Upholstery */}
            <div className="group cursor-pointer flex flex-col h-full">
              <div className="aspect-[4/3] rounded-t-lg overflow-hidden mb-0">
                <img
                  src="https://i.pinimg.com/736x/2e/bc/bc/2ebcbcb277e1147df0b6d779607bffef.jpg"
                  alt="Steam cleaning upholstery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-blue-500 group-hover:bg-blue-700 text-white p-4 rounded-b-lg flex-1 flex items-center transition-colors duration-300">
                <h3 className="text-lg font-medium flex items-center justify-between w-full">
                  Steam Cleaning Upholstery
                  <ArrowRight className="w-5 h-5" />
                </h3>
              </div>
            </div>

            {/* Steam Cleaning Mattress and Vehicle */}
            <div className="group cursor-pointer flex flex-col h-full">
              <div className="aspect-[4/3] rounded-t-lg overflow-hidden mb-0">
                <img
                  src="https://avatars.mds.yandex.net/i?id=8828bcf33128c71acbc0d101235f6fc0_l-9237918-images-thumbs&n=13"
                  alt="Steam cleaning mattress and vehicle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-blue-500 group-hover:bg-blue-700 text-white p-4 rounded-b-lg flex-1 flex items-center transition-colors duration-300">
                <h3 className="text-lg leading-5 font-medium flex items-center justify-between w-full">
                  Steam Cleaning Mattress & Vehicle
                  <ArrowRight className="w-5 h-5" />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experts in the Science of Clean */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <img
                src="/images/professional-cleaner.webp"
                alt="Professional cleaner using advanced equipment"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-blue-950">
                GreenLine: Experts in the Science of Clean™
              </h2>
              
              <p className="text-xl font-semibold text-green-700">
                Eco-friendly people and technology you can trust.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Our GreenLine specialists use advanced steam cleaning technology to deliver a deeper, more thorough clean that lasts longer.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Our proprietary Zr™ Water technology cleans without harsh chemicals, soaps, or detergents. This eco-friendly approach removes dirt and grime while being safe for your family, pets, and the environment. Your carpets stay cleaner longer without toxic residue.
              </p>
              
              <p className="text-green-700 font-medium">
                See what our satisfied customers say!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-green-700 font-medium">100% Safe for Family, Pets, and Environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-green-700 font-medium">Advanced Steam Cleaning Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-green-700 font-medium">Certified Professional Cleaning Service</span>
                </div>
              </div>
              
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold">
                SCHEDULE SERVICE
              </Button>
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

      <ReviewsCarousel />

      {/* Google Reviews Section */}
      {/* <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-700">4.9/5 on Google</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "They did an awesome job deep cleaning our couch. Quick response time, he was here in less than 24 hours. Would highly recommend and will be using again!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                  P
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Peyton Campbell</p>
                  <p className="text-sm text-gray-500">3 months ago</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Anton did a wonderful job cleaning the apartment I'm moving out of. The carpet looks brand new. He was quick and professional! Will definitely recommend services in the future."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  N
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Nicole Cunningham</p>
                  <p className="text-sm text-gray-500">9 months ago</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Anton was awesome! Very responsive and helpful. He did a great job on my carpets 10/10 recommend. I will be calling him again!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Sarah Talcott</p>
                  <p className="text-sm text-gray-500">11 months ago</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://www.google.com/maps/place/Green+Line+Carpet+Cleaning/@39.8242645,-104.9505154,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View All Reviews on Google
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section> */}

      {/* Trust Badges Carousel */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto space-y-8">
          <Carousel className="w-full max-w-5xl mx-auto" opts={{ align: "start", loop: true }} plugins={[plugin1.current]}>
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/5">
                <img src="/images/logos/head-1.webp" alt="Trust Badge 1" className="h-16 w-auto object-contain mx-auto" />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/5">
                <img src="/images/logos/head-2.jpg" alt="Trust Badge 2" className="h-16 w-auto object-contain mx-auto" />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/5">
                <img src="/images/logos/head-3.jpg" alt="Trust Badge 3" className="h-20 w-auto object-contain mx-auto" />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/5">
                <img src="/images/logos/head-4.jpeg" alt="Trust Badge 4" className="h-16 w-auto object-contain mx-auto" />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/5">
                <img src="/images/logos/head-5.png" alt="Trust Badge 5" className="h-16 w-auto object-contain mx-auto" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          
          <Carousel className="w-full max-w-5xl mx-auto" opts={{ align: "start", loop: true }} plugins={[plugin2.current]}>
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/5">
                <img src="/images/logos/bottom-1.jpg" alt="Certification 1" className="h-16 w-auto object-contain mx-auto" />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/5">
                <img src="/images/logos/bottom-2.png" alt="Certification 2" className="h-16 w-auto object-contain mx-auto" />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/5">
                <img src="/images/logos/bottom-3.png" alt="Certification 3" className="h-20 w-auto object-contain mx-auto" />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/5">
                <img src="/images/logos/bottom-4.avif" alt="Certification 4" className="h-16 w-auto object-contain mx-auto" />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/5">
                <img src="/images/logos/bottom-5.jpg" alt="Certification 5" className="h-16 w-auto object-contain mx-auto" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>

    </div>
  );
}
