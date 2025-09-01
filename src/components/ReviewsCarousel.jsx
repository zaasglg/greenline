"use client";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    text: "The tech that came was very professional and insured. He was training a new employee, and made sure to teach him how to professionally interact with clients and ensure cleanliness prior to leaving. We were happy with the services provided.",
    author: "Christopher Bourbon, Des Moines"
  },
  {
    id: 2,
    text: "You do not leave the floor crunchy when you are done: I cannot feel any of the cleaning solution that you used when I walk on the carpets. The techs you sent were thorough AND very mindful of keeping everything clean (booties on their feet, drape...",
    author: "Penny T., Minneapolis"
  },
  {
    id: 3,
    text: "Your young technician, Grey, did an outstanding job. Carpet we figured was going to have to be replaced because of pet stains looks 100% better now!",
    author: "Linda Peyton, Kansas City"
  },
  {
    id: 4,
    text: "Excellent service! The team was professional, on time, and my carpets look amazing. They used eco-friendly products which was important to our family. Highly recommend!",
    author: "Sarah Mitchell, Chicago"
  },
  {
    id: 5,
    text: "Amazing results! My upholstery looks brand new. The technicians were courteous and explained everything they were doing. Will definitely use again.",
    author: "Michael Rodriguez, Dallas"
  },
  {
    id: 6,
    text: "Professional team with attention to detail. They arrived on time, worked efficiently, and left my home spotless. The eco-friendly approach was perfect for my family with young children.",
    author: "Jennifer Adams, Phoenix"
  }
];

export default function ReviewsCarousel() {
  return (
    <section className="py-20 2xl:py-32 px-4 bg-white">
      <div className="w-8/12 2xl:w-10/12 mx-auto">
        <div className="text-center mb-16 2xl:mb-24">
          <div className="flex justify-center items-center space-x-1 mb-6 2xl:mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 2xl:w-12 2xl:h-12 fill-orange-400 text-orange-400" />
            ))}
          </div>
          <h2 className="text-4xl 2xl:text-8xl font-bold text-slate-900 mb-6 2xl:mb-8">
            Our Reviews
          </h2>
          <p className="text-lg 2xl:text-3xl text-slate-600 max-w-4xl mx-auto">
            We love our customers, and they love us back as 90% of our customers would refer GreenLine Cleaning to a friend.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 2xl:p-8 text-center">
                    <div className="flex justify-center space-x-1 mb-4 2xl:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 2xl:w-8 2xl:h-8 fill-blue-500 text-blue-500" />
                      ))}
                    </div>
                    <p className="text-slate-700 2xl:text-2xl leading-relaxed mb-6 2xl:mb-8 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <p className="text-slate-600 2xl:text-xl font-medium">~ {review.author}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 2xl:mt-16">
          <Link href="/booking">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg 2xl:px-16 2xl:py-6 2xl:text-3xl font-semibold">
              SCHEDULE SERVICE
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
