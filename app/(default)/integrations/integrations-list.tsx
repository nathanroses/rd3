'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Star from '@/public/images/star.svg'
import IntegrationsImg01 from '@/public/images/integrations-01.svg'
import IntegrationsImg02 from '@/public/images/integrations-02.svg'
import IntegrationsImg03 from '@/public/images/integrations-03.svg'
import IntegrationsImg04 from '@/public/images/integrations-04.svg'
import IntegrationsImg05 from '@/public/images/integrations-05.svg'
import IntegrationsImg06 from '@/public/images/integrations-06.svg'
import IntegrationsImg07 from '@/public/images/integrations-07.svg'
import IntegrationsImg08 from '@/public/images/integrations-08.svg'
import IntegrationsImg09 from '@/public/images/integrations-09.svg'
import IntegrationsImg10 from '@/public/images/integrations-10.svg'
import IntegrationsImg11 from '@/public/images/integrations-11.svg'
import IntegrationsImg12 from '@/public/images/integrations-12.svg'
import IntegrationsImg13 from '@/public/images/integrations-13.svg'
import IntegrationsImg14 from '@/public/images/integrations-14.svg'
import IntegrationsImg15 from '@/public/images/integrations-15.svg'
import IntegrationsImg16 from '@/public/images/integrations-16.svg'
import IntegrationsImg17 from '@/public/images/integrations-17.svg'
import IntegrationsImg18 from '@/public/images/integrations-18.svg'
import IntegrationsImg19 from '@/public/images/integrations-19.svg'
import IntegrationsImg20 from '@/public/images/integrations-20.svg'
import IntegrationsImg21 from '@/public/images/integrations-21.svg'
import IntegrationsImg22 from '@/public/images/integrations-22.svg'
import IntegrationsImg23 from '@/public/images/integrations-23.svg'
import IntegrationsImg24 from '@/public/images/integrations-24.svg'

export default function IntegrationsList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredItems, setFilteredItems] = useState<any[]>([])
  const [scrolledToSection, setScrolledToSection] = useState(false)

  const items = [
    // Data Sources
    {
      img: IntegrationsImg06,
      name: 'Snowflake',
      description: 'Connect your Snowflake data warehouse to Rose Development for powerful AI analytics on your enterprise data with secure end-to-end encryption.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Data Sources'
    },
    {
      img: IntegrationsImg07,
      name: 'MongoDB Atlas',
      description: 'Bring your MongoDB document data into Rose Development to apply advanced predictive analytics and AI-driven insights to your NoSQL data.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Data Sources'
    },
    {
      img: IntegrationsImg04,
      name: 'AWS S3',
      description: 'Seamlessly connect your S3 data lake to Rose Development to transform raw storage into actionable analytics insights and visualizations.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Data Sources'
    },
    {
      img: IntegrationsImg08,
      name: 'Google BigQuery',
      description: 'Transform your BigQuery datasets into predictive models with Rose Development\'s AI-powered analytics engine and custom visualization tools.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Data Sources'
    },
    {
      img: IntegrationsImg05,
      name: 'Azure Synapse',
      description: 'Connect Rose Development to your Azure Synapse Analytics environment for comprehensive AI-powered business intelligence and data pipelines.',
      link: '/integrations/single-post',
      featured: false,
      category: 'Data Sources'
    },
    {
      img: IntegrationsImg01,
      name: 'PostgreSQL',
      description: 'Analyze your PostgreSQL data with Rose Development\'s machine learning models for deeper customer insights and predictive analytics.',
      link: '/integrations/single-post',
      featured: false,
      category: 'Data Sources'
    },
    
    // BI & Visualization
    {
      img: IntegrationsImg02,
      name: 'Tableau',
      description: 'Enhance your Tableau dashboards with Rose Development\'s AI predictions and anomaly detection for smarter, more actionable visualizations.',
      link: '/integrations/single-post',
      featured: true,
      category: 'BI & Visualization'
    },
    {
      img: IntegrationsImg03,
      name: 'Power BI',
      description: 'Integrate Rose Development\'s AI analytics capabilities directly into Microsoft Power BI for enhanced forecasting and automated insights.',
      link: '/integrations/single-post',
      featured: true,
      category: 'BI & Visualization'
    },
    {
      img: IntegrationsImg09,
      name: 'Looker',
      description: 'Combine Looker\'s data exploration capabilities with Rose Development\'s predictive AI to create forward-looking business intelligence.',
      link: '/integrations/single-post',
      featured: true,
      category: 'BI & Visualization'
    },
    {
      img: IntegrationsImg10,
      name: 'Grafana',
      description: 'Add AI-powered anomaly detection and predictive alerts to your Grafana monitoring dashboards with the Rose Development integration.',
      link: '/integrations/single-post',
      featured: false,
      category: 'BI & Visualization'
    },
    {
      img: IntegrationsImg11,
      name: 'Qlik',
      description: 'Enhance Qlik Sense with Rose Development\'s machine learning models for deeper data insights and automated pattern recognition.',
      link: '/integrations/single-post',
      featured: false,
      category: 'BI & Visualization'
    },
    {
      img: IntegrationsImg12,
      name: 'Domo',
      description: 'Bring Rose Development\'s AI analytics capabilities into your Domo environment for more intelligent data-driven decision making.',
      link: '/integrations/single-post',
      featured: false,
      category: 'BI & Visualization'
    },
    
    // ML & AI Platforms
    {
      img: IntegrationsImg13,
      name: 'TensorFlow',
      description: 'Seamlessly integrate your TensorFlow models with Rose Development to deploy and monitor AI solutions at enterprise scale.',
      link: '/integrations/single-post',
      featured: true,
      category: 'ML & AI Platforms'
    },
    {
      img: IntegrationsImg14,
      name: 'PyTorch',
      description: 'Deploy and operationalize your PyTorch models through Rose Development\'s enterprise-grade AI management and monitoring platform.',
      link: '/integrations/single-post',
      featured: true,
      category: 'ML & AI Platforms'
    },
    {
      img: IntegrationsImg15,
      name: 'Databricks',
      description: 'Connect your Databricks lakehouse to Rose Development for enhanced ML model governance, monitoring and business value tracking.',
      link: '/integrations/single-post',
      featured: true,
      category: 'ML & AI Platforms'
    },
    {
      img: IntegrationsImg16,
      name: 'Hugging Face',
      description: 'Deploy and operationalize Hugging Face transformer models through Rose Development\'s enterprise AI platform with full governance.',
      link: '/integrations/single-post',
      featured: false,
      category: 'ML & AI Platforms'
    },
    {
      img: IntegrationsImg17,
      name: 'MLflow',
      description: 'Integrate MLflow model tracking with Rose Development to add enterprise-grade deployment, monitoring and observability.',
      link: '/integrations/single-post',
      featured: false,
      category: 'ML & AI Platforms'
    },
    {
      img: IntegrationsImg18,
      name: 'SageMaker',
      description: 'Extend your AWS SageMaker capabilities with Rose Development\'s specialized analytics pipelines and business value tracking.',
      link: '/integrations/single-post',
      featured: true,
      category: 'ML & AI Platforms'
    },
    
    // Business Systems
    {
      img: IntegrationsImg19,
      name: 'Salesforce',
      description: 'Apply Rose Development\'s AI analytics to your Salesforce data for predictive sales forecasting and customer churn prevention.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Business Systems'
    },
    {
      img: IntegrationsImg20,
      name: 'SAP',
      description: 'Transform your SAP ERP data into predictive insights with Rose Development\'s specialized analytics connectors and AI models.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Business Systems'
    },
    {
      img: IntegrationsImg21,
      name: 'HubSpot',
      description: 'Enhance your HubSpot marketing data with Rose Development\'s AI-powered customer segmentation and predictive lead scoring.',
      link: '/integrations/single-post',
      featured: false,
      category: 'Business Systems'
    },
    {
      img: IntegrationsImg22,
      name: 'ServiceNow',
      description: 'Apply intelligent automation to your IT service management with Rose Development\'s predictive analytics for ServiceNow.',
      link: '/integrations/single-post',
      featured: false,
      category: 'Business Systems'
    },
    {
      img: IntegrationsImg23,
      name: 'Workday',
      description: 'Bring AI-powered workforce analytics to your Workday data with Rose Development\'s specialized HR prediction models.',
      link: '/integrations/single-post',
      featured: false,
      category: 'Business Systems'
    },
    {
      img: IntegrationsImg24,
      name: 'Shopify',
      description: 'Leverage Rose Development\'s AI to transform your Shopify data into actionable customer insights and inventory predictions.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Business Systems'
    }
  ]

  // Filter items based on search term and category
  useEffect(() => {
    setFilteredItems(
      items.filter(item => {
        // Filter by category if not 'all'
        const categoryMatch = activeCategory === 'all' ? true : item.category === activeCategory;
        
        // Filter by search term
        const searchMatch = searchTerm === '' ? true : 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        return categoryMatch && searchMatch;
      })
    );
  }, [searchTerm, activeCategory]);

  // Scroll to selected category section
  useEffect(() => {
    if (activeCategory !== 'all' && !scrolledToSection) {
      const element = document.getElementById(activeCategory.toLowerCase().replace(/\s+/g, '-'));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setScrolledToSection(true);
      }
    }
  }, [activeCategory, scrolledToSection]);

  // Reset scroll flag when category changes
  useEffect(() => {
    setScrolledToSection(false);
  }, [activeCategory]);

  // Handle category click
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  // Get unique categories for displaying sections
  const categories = ['Data Sources', 'BI & Visualization', 'ML & AI Platforms', 'Business Systems'];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="pb-12 md:pb-20">
          {/* Topbar */}
          <div className="flex justify-between items-center py-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1] space-x-8 overflow-x-scroll no-scrollbar">
            {/* Links */}
            <ul className="flex flex-nowrap text-sm font-medium space-x-8">
              <li>
                <button 
                  className={`flex items-center whitespace-nowrap transition-colors space-x-2 ${
                    activeCategory === 'all' 
                      ? 'text-purple-500 hover:text-purple-400' 
                      : 'text-slate-50 hover:text-white'
                  }`}
                  onClick={() => handleCategoryClick('all')}
                >
                  <svg className="fill-purple-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M0 8.5L11 8.5 5.5 14 7 15.5 15.5 7 7 -1.5 5.5 0 11 5.5 0 5.5z" />
                  </svg>
                  <span>All Integrations</span>
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center whitespace-nowrap transition-colors space-x-2 ${
                    activeCategory === 'Data Sources' 
                      ? 'text-purple-500 hover:text-purple-400' 
                      : 'text-slate-50 hover:text-white'
                  }`}
                  onClick={() => handleCategoryClick('Data Sources')}
                >
                  <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M8 0C3.6 0 0 1.8 0 4v8c0 2.2 3.6 4 8 4s8-1.8 8-4V4c0-2.2-3.6-4-8-4zm0 2c3.3 0 6 1.3 6 2s-2.7 2-6 2-6-1.3-6-2 2.7-2 6-2zm0 12c-3.3 0-6-1.3-6-2V9.5c1.3.9 3.5 1.5 6 1.5s4.7-.6 6-1.5V12c0 .7-2.7 2-6 2zm0-4c-3.3 0-6-1.3-6-2V5.5c1.3.9 3.5 1.5 6 1.5s4.7-.6 6-1.5V8c0 .7-2.7 2-6 2z" />
                  </svg>
                  <span>Data Sources</span>
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center whitespace-nowrap transition-colors space-x-2 ${
                    activeCategory === 'BI & Visualization' 
                      ? 'text-purple-500 hover:text-purple-400' 
                      : 'text-slate-50 hover:text-white'
                  }`}
                  onClick={() => handleCategoryClick('BI & Visualization')}
                >
                  <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M0 12h4V4H0v8zm6 4h4V0H6v16zm6-8h4V4h-4v4z" />
                  </svg>
                  <span>BI & Visualization</span>
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center whitespace-nowrap transition-colors space-x-2 ${
                    activeCategory === 'ML & AI Platforms' 
                      ? 'text-purple-500 hover:text-purple-400' 
                      : 'text-slate-50 hover:text-white'
                  }`}
                  onClick={() => handleCategoryClick('ML & AI Platforms')}
                >
                  <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm.5 13.5c-3 0-5.5-2.5-5.5-5.5C3 5 5.5 2.5 8.5 2.5c2.5 0 4.5 2 5.3 4.2l-2.8 1c-.4-1-1.4-1.7-2.5-1.7-1.7 0-3 1.3-3 3s1.3 3 3 3c1.1 0 2.1-.7 2.5-1.7l2.8 1c-.8 2.2-2.8 4.2-5.3 4.2z" />
                  </svg>
                  <span>ML & AI Platforms</span>
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center whitespace-nowrap transition-colors space-x-2 ${
                    activeCategory === 'Business Systems' 
                      ? 'text-purple-500 hover:text-purple-400' 
                      : 'text-slate-50 hover:text-white'
                  }`}
                  onClick={() => handleCategoryClick('Business Systems')}
                >
                  <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M15 4h-4V1c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v3H1c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1zM6 2h4v2H6V2zm8 12H2V6h12v8z" />
                    <path d="M7 9h2v2H7z" />
                  </svg>
                  <span>Business Systems</span>
                </button>
              </li>
            </ul>
            <div>
              <form className="relative flex items-center">
                <input 
                  className="form-input pl-10 bg-transparent rounded-none focus:border-transparent focus:border-b-slate-700 lg:w-32 lg:focus:w-[200px] transition-[width]" 
                  type="text" 
                  id="search" 
                  aria-label="Search…" 
                  placeholder="Search…" 
                  autoComplete="off"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-0 w-9 flex items-center justify-center pointer-events-none">
                  <svg className="absolute fill-slate-50 mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm8.707 12.293a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414l2.393 2.393Z" />
                  </svg>
                </div>
              </form>
            </div>
          </div>

          {/* Cards */}
          <div>
            {activeCategory === 'all' ? (
              /* Display all categories */
              categories.map((category) => {
                const categoryItems = items.filter(item => item.category === category);
                
                if (categoryItems.length === 0) return null;
                
                return (
                  <div key={category} className="mt-12 md:mt-16">
                    <h3 
                      id={category.toLowerCase().replace(/\s+/g, '-')} 
                      className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8"
                    >
                      {category}
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {categoryItems.map((item, index) => (
                        <IntegrationCard key={`${category}-${index}`} item={item} index={index} />
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              /* Display single category or search results */
              <div className="mt-12 md:mt-16">
                <h3 
                  id={activeCategory.toLowerCase().replace(/\s+/g, '-')} 
                  className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8"
                >
                  {activeCategory === 'all' && searchTerm ? 'Search Results' : activeCategory}
                </h3>
                {filteredItems.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map((item, index) => (
                      <IntegrationCard key={`filtered-${index}`} item={item} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-400">No integrations found. Try a different search term or category.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

type CardProps = {
  item: {
    category: string
    img: string
    name: string
    featured: boolean
    link: string
    description: string
  }
  index: number
}

export function IntegrationCard({ item, index }: CardProps) {
  // Add animation to cards
  const getAnimationDelay = () => {
    return `${100 + (index % 9) * 50}ms`;
  };
  
  return (
    <div 
      key={index} 
      className="bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-all duration-300 group relative transform hover:-translate-y-1" 
      style={{ animationDelay: getAnimationDelay() }}
      data-aos="fade-up"
    >
      <div className="flex flex-col p-5 h-full">
        <div className="flex items-center space-x-3 mb-3">
          <div className="relative">
            <Image src={item.img} width="40" height="40" alt={item.name} className="transition-transform group-hover:scale-110 duration-300" />
            {item.featured && (
              <Image className="absolute top-0 -right-1" src={Star} width={16} height={16} alt="Star" aria-hidden="true" />
            )}
          </div>
          <Link 
            className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:from-purple-400 group-hover:to-purple-200 group-hover:before:absolute group-hover:before:inset-0 transition-all duration-300" 
            href={item.link}
          >
            {item.name}
          </Link>
        </div>
        <div className="grow">
          <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{item.description}</div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs text-slate-500">{item.category}</span>
          <Link 
            href={item.link} 
            className="text-xs text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out flex items-center"
          >
            Connect
            <svg className="w-3 h-3 ml-1 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
