"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Blog41() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Blog</p>
              <h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
                Latest Insights and Updates
              </h2>
              <p className="md:text-md">Explore our recent blog posts below.</p>
            </div>
          </div>
          <div className="hidden md:flex">
            <Button title="View all" variant="secondary">
              View all
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="mr-4 mb-2 inline-block max-w-full text-sm font-semibold"
            >
              Health
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="text-xl font-bold md:text-2xl">
                Understanding HIV/AIDS in Zimbabwe
              </h5>
            </a>
            <p>A deep dive into the ongoing challenges faced.</p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar 3"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-sm font-semibold">John Doe</h6>
                <div className="flex items-center">
                  <p className="text-sm">11 Jan 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">5 min read</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="mr-4 mb-2 inline-block max-w-full text-sm font-semibold"
            >
              Climate
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="text-xl font-bold md:text-2xl">
                Climate Change and Health
              </h5>
            </a>
            <p>How climate impacts health in our communities.</p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar 3"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-sm font-semibold">Jane Smith</h6>
                <div className="flex items-center">
                  <p className="text-sm">15 Feb 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">7 min read</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="mr-4 mb-2 inline-block max-w-full text-sm font-semibold"
            >
              Awareness
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="text-xl font-bold md:text-2xl">
                Raising Awareness on HIV
              </h5>
            </a>
            <p>Join us in spreading crucial information about HIV.</p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar 3"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-sm font-semibold">Alice Brown</h6>
                <div className="flex items-center">
                  <p className="text-sm">20 Mar 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">4 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Button title="View all" variant="secondary" className="mt-10">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
