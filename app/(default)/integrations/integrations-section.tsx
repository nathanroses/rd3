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
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredIntegrations.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Move to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredIntegrations.length - 1 : prevIndex - 1
    )
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
              <p className="text-lg text-slate-400">Rose Development's AI analytics platform integrates with your essential business systems and data sources. Connect once and transform your data into actionable insights that drive business growth.</p>
            </div>
          </div>

          {/* Custom featured integrations carousel */}
          <div ref={carouselRef} className="relative max-w-5xl mx-auto mb-20">
            {/* Featured integration */}
            <div className="bg-gradient-to-tr from-slate-800/80 to-slate-800/20 rounded-3xl border border-slate-700/50 p-8 overflow-hidden relative">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Text content */}
                <div className="md:pr-6">
                  <div className="text-sm font-medium text-purple-500 mb-2">Featured Integration</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{featuredIntegrations[currentIndex].name}</h3>
                  <p className="text-slate-400 mb-6">{featuredIntegrations[currentIndex].description}</p>
                  <Link 
                    href={featuredIntegrations[currentIndex].link} 
                    className="btn text-sm text-white bg-purple-500 hover:bg-purple-600 shadow-sm group"
                  >
                    Learn More <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </div>
                
                {/* Image */}
                <div className="flex justify-center items-center bg-slate-900/40 rounded-2xl p-6 h-[240px]">
                  <div className="relative w-32 h-32 transition-all duration-300 transform hover:scale-110">
                    <Image 
                      src={featuredIntegrations[currentIndex].image} 
                      alt={featuredIntegrations[currentIndex].name} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Navigation controls */}
              <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-4 right-4">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-slate-800/60 text-white hover:bg-purple-500 transition-colors duration-150 flex items-center justify-center group"
                  aria-label="Previous"
                >
                  <svg className="w-4 h-4 fill-current transform group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-slate-800/60 text-white hover:bg-purple-500 transition-colors duration-150 flex items-center justify-center group"
                  aria-label="Next"
                >
                  <svg className="w-4 h-4 fill-current transform group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                  </svg>
                </button>
              </div>
              
              {/* Indicators */}
              <div className="flex justify-center mt-6 absolute bottom-4 left-0 right-0">
                {featuredIntegrations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 mx-1 rounded-full transition-colors duration-150 ${
                      index === currentIndex ? 'bg-purple-500' : 'bg-slate-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA to explore all integrations */}
          <div className="text-center mt-10">
            <Link 
              href="/integrations" 
              className="btn text-white bg-purple-500 hover:bg-purple-600 shadow-sm group"
            >
              Explore All Integrations <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
