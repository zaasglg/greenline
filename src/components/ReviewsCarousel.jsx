"use client";

import { useState, useEffect } from "react";
import { Images, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";

const fallbackReviews = [
  {
    id: 1,
    text: "They did an awesome job deep cleaning our couch. Quick response time, he was here in less than 24 hours. Would highly recommend and will be using again!",
    author: "Nicole Cunningham",
    rating: 5,
    images: [
      "https://lh3.googleusercontent.com/geougc-cs/AB3l90AGTZHIuj9C2GY6jX6k7I28t2bUUNmCm7fFUo3K-gYObRtstIylOvZlPpL_hMAWaLpZY_n5Ks-U-6luR9GgAUTculU1C336jLz5_dfr00A7QZPJ-K4B_clx3GSYvIn5NI3BNhQ=w1200-h900-p"
    ]
  },
  {
    id: 2,
    text: "Anton did a wonderful job cleaning the apartment I’m moving out of (per the landlords request). The carpet looks brand new. He was quick and professional! Will definitely recommend services in the future.",
    author: "Nicole Cunningham",
    rating: 5,
    images: [
      "https://lh3.googleusercontent.com/geougc-cs/AB3l90CkJdNYjdVmN5ixf_NBugUDdO2mOJXT1Yip1t14x5v1r9V-LCkJxeFImTsHbFHslHNoVo-cGoWgqY_yDzpawoL7LBrJZ2F0rfgvT5U-brNoihL8x-E6gKvcwCLM79iPeKt86pk=w600-h450-p"
    ]
  },
  {
    id: 3,
    text: "Anton was awesome! Very responsive and helpful. He did a great job on my carpets 10/10 recommend. I will be calling him again!",
    author: "Sarah Talcott",
    rating: 5,
    images: [
      "https://lh3.googleusercontent.com/geougc-cs/AB3l90DR8SwkKbd2uiqVVB2DxLrc51wtSfjLaikH9MCNZC-RtsTf089W_3G99L7GGMi6UFt-xhIZthYoEpyRM9hYt_efXkL23Y0i-nktEdrUT6XCINdt0b3C9aUJHRk4BekVWzRxd-CO=w600-h450-p",
      "https://lh3.googleusercontent.com/geougc-cs/AB3l90A9me0RTXy25hyqvpZWfC9Je7JnlZysKPym5kIh8V6iZw-yUpS2Yn_sn7W0Kgk0H2PrlezLitMJaD4m2wN8_fPRYKcOdBYXnrbQ8FcQ3JZ8myuzryv47xxro7pFQXQncNOoLd3TAA=w600-h450-p",
      "https://lh3.googleusercontent.com/geougc-cs/AB3l90DL9XtNfmraHTr4GRU7H1DhrTXWv2vRsvd9ZTpBdzWxD37Nwxs1J4Zy5qstOenKUhwA3r7zArlR1St_oStahvcU5695JX4bVRRdRrx6wFq8DOTHlUvwdiFBJF_bo4y6mXRq2EE=w600-h450-p"
    ]
  },
  {
    id: 4,
    text: "I was in a time crunch for the holidays and needing a couch deep cleaning. I found Anton on Google and was able to connect with him right away for a quote. He was able to get me scheduled in less than 2 days time! He showed up day of service on time and was communicative the whole time (on his way, close, arrived). He completed our cleaning efficiently and gave us some great tips for ongoing couch care. Really appreciate his work and will definitely use his services again!",
    author: "Steph Stasi",
    rating: 5,
    images: [
      "https://lh3.googleusercontent.com/geougc-cs/AB3l90A4z48OjMi183l7_pB0V4e3WP8jpBlVCj-yk1FebF4DAJ3BflGew5anlF7TECT1n_Uih666XrJZfM-fURAlWmIlEJn9Qpa4COue3C7_AAHtfSQ4FCTwCk3zbmGBSg1KZuVoomzk=w1200-h900-p"
    ]
  },
  {
    id: 5,
    text: "Anton did a fabulous job cleaning our carpets. He was early, and eager to get to work. He was flexible with the carpe rooms we wanted clean. In one of our rooms, we have a big dirt stain, Anton was able to get it out. 10/10 recommend!",
    author: "Michael Rodriguez, Dallas",
    rating: 5,
    images: [
      "https://lh3.googleusercontent.com/geougc-cs/AB3l90CB-qB4XBEctPmDgUtRP_UoDKqTQ9BItKBRMeI_HOiFTNN2X0Zh8u4YriHoxibBn06GF5K4biihp7GGAkdnt8X9pRBsKJUkvX-REakob8LPlfHCnf4lVQPCpfC74YS5w0fD5fG1=w1200-h900-p",
    ]
  },
  {
    id: 6,
    text: "I recently hired GreenLine Carpet Cleaning to deep clean the carpets in my home, and I couldn't be happier with the results. From start to finish, their service was top-notch. The technician arrived right on time, was friendly, professional, and explained the entire cleaning process before starting. They used eco-friendly products, which was important to me since I have kids. I was amazed at how much dirt they pulled out — my carpets looked and smelled brand new afterward. Overall, it was a fantastic experience. I highly recommend GreenLine to anyone looking for reliable and effective carpet cleaning. Worth every penny!",
    author: "Yadira Izquierdo",
    rating: 5
  }
];

export default function ReviewsCarousel() {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 2xl:w-8 2xl:h-8 ${i < rating ? 'fill-blue-500 text-blue-500' : 'fill-gray-300 text-gray-300'}`} 
      />
    ));
  };

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
              {fallbackReviews.map((review) => (
                <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 2xl:p-8 text-center">
                    <div className="flex justify-center space-x-1 mb-4 2xl:mb-6">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-slate-700 2xl:text-2xl leading-relaxed mb-6 2xl:mb-8 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <p className="text-slate-600 2xl:text-xl font-medium mb-4 2xl:mb-6">~ {review.author}</p>
                    
                    {/* Images section */}
                    {review.images && review.images.length > 0 && (
                      <div className="mt-4 2xl:mt-6">
                        {review.images.length === 1 ? (
                          // Single image
                          <div className="flex justify-center">
                            <img
                              src={review.images[0]}
                              alt="Review photo"
                              className="max-w-full h-auto max-h-48 2xl:max-h-64 rounded-lg shadow-md object-cover"
                            />
                          </div>
                        ) : (
                          // Multiple images grid
                          <div className="grid grid-cols-2 gap-2 2xl:gap-3">
                            {review.images.slice(0, 4).map((image, index) => (
                              <div key={index} className="relative">
                                <img
                                  src={image}
                                  alt={`Review photo ${index + 1}`}
                                  className="w-full h-24 2xl:h-32 object-cover rounded-lg shadow-md"
                                />
                                {review.images.length > 4 && index === 3 && (
                                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-semibold text-sm 2xl:text-lg">
                                      +{review.images.length - 4}
                                    </span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
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
