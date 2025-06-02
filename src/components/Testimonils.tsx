"use client";
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      image: "https://cdn.prod.website-files.com/668eeec9e813ea8b3d77070e/67bc651d9289802c37a43002_63d92f46c88a747de14e31d4_Avatar%252001.png.webp",
      quote: "Implementing TheySaid has led to a 5-10% increase in qualified leads from our existing customers in just a few months while reducing churn. The results speak for themselves.",
      name: "Alex Farmer",
      title: "Chief Revenue Office @ Nezasa"
    },
    {
      id: 2,
      image: "https://cdn.prod.website-files.com/668eeec9e813ea8b3d77070e/67bc653c6a16e358d763ffc5_63d92f46c88a747de14e31d4_Avatar%252001.png-1.webp",
      quote: "Integrating TheySaid has been a game-changer. We've seen a 5-10% decrease in customer churn with an increase in upsell opportunities since its implementation.",
      name: "Srikrishnan Ganesan",
      title: "Co-Founder & CEO @ Rocketlane"
    },
    {
      id: 3,
      image: "https://cdn.prod.website-files.com/668eeec9e813ea8b3d77070e/67bc654e992e70897ca823e0_image.webp",
      quote: "How did TheySaid AI come up with such great question recommendations? These are questions that our teams really want to know and discussed internally a lot. I am impressed!",
      name: "Brook P.",
      title: "VP, Marketing @ DX"
    },
    {
      id: 4,
      image: "https://cdn.prod.website-files.com/668eeec9e813ea8b3d77070e/67bc6581e8ddb436818ef0dd_image-1.webp",
      quote: "TheySaid's AI Surveys help us step up our insight gathering game. Its smarter, and more engaging for customers.",
      name: "Maggie C.",
      title: "VP, Product Design @ ClickUp"
    },
    {
      id: 5,
      image: "https://cdn.prod.website-files.com/668eeec9e813ea8b3d77070e/67bc65a05c7205c4cab83839_image-2.webp",
      quote: "Really easy to use and I think this might be one of the best way to engage with your customers! Platform will really boost your customer engagement.",
      name: "Danny L.",
      title: "Co-Founder"
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(testimonials.length - 1, prev + 1));
  };

  return (
    <section className=" py-[4.5rem] overflow-hidden">
      <div className=" max-w-[76.5rem] mx-auto">
        {/* Header with Navigation */}
        <div className="flex justify-between items-center w-full mb-[5rem]">
          <h2 className="text-[36px] leading-[100%] font-['] font-semibold text-gray-900 max-w-[26.25rem]">
            See what our customers had to say.
          </h2>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`w-[37.94px] h-[37.94px] rounded-4xl border flex items-center justify-center transition-all ${
                currentIndex === 0
                  ? 'bg-transparent border-[#9CA0A6] text-[#9CA0A6]'
                  : 'bg-[#111827] border-gray-800 text-gray-50 hover:bg-gray-700'
              }`}
            >
              <ArrowLeft className="w-6 h-6" strokeWidth={1.5} radius={4} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= testimonials.length - 1}
              className={`w-[37.94px] h-[37.94px] rounded-full border flex items-center justify-center transition-all ${
                currentIndex >= testimonials.length - 1
                  ? 'bg-transparent border-[#9CA0A6] text-[#9CA0A6]'
                  : 'bg-[#111827] border-gray-800 text-gray-50 hover:bg-gray-700'
              }`}
            >
              <ArrowRight className="w-6 h-6" strokeWidth={1.5} radius={4} />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="w-full mb-8 overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100/3 + 3)}%)`,
              gap: '12px'
            }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-none bg-white rounded-3xl p-[1.5rem] h-[350px] border border-[#E8E9EB]"
                style={{ width: '400px' }}
              >
                <div className="flex flex-col h-full">
                  {/* Avatar and Quote */}
                  <div className="mb-4 flex-1">
                    <div className="flex items-start gap-2 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      />
                    </div>
                    <div>
                      <p className="text-base leading-[1.5] tracking-minus-0_02">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </div>
                  </div>
                  
                  {/* Author Info */}
                  <div className="mt-2">
                    <div className="text-3xl font-semibold leading-none tracking-minus-0_02 font-archivo">
                      {testimonial.name}
                    </div>
                    <div className="text-base leading-none tracking-minus-0_01">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;