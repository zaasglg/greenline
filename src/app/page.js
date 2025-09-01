"use client";

// Mobile Hero Section
function HeroMobileSection() {
  return (
    <section className="block md:hidden relative min-h-[900px] bg-gradient-to-b from-sky-300 via-sky-400 to-blue-600">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col items-center pt-8 pb-4">
          {/* Logos above hero title */}
          <div className="flex justify-center items-center space-x-6 mb-6">
            <img src="/images/logos/bottom-3.png" alt="Partner Logo 1" className="h-20 w-20 object-contain" />
            <img src="/images/logos/customer_satisfaction.png" alt="Partner Logo 1" className="h-20 w-20 object-contain" />
            <img src="/images/logos/money_back.png" alt="Partner Logo 2" className="h-20 w-20 object-contain" />
            <img src="/images/logos/eco-friendly.png" alt="Partner Logo 3" className="h-20 w-20 object-contain" />
          </div>
          <h1 className="text-3xl font-bold leading-tight text-white uppercase max-w-xl text-center mb-4">
            GreenLine, the Right <br /> Way to Clean
          </h1>
          <p className="text-lg leading-relaxed max-w-xl text-white/90 text-center mb-6 px-2">
            Refresh and renew your carpets the safe, professional way with GreenLine. We clean using our proprietary Water—no soaps or harsh chemicals. Enjoy a deep, fast-drying clean that's safe for your family and pets, and trusted by over 400,000 customers each year.
          </p>
          <div className="flex flex-row items-center justify-center space-x-6 mb-8">
            <Link href="/booking">
              <Button
                size="lg"
                className="w-[200px] h-[56px] bg-sky-700 hover:bg-sky-900 text-white font-bold px-8 py-3 text-lg curosr-pointer"
              >
                BOOK ONLINE
              </Button>
            </Link>
            <img src="/images/logos/furgon.png" className="h-16 w-auto" />
          </div>
          <div
            className="absolute left-0 bottom-0 w-full h-[300px]"
            style={{
              clipPath: 'circle(338px at 51% 342px)',
              WebkitClipPath: 'circle(338px at 51% 332px)',
            }}
          >
            <img
              src="/images/professional-cleaner.jpg"
              alt="Professional carpet cleaner at work"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'bottom' }} // прижатие к низу
            />
          </div>


        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Leaf, Target, Users, Award, Phone, ClipboardList, Sparkles, ShieldCheck, Heart, Star, Quote } from "lucide-react";
import { ChevronRight } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const plugin1 = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  const plugin2 = React.useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));

  return (
    <div className="min-h-screen">
      {/* Mobile Hero Section */}
      <HeroMobileSection />
      {/* Desktop Hero Section */}
      <section className="hidden md:block relative min-h-[400px] md:h-[550px] lg:h-[570px] 2xl:h-[950px] bg-gradient-to-b from-sky-300 via-sky-400 to-blue-600">
        <div className="w-10/12 lg:w-10/12 2xl:w-10/12 mx-auto px-4 h-full">
          <div className="h-full">
            {/* Left Logos - Vertical */}
            <div className="absolute left-4 lg:left-4.5 2xl:left-8 top-1/2 -translate-y-1/2 space-y-4 lg:space-y-4.5 2xl:space-y-8 z-20">
            <div className="p-2">
                <img src="/images/logos/bottom-3.png" alt="Partner Logo 1" className="h-28 w-28 lg:h-30 lg:w-30 2xl:h-44 2xl:w-44 object-contain" />
              </div>
              <div className="p-2">
                <img src="/images/logos/customer_satisfaction.png" alt="Partner Logo 1" className="h-28 w-28 lg:h-30 lg:w-30 2xl:h-44 2xl:w-44 object-contain" />
              </div>
              <div className="p-2">
                <img src="/images/logos/money_back.png" alt="Partner Logo 2" className="h-28 w-28 lg:h-30 lg:w-30 2xl:h-44 2xl:w-44 object-contain" />
              </div>
              <div className="p-2">
                <img src="/images/logos/eco-friendly.png" alt="Partner Logo 3" className="h-28 w-28 lg:h-30 lg:w-30 2xl:h-44 2xl:w-44 object-contain" />
              </div>
            </div>

            {/* Left Content */}
            <div className="text-white space-y-6 lg:space-y-6.5 2xl:space-y-10 relative z-10 h-full flex flex-col justify-center ml-16 lg:ml-17 2xl:ml-24">
              <h1 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-7xl font-bold leading-tight text-white uppercase max-w-lg lg:max-w-xl 2xl:max-w-3xl">
                GreenLine, the Right <br /> Way to Clean
              </h1>

              <p className="text-base md:text-md lg:text-base 2xl:text-3xl leading-relaxed max-w-lg lg:max-w-md 2xl:max-w-3xl text-white/90">
                Refresh and renew your carpets the safe, professional way with GreenLine. We clean using our proprietary Water—no soaps or harsh chemicals. Enjoy a deep, fast-drying clean that's safe for your family and pets, and trusted by over 400,000 customers each year.
              </p>

              <Link href="/booking">
                <Button
                  size="lg"
                  className="w-[300px] h-[50px] lg:w-[310px] lg:h-[52px] 2xl:w-[500px] 2xl:h-[90px] bg-emerald-400 hover:bg-emerald-600 text-white font-bold px-10 py-5 lg:px-10.5 lg:py-5 2xl:px-14 2xl:py-7 text-xl lg:text-xl 2xl:text-3xl curosr-pointer"
                >
                  BOOK ONLINE
                </Button>
              </Link>
            </div>

            <div className="absolute bottom-0 right-0 lg:right-[2%] 2xl:right-[2%] w-[200px] lg:w-[215px] 2xl:w-[400px] z-50">
              <img src="/images/logos/furgon.png" />
            </div>

            {/* Right Image */}
            <div className="absolute right-0 top-0 bottom-0 w-[50%] lg:w-[51%] 2xl:w-[60%]" style={{clipPath: 'circle(77% at 70% 50%)'}}>
              <img
                src="/images/professional-cleaner.jpg"
                alt="Professional carpet cleaner at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-12">
        <div className="w-11/12 mx-auto">
          <Carousel
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-1">
              <CarouselItem className="pl-1 basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex items-center justify-center p-4 transition-shadow duration-300">
                  <img src="/images/logos/nextdoor.jpeg" alt="Partner 1" className="h-32 w-40 lg:h-34 lg:w-42 2xl:h-48 2xl:w-56 object-contain transition-opacity duration-300 crisp-edges" />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex items-center justify-center p-4 transition-shadow duration-300">
                  <img src="/images/logos/groupon.jpg" alt="Partner 2" className="h-32 w-40 lg:h-34 lg:w-42 2xl:h-48 2xl:w-56 object-contain transition-opacity duration-300 crisp-edges" />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex items-center justify-center p-4 transition-shadow duration-300">
                  <img src="/images/logos/facebook.png" alt="Partner 3" className="h-32 w-40 lg:h-34 lg:w-42 2xl:h-48 2xl:w-56 object-contain transition-opacity duration-300 crisp-edges" />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex items-center justify-center p-4 transition-shadow duration-300">
                  <img src="/images/logos/yelp.png" alt="Partner 4" className="h-32 w-40 lg:h-34 lg:w-42 2xl:h-48 2xl:w-56 object-contain transition-opacity duration-300 crisp-edges" />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex items-center justify-center p-4 transition-shadow duration-300">
                  <img src="/images/logos/5start-google.png" alt="Partner 5" className="h-32 w-40 lg:h-34 lg:w-42 2xl:h-48 2xl:w-56 object-contain transition-opacity duration-300 crisp-edges" />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex items-center justify-center p-4 transition-shadow duration-300">
                  <img src="/images/logos/thumbtack.png" alt="Partner 6" className="h-32 w-40 lg:h-34 lg:w-42 2xl:h-48 2xl:w-56 object-contain transition-opacity duration-300 crisp-edges" />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex items-center justify-center p-4 transition-shadow duration-300">
                  <img src="/images/logos/angi.png" alt="Partner 7" className="h-32 w-40 lg:h-34 lg:w-42 2xl:h-48 2xl:w-56 object-contain transition-opacity duration-300 crisp-edges" />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white relative">
        <div className="w-10/12 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl 2xl:text-7xl font-bold text-blue-950 mb-4">
              Cleaning Surfaces That Matter Most
            </h2>
            <p className="text-slate-600 max-w-4xl lg:max-w-4xl 2xl:max-w-7xl mx-auto text-lg 2xl:text-2xl">
              You deserve more than just clean carpets! Keep you and your family healthier by trusting us to expertly remove dirt and grime from living spaces and surfaces throughout your home with our non-toxic proprietary Water, which is free of dirt-attracting soaps, detergents, and fragrances.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 2xl:gap-12 w-9/12 2xl:w-9/12 mx-auto">
            {/* Steam Carpet Cleaning */}
            <Link href="/services/carpet-cleaning" className="group cursor-pointer flex flex-col h-full">
              <div className="aspect-[4/3] rounded-t-lg overflow-hidden mb-0">
                <img
                  src="/images/carpet.jpg"
                  alt="Steam carpet cleaning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-sky-400 group-hover:bg-sky-600 text-white p-4 2xl:p-8 rounded-b-lg flex-1 flex items-center transition-colors duration-300">
                <h3 className="text-lg 2xl:text-3xl font-medium flex items-center justify-between w-full">
                  Steam Carpet Cleaning
                  <ChevronRight className="w-5 h-5 2xl:w-8 2xl:h-8" />
                </h3>
              </div>
            </Link>

            {/* Steam Cleaning Upholstery */}
            <Link href="/services/upholstery-cleaning-and-sanitizing" className="group cursor-pointer flex flex-col h-full">
              <div className="aspect-[4/3] rounded-t-lg overflow-hidden mb-0">
                <img
                  src="/images/sofa.jpg"
                  alt="Steam cleaning upholstery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-sky-400 group-hover:bg-sky-600 text-white p-4 2xl:p-8 rounded-b-lg flex-1 flex items-center transition-colors duration-300">
                <h3 className="text-lg 2xl:text-3xl leading-8 font-medium flex items-center justify-between w-full">
                  Steam Cleaning Upholstery
                  <ChevronRight className="w-5 h-5 2xl:w-8 2xl:h-8" />
                </h3>
              </div>
            </Link>

            {/* Steam Cleaning Mattress and Vehicle */}
            <Link href="/services/mattress-cleaning" className="group cursor-pointer flex flex-col h-full">
              <div className="aspect-[4/3] rounded-t-lg overflow-hidden mb-0">
                <img
                  src="/images/matrex.webp"
                  alt="Steam cleaning mattress and vehicle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-sky-400 group-hover:bg-sky-600 text-white p-4 2xl:p-8 rounded-b-lg flex-1 flex items-center transition-colors duration-300">
                <h3 className="text-lg 2xl:text-3xl leading-8 font-medium flex items-center justify-between w-full">
                  Steam Cleaning Mattress & Vehicle
                  <ChevronRight className="w-5 h-5 2xl:w-8 2xl:h-8" />
                </h3>
              </div>
            </Link>
          </div>
        </div>

        {/* Coupons - Right Side */}
        <div className="hidden lg:block absolute right-0 top-[20%] -translate-y-1/2 space-y-3">
          {/* Free Service Call Coupon */}
          <div className="bg-white p-4 2xl:p-6 rounded-l-lg border-l-2 border-t-2 border-b-2 border-dashed border-red-400 w-56 2xl:w-[450px] transition-all duration-200 hover:bg-red-100 hover:border-red-500 cursor-pointer">
            <div className="text-left">
              <h3 className="text-base 2xl:text-4xl font-bold text-red-400 mb-3">FREE SERVICE <br /> CALL</h3>
              <p className="text-red-400 font-semibold mb-1 text-xs 2xl:text-2xl">FOR CARPET & UPHOLSTERY CLEANING</p>
            </div>
          </div>


          {/* $29 Carpet Cleaning Coupon */}
          <div className="bg-white p-4 2xl:p-6 rounded-l-lg border-l-2 border-t-2 border-b-2 border-dashed border-red-400 w-56 2xl:w-[450px] transition-all duration-200 hover:bg-red-100 hover:border-red-500 cursor-pointer">
            <div className="text-left">
              <h3 className="text-base 2xl:text-4xl font-bold text-red-400 mb-3">GET UP TO <br />  $120 OFF</h3>
              <p className="text-red-400 font-semibold text-xs 2xl:text-2xl">LEAVE A REQUEST <br /> RIGHT NOW!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experts in the Science of Clean */}
      <section className="py-20 2xl:py-32 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 2xl:gap-20 items-center">
            {/* Left Image */}
            <div className="relative">
              <img
                src="/images/professional-cleaner.webp"
                alt="Professional cleaner using advanced equipment"
                className="w-full h-[700px] 2xl:h-[900px] object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6 2xl:space-y-8">
              <h2 className="text-4xl 2xl:text-6xl font-bold text-blue-950">
                GreenLine: Experts in the Science of Clean
              </h2>

              <p className="text-xl 2xl:text-3xl font-semibold text-green-700">
                Eco-friendly people and technology you can trust.
              </p>

              <p className="text-gray-600 leading-relaxed text-base 2xl:text-3xl">
                Our GreenLine specialists use advanced steam cleaning technology to deliver a deeper, more thorough clean that lasts longer.
              </p>

              <p className="text-gray-600 leading-relaxed text-base 2xl:text-3xl">
                Our proprietary Water technology cleans without harsh chemicals, soaps, or detergents. This eco-friendly approach removes dirt and grime while being safe for your family, pets, and the environment. Your carpets stay cleaner longer without toxic residue.
              </p>

              <p className="text-green-700 font-medium text-base 2xl:text-3xl">
                See what our satisfied customers say!
              </p>

              <div className="space-y-3 2xl:space-y-4">
                <div className="flex items-center space-x-3 2xl:space-x-4">
                  <div className="w-6 2xl:w-8 h-6 2xl:h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 2xl:w-6 h-4 2xl:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-green-700 font-medium text-base 2xl:text-2xl">100% Safe for Family, Pets, and Environment</span>
                </div>
                <div className="flex items-center space-x-3 2xl:space-x-4">
                  <div className="w-6 2xl:w-8 h-6 2xl:h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 2xl:w-6 h-4 2xl:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-green-700 font-medium text-base 2xl:text-2xl">Advanced Steam Cleaning Technology</span>
                </div>
                <div className="flex items-center space-x-3 2xl:space-x-4">
                  <div className="w-6 2xl:w-8 h-6 2xl:h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 2xl:w-6 h-4 2xl:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-green-700 font-medium text-base 2xl:text-2xl">Certified Professional Cleaning Service</span>
                </div>
              </div>

              <Link href="/booking">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 2xl:px-12 py-3 2xl:py-10 text-lg 2xl:text-3xl font-semibold">
                  SCHEDULE SERVICE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Select Our Services Section */}
      <section className="py-20 2xl:py-40 px-4 bg-white">
        <div className="w-9/12 mx-auto">
          <div className="text-center mb-16 2xl:mb-32">
            <h2 className="text-4xl 2xl:text-6xl font-bold text-gray-900 mb-4 2xl:mb-12">
              Why Select <span className="text-blue-500">Our Services?</span>
            </h2>
            <div className="w-16 2xl:w-40 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 2xl:gap-5">
            {/* Reliable & Professional Eco-Friendly Cleaning */}
            <div className="flex flex-col items-start p-6 2xl:p-10">
              <div className="w-20 2xl:w-40 h-20 2xl:h-40 bg-blue-500 rounded-full flex items-start justify-start mb-4 2xl:mb-12">
                <img src="/images/icons/professional_services.svg" alt="Professional services icon" className="p-2 2xl:p-3 text-white" />
              </div>
              <h3 className="text-xl 2xl:text-4xl font-bold text-gray-900 mb-2 2xl:mb-6 text-start">Reliable & Professional Eco-Friendly Cleaning</h3>
              <div className="w-12 2xl:w-24 h-1 bg-blue-500 mb-4 2xl:mb-12"></div>
              <p className="text-gray-600 mb-4 2xl:mb-12 text-start text-base 2xl:text-4xl">
                For reliable and professional eco-friendly cleaning, trust GreenLine.<br />Our team is dedicated to delivering perfection in every steam carpet cleaning and upholstery cleaning service — earning not just your trust, but your satisfaction.
              </p>
              <Link href="/booking">
                <Button className="bg-blue-500 text-white px-6 2xl:px-20 py-2 2xl:py-8 rounded hover:bg-blue-600 transition-colors text-base 2xl:text-3xl">
                  SCHEDULE SERVICE
                </Button>
              </Link>
            </div>

            {/* Affordable Pricing */}
            <div className="flex flex-col items-start p-6 2xl:p-5">
              <div className="w-20 2xl:w-40 h-20 2xl:h-40 bg-blue-500 rounded-full flex items-start justify-start mb-4 2xl:mb-12">
                <img src="/images/icons/second_icon.svg" alt="Professional services icon" className="p-2 2xl:p-3 text-white" />
              </div>
              <h3 className="text-xl 2xl:text-4xl font-bold text-gray-900 mb-2 2xl:mb-6 text-left">Affordable Pricing</h3>
              <div className="w-12 2xl:w-24 h-1 bg-blue-500 mb-4 2xl:mb-12"></div>
              <p className="text-gray-600 mb-4 2xl:mb-12 text-left text-base 2xl:text-4xl">
                We offer some of the most competitive prices for eco-friendly cleaning — high quality at a great value.
              </p>
              <Link href="/booking">
                <Button className="bg-blue-500 text-white px-6 2xl:px-20 py-2 2xl:py-8 rounded hover:bg-blue-600 transition-colors text-base 2xl:text-3xl">
                  SCHEDULE SERVICE
                </Button>
              </Link>
            </div>

            {/* Eco-Friendly Steam Cleaning */}
            <div className="flex flex-col items-start p-6 2xl:p-5">
              <div className="w-20 2xl:w-40 h-20 2xl:h-40 bg-blue-500 rounded-full flex items-start justify-start mb-4 2xl:mb-12">
                <img src="/images/icons/third_icon.svg" alt="Professional services icon" className="p-2 2xl:p-3 text-white" />
              </div>
              <h3 className="text-xl 2xl:text-4xl font-bold text-gray-900 mb-2 2xl:mb-6 text-left">Eco-Friendly Steam Cleaning</h3>
              <div className="w-12 2xl:w-24 h-1 bg-blue-500 mb-4 2xl:mb-12"></div>
              <p className="text-gray-600 mb-4 2xl:mb-12 text-left text-base 2xl:text-4xl">
                We use only safe, biodegradable, and pet-friendly products from trusted suppliers such as TMF and Chemspec. Our eco-friendly approach ensures a healthier home and care for the environment.
              </p>
              <Link href="/booking">
                <Button className="bg-blue-500 text-white px-6 2xl:px-20 py-2 2xl:py-8 rounded hover:bg-blue-600 transition-colors text-base 2xl:text-3xl">
                  SCHEDULE SERVICE
                </Button>
              </Link>
            </div>

            {/* Three-Stage Eco Cleaning */}
            <div className="flex flex-col items-start p-6 2xl:p-5">
              <div className="w-20 2xl:w-40 h-20 2xl:h-40 bg-blue-500 rounded-full flex items-start justify-start mb-4 2xl:mb-12">
                <img src="/images/icons/fourth_icon.svg" alt="Professional services icon" className="p-2 2xl:p-3 text-white" />
              </div>
              <h3 className="text-xl 2xl:text-4xl font-bold text-gray-900 mb-2 2xl:mb-6 text-left">Three-Stage Eco Cleaning</h3>
              <div className="w-12 2xl:w-24 h-1 bg-blue-500 mb-4 2xl:mb-12"></div>
              <p className="text-gray-600 mb-4 2xl:mb-12 text-left text-base 2xl:text-4xl">
                Our well-structured process includes eco pre-spray treatment, alkaline steam cleaning, and chemical neutralization — delivering unmatched and long-lasting results.
              </p>
              <Link href="/booking">
                <Button className="bg-blue-500 text-white px-6 2xl:px-20 py-2 2xl:py-8 rounded hover:bg-blue-600 transition-colors text-base 2xl:text-3xl">
                  SCHEDULE SERVICE
                </Button>
              </Link>
            </div>

            {/* Fast Drying Time */}
            <div className="flex flex-col items-start p-6 2xl:p-5">
              <div className="w-20 2xl:w-40 h-20 2xl:h-40 bg-blue-500 rounded-full flex items-start justify-start mb-4 2xl:mb-12">
                <img src="/images/icons/fifth_icon.svg" alt="Professional services icon" className="p-2 2xl:p-3 text-white" />
              </div>
              <h3 className="text-xl 2xl:text-4xl font-bold text-gray-900 mb-2 2xl:mb-6 text-left">Fast Drying Time</h3>
              <div className="w-12 2xl:w-24 h-1 bg-blue-500 mb-4 2xl:mb-12"></div>
              <p className="text-gray-600 mb-4 2xl:mb-12 text-left text-base 2xl:text-4xl">
                The eco steam cleaning method provides a quick drying time, so you can enjoy your refreshed carpets and furniture almost immediately. Drying time may vary depending on conditions.
              </p>
              <Link href="/booking">
                <Button className="bg-blue-500 text-white px-6 2xl:px-20 py-2 2xl:py-8 rounded hover:bg-blue-600 transition-colors text-base 2xl:text-3xl">
                  SCHEDULE SERVICE
                </Button>
              </Link>
            </div>

            {/* Advanced Truck Mount and Portable Equipment */}
            <div className="flex flex-col items-start p-6 2xl:p-5">
              <div className="w-20 2xl:w-40 h-20 2xl:h-40 bg-blue-500 rounded-full flex items-start justify-start mb-4 2xl:mb-12">
                <img src="/images/icons/sixth_icon.svg" alt="Professional services icon" className="p-2 2xl:p-3 text-white" />
              </div>
              <h3 className="text-xl 2xl:text-4xl font-bold text-gray-900 mb-2 2xl:mb-6 text-left">Advanced Truck Mount and Portable Equipment</h3>
              <div className="w-12 2xl:w-24 h-1 bg-blue-500 mb-4 2xl:mb-12"></div>
              <p className="text-gray-600 mb-4 2xl:mb-12 text-left text-base 2xl:text-4xl">
                Powerful truck-mounted systems allow us to efficiently clean large areas. For apartments and high floors, we also have portable equipment — bringing eco-friendly steam cleaning wherever you need it.
              </p>
              <Link href="/booking">
                <Button className="bg-blue-500 text-white px-6 2xl:px-20 py-2 2xl:py-8 rounded hover:bg-blue-600 transition-colors text-base 2xl:text-3xl">
                  SCHEDULE SERVICE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>ы

      <ReviewsCarousel />

    </div>
  );
}
