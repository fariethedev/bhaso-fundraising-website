"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) api.scrollTo(index);
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${current === index + 1 ? "bg-black" : "bg-neutral-light"
      }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Testimonial15() {
  const carousel = useCarousel();

  // ✅ Added 4 testimonial items instead of 2
  const testimonials = [
    {
      quote:
        "BHASO has transformed our community by providing essential support and resources. Their dedication to those affected by HIV/AIDS and climate change is truly inspiring.",
      name: "Jane Doe",
      role: "Community Leader, Harare",
    },
    {
      quote:
        "BHASO’s work is life-changing. They’ve given us hope, education, and healthcare.",
      name: "John Smith",
      role: "Teacher, Bulawayo",
    },
    {
      quote:
        "We’re proud partners with BHASO in addressing environmental challenges.",
      name: "Thandi Moyo",
      role: "NGO Partner, Gweru",
    },
    {
      quote:
        "They’ve empowered the youth in our area. A real force for good!",
      name: "Peter Ncube",
      role: "Youth Advocate, Mutare",
    },
  ];

  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <Carousel
          setApi={carousel.setApi}
          opts={{ loop: true, align: "start" }}
          className="overflow-hidden"
        >
          <div className="relative pt-20 md:pt-0 md:pb-20">
            <CarouselContent className="ml-0">
              {testimonials.map((testimonial, i) => (
                <CarouselItem key={i} className="pl-0">
                  <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
                    <div className="order-last md:order-first">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt={`Testimonial image ${i + 1}`}
                        className="aspect-square w-full rounded-image object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="mb-6 flex md:mb-8">
                        {[...Array(5)].map((_, index) => (
                          <BiSolidStar key={index} className="size-6" />
                        ))}
                      </div>
                      {/* ✅ Smaller headline font */}
                      <blockquote className="text-base font-medium md:text-lg font-sans">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p>{testimonial.role}</p>
                        </div>
                        <div className="mx-4 w-px self-stretch bg-background-alternative sm:mx-0" />
                        <div>
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                            alt="Webflow logo"
                            className="max-h-12"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* ✅ Navigation Buttons and Dots — work for all items */}
            <div className="absolute top-0 flex w-full items-start justify-between md:top-auto md:bottom-0 md:items-end">
              <div className="mt-2.5 flex w-full items-start justify-start md:mt-0 md:mb-2.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={carousel.handleDotClick(index)}
                    className={carousel.dotClassName(index)}
                  />
                ))}
              </div>
              <div className="flex items-end justify-end gap-2 md:gap-4">
                <CarouselPrevious className="static top-0 right-0 size-12 -translate-y-0" />
                <CarouselNext className="static top-0 right-0 size-12 -translate-y-0" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
