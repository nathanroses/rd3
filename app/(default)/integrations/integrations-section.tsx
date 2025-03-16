'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Particles from '@/components/particles'
import Illustration from '@/public/images/page-illustration.svg'
import Illustration02 from '@/public/images/page-illustration-02.svg'

// Featured integration images - use your actual imports here
import IntegrationsImg01 from '@/public/images/integrations-01.svg'
import IntegrationsImg02 from '@/public/images/integrations-02.svg'
import IntegrationsImg03 from '@/public/images/integrations-03.svg'
import IntegrationsImg04 from '@/public/images/integrations-04.svg'
import IntegrationsImg05 from '@/public/images/integrations-05.svg'
import IntegrationsImg06 from '@/public/images/integrations-06.svg'

export default function IntegrationsSection() {
  const [loaded, setLoaded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Featured integrations
  const featuredIntegrations = [
    {
      name: "Snowflake",
      description: "Connect your Snowflake data warehouse for powerful AI analytics with end-to-end security.",
      image: IntegrationsImg01,
      link: "/integrations/single-post"
    },
    {
      name: "MongoDB Atlas",
      description: "Apply predictive analytics to your MongoDB document data for real-time insights.",
      image: IntegrationsImg02,
      link: "/integrations/single-post"
    },
    {
      name: "Tableau",
      description: "Enhance Tableau dashboards with AI predictions and automated anomaly detection.",
      image: IntegrationsImg03,
      link: "/integrations/single-post"
    },
    {
      name: "SageMaker",
      description: "Extend AWS SageMaker with specialized analytics pipelines and business value tracking.",
      image: IntegrationsImg04,
      link: "/integrations/single-post"
    },
    {
      name: "Salesforce",
      description: "Apply AI analytics to your Salesforce data for predictive forecasting and churn prevention.",
      image: IntegrationsImg05,
      link: "/integrations/single-post"
    },
    {
      name: "Google BigQuery",
      description: "Transform BigQuery datasets into predictive models with custom visualization tools.",
      image: IntegrationsImg06,
      link: "/integrations/single-post"
    }
  ]

  // Animation on component mount
  useEffect(() => {
    setLoaded(true)
  }, [])

  // Move to next slide
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredIntegrations.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }

  // Move to previous slide
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredIntegrations.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }

  return (
    <section className="relative">

      {/* Illustration 02 */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 bottom-0 -mb-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration02} className="max-w-none" width={1440} height={427} alt="Page Illustration 02" />
      </div>

      {/* Opacity layer */}
      <div className="absolute inset-0 bg-slate-900 opacity-60 -z-10" aria-hidden="true"></div>

      {/* Radial gradient */}
      <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      {/* Illustration */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <div className={`text-center pb-12 md:pb-20 transition-all duration-700 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Seamless Connections</div>
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Unlock the Power of Your Data</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-400">Our analytics platform integrates with your essential business systems and data sources. Connect once and transform your data into actionable insights that drive business growth.</p>
            </div>
          </div>

          {/* Apple-style featured integrations carousel */}
          <div className="relative max-w-5xl mx-auto mb-16">
            {/* Navigation controls */}
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 -left-4 -right-4 z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm text-white hover:bg-purple-500 transition-colors duration-150 flex items-center justify-center shadow-lg"
                aria-label="Previous"
                disabled={isAnimating}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm text-white hover:bg-purple-500 transition-colors duration-150 flex items-center justify-center shadow-lg"
                aria-label="Next"
                disabled={isAnimating}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                </svg>
              </button>
            </div>
            
            {/* Carousel content */}
            <div ref={carouselRef} className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {featuredIntegrations.map((integration, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-tr from-slate-800/80 to-slate-800/20 rounded-3xl border border-slate-700/50 p-10 transition-all duration-300 transform hover:shadow-lg">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image - Apple-style clean presentation */}
                        <div className="flex justify-center items-center order-2 md:order-1">
                          <div className="relative w-48 h-48 transition-all duration-500 transform hover:scale-105">
                            <Image 
                              src={integration.image} 
                              alt={integration.name} 
                              fill 
                              className="object-contain drop-shadow-xl"
                            />
                          </div>
                        </div>
                        
                        {/* Text content */}
                        <div className="order-1 md:order-2">
                          <div className="text-sm font-medium text-purple-500 mb-2">Featured Integration</div>
                          <h3 className="text-3xl font-bold text-white mb-4">{integration.name}</h3>
                          <p className="text-slate-400 mb-8 text-lg">{integration.description}</p>
                          <Link 
                            href={integration.link} 
                            className="btn text-white bg-purple-500 hover:bg-purple-600 shadow-sm group"
                          >
                            Explore Integration <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicators - Apple-style minimal dots */}
            <div className="flex justify-center mt-8">
              {featuredIntegrations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-2 h-2 mx-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-purple-500 w-6' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  disabled={isAnimating}
                />
              ))}
            </div>
          </div>
          
    
        </div>
      </div>
    </section>
  )
}
