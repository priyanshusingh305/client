// components/herosection/HeroSection.js
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-36 relative bg-cover bg-center pb-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
        style={{ backgroundImage: "url(/hero-bg.png)" }}
      ></div>

      {/* Padding */}
      <div className="px-27 z-20 relative">
        {/* Container */}
        <div className="w-full max-w-76.5 mx-auto">
          {/* Hero Component */}
          <div className="flex flex-col items-center gap-8">
            {/* Hero Top Wrapper */}
            <div className="flex flex-col gap-8">
              {/* Badges Wrapper */}
              <div className="flex justify-center items-center gap-2.5">
                <img
                  src="/hero-producthunt.svg"
                  alt="Product Hunt Badge"
                  className="h-10"
                />
                <img
                  src="/hero-badge.svg"
                  alt="Hero Badge"
                  className="h-9.75"
                />
              </div>
              
              <div className="flex flex-col items-center max-w-[43.69rem] gap-3">
                {/* Hero H1 */}
                <h1 className="text-gray-900 text-center text-[48.2px] font-light leading-none whitespace-nowrap">
                  Don&apos;t create a survey.
                  <br />
                  <span className="font-inter text-[56px] leading-[56px] font-bold">
                    Start a conversation
                  </span>
                </h1>

                {/* Hero Text */}
                <div className="font-inter text-[1.7rem] leading-6 font-normal text-gray-500 text-center whitespace-nowrap">
                  10x your insights with AI surveys and interviews
                </div>
              </div>
              
              {/* Hero Button Wrapper */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center gap-2 relative cursor-default">
                  <Link
                    href="/get-started"
                    prefetch={false}
                    className="flex justify-center items-center gap-3.5 text-white rounded-lg px-4 py-2 text-base font-semibold leading-6 transition-colors bg-gradient-to-r from-rose-400 to-indigo-400"
                  >
                    <div>Get Started Free</div>
                    <ArrowRight />
                  </Link>
                  <div className="text-gray-700 italic text-sm leading-relaxed">
                    No credit card required
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Image Wrapper */}
            <div className="w-[63.5rem] h-80 overflow-hidden">
              <img
                src="/image.png"
                loading="eager"
                sizes="100vw"
                alt="hero image"
                className="w-[63.5rem] h-[48rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}