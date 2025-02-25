export const metadata = {
  title: 'Customer Post - Rose Development',
  description: 'AI-Powered Data Analytics Transformation',
}

import Link from 'next/link'
import Image from 'next/image'
import Illustration from '@/public/images/page-illustration.svg'
import CustomerBadge from '@/public/images/customer-badge.png'
import Particles from '@/components/particles'
import RelatedPosts from './related-posts'

export default function CustomerSingle() {
  return (
    <section className="relative">

      {/* Radial gradient */}
      <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-blue-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-blue-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      {/* Illustration */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

          <div className="md:flex md:justify-between">

            {/* Page content */}
            <div className="md:grow pb-12 md:pb-20">
              <div className="max-w-3xl">

                <article className="pb-12 mb-12 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

                  <div className="mb-4">
                    <Link className="inline-flex text-sm font-medium text-blue-500 group" href="/customers">
                      <span className="tracking-normal group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1">&lt;-</span> Go Back
                    </Link>
                  </div>

                  <header>
                    <h1 className="h2 inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                      AI-Driven Data Analytics: Transforming Operations at The Leading Edge
                    </h1>
                    <div className="text-sm flex items-center space-x-4 mb-8">
                      <img className="rounded-full" src="../images/team-01.png" width="32" height="32" alt="Leading Edge Avatar" />
                      <div>
                        <div className="text-slate-300 font-medium">Nathan Rose</div>
                        <div className="text-slate-500">Chief Technology Officer</div>
                      </div>
                    </div>
                  </header>

                  {/* Post content */}
                  <div className="prose max-w-none text-slate-400 prose-headings:text-slate-50 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium prose-blockquote:pl-5 prose-blockquote:xl:-ml-5 prose-blockquote:border-l-2 prose-blockquote:border-blue-500 prose-blockquote:font-medium prose-blockquote:text-slate-300 prose-blockquote:italic">
                    
                    <p>
                      The Leading Edge, a key player in the manufacturing sector, faced operational inefficiencies due to data silos and limited real-time insights. To remain competitive, they partnered with Rose Development to implement an **AI-driven data analytics platform** that optimized operations, reduced downtime, and enhanced profitability.
                    </p>

                    <h2>Harnessing AI for Smarter Decision-Making</h2>
                    <p>
                      Rose Development introduced a **comprehensive AI-powered data analytics system** that revolutionized The Leading Edge’s approach to manufacturing. The solution focused on:
                    </p>
                    <ul>
                      <li>
                        **Predictive Maintenance** – AI algorithms analyzed equipment data, identifying potential failures before they occurred, reducing downtime by 40%.
                      </li>
                      <li>
                        **Supply Chain Optimization** – Real-time demand forecasting improved inventory management, reducing waste by 25%.
                      </li>
                      <li>
                        **Operational Efficiency** – AI-driven insights streamlined production processes, increasing output while lowering costs.
                      </li>
                      <li>
                        **Customer Analytics** – Advanced models predicted customer demand, enhancing marketing precision and boosting sales conversions.
                      </li>
                    </ul>
                    
                    <h2>Measurable Impact & Business Growth</h2>
                    <p>
                      The implementation of AI analytics led to **tangible improvements across multiple business areas**:
                    </p>
                    <ul>
                      <li><strong>40% Reduction</strong> in machine downtime through predictive analytics.</li>
                      <li><strong>25% Decrease</strong> in raw material waste, improving sustainability.</li>
                      <li><strong>2x Increase</strong> in production efficiency, reducing overhead costs.</li>
                      <li><strong>Data-Driven Decision-Making</strong> empowered leadership with real-time insights.</li>
                    </ul>

                    <blockquote>
                      <p>
                        “Integrating AI analytics into our operations was a game-changer. The insights provided by Rose Development allowed us to predict, adapt, and optimize like never before. This partnership has truly positioned us for future success.”  
                        <br />— Nathan Rose, Chief Technology Officer at The Leading Edge
                      </p>
                    </blockquote>

                    <p>
                      The Leading Edge’s transformation showcases the power of **AI-driven analytics in manufacturing**, setting a benchmark for businesses seeking data-driven operational excellence.
                    </p>

                  </div>
                </article>

                <RelatedPosts />

              </div>
            </div>

            {/* Sidebar */}
            <aside className="md:w-64 lg:w-80 md:shrink-0 md:pt-[3.75rem] lg:pt-0 pb-12 md:pb-20">
              <div className="sticky top-6 md:pl-6 lg:pl-10">

                {/* Sidebar content */}
                <div className="space-y-6">

                  {/* Widget */}
                  <div className="bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800">
                    <div className="px-5 py-6">
                      <div className="mb-5">
                        <div className="flex items-center space-x-4">
                          <Image src={CustomerBadge} width={64} height={64} alt="Customer badge" />
                          <div className="text-lg font-semibold text-slate-100">The Leading Edge</div>
                        </div>
                      </div>
                      <ul className="text-sm">
                        <li className="flex items-center justify-between space-x-2 py-3">
                          <span className="text-slate-400">Industry</span>
                          <span className="text-slate-300 font-medium">Manufacturing</span>
                        </li>
                        <li className="flex items-center justify-between space-x-2 py-3">
                          <span className="text-slate-400">Technology</span>
                          <span className="text-slate-300 font-medium">AI Data Analytics</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

              </div>
            </aside>

          </div>

        </div>
      </div>
    </section>
  )
}
