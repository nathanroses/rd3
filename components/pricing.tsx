'use client'

import { useState } from 'react'



export default function Pricing() {
  const [annual, setAnnual] = useState<boolean>(true)

  return (
    <div className="relative">
      {/* Blurred shape */}
      <div className="max-md:hidden absolute bottom-0 -mb-20 left-2/3 -translate-x-1/2 blur-2xl opacity-70 pointer-events-none" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#bs5-a)" fillRule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
        </svg>
      </div>
      {/* Content */}
      <div className="grid md:grid-cols-4 xl:-mx-6 text-sm [&>div:nth-of-type(-n+4)]:py-6 [&>div:nth-last-of-type(-n+4)]:pb-6 max-md:[&>div:nth-last-of-type(-n+4)]:mb-8 max-md:[&>div:nth-of-type(-n+4):nth-of-type(n+1)]:rounded-t-3xl max-md:[&>div:nth-last-of-type(-n+4)]:rounded-b-3xl md:[&>div:nth-of-type(2)]:rounded-tl-3xl md:[&>div:nth-of-type(4)]:rounded-tr-3xl md:[&>div:nth-last-of-type(3)]:rounded-bl-3xl md:[&>div:nth-last-of-type(1)]:rounded-br-3xl [&>div]:bg-slate-700/20 [&>div:nth-of-type(4n+1)]:bg-transparent max-md:[&>div:nth-of-type(4n+5)]:hidden max-md:[&>div:nth-of-type(4n+2)]:order-1 max-md:[&>div:nth-of-type(4n+3)]:order-2 max-md:[&>div:nth-of-type(4n+4)]:order-3 max-md:md:[&>div:nth-of-type(n)]:mb-0 [&>div:nth-of-type(4n+3)]:relative before:[&>div:nth-of-type(4n+3)]:absolute before:[&>div:nth-of-type(4n+3)]:-inset-px before:[&>div:nth-of-type(4n+3)]:rounded-[inherit] before:[&>div:nth-of-type(4n+3)]:border-x-2 before:[&>div:nth-of-type(3)]:border-t-2 before:[&>div:nth-last-of-type(2)]:border-b-2 before:[&>div:nth-of-type(4n+3)]:border-purple-500 before:[&>div:nth-of-type(4n+3)]:-z-10 before:[&>div:nth-of-type(4n+3)]:pointer-events-none">
        {/* Pricing toggle */}
        <div className="px-6 flex flex-col justify-end">
          <div className="pb-5 md:border-b border-slate-800">
            {/* Toggle switch */}
            <div className="max-md:text-center">
              <div className="inline-flex items-center whitespace-nowrap">
                <div className="text-sm text-slate-500 font-medium mr-2 md:max-lg:hidden">Monthly</div>
                <div className="relative">
                  <input type="checkbox" id="toggle" className="peer sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
                  <label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-purple-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-purple-500">
                    <span className="sr-only">Pay Yearly</span>
                  </label>
                </div>
                <div className="text-sm text-slate-500 font-medium ml-2">Single Payment</div>
              </div>
            </div>
          </div>
        </div>
        {/* Pro price */}
        <div className="px-6 flex flex-col justify-end">
          <div className="grow pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Pro</div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '500' : '50'}</span><span className="text-sm text-slate-600 font-medium">{annual ? '/payment' : '/month'}</span>
            </div>
            <div className="text-slate-500">Custom Buisness Website </div>
          </div>
          <div className="pb-4 border-b border-slate-800">
            <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href={annual ? "https://buy.stripe.com/dR68A102AgtB13y4gm" : "https://buy.stripe.com/9AQ3fHdTqa5deUo7sz"}>
              Get Started <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>
        {/* Team price */}
        <div className="px-6 flex flex-col justify-end">
          <div className="grow pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Team</div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '750' : '100'}</span><span className="text-sm text-slate-600 font-medium">{annual ? '/payment' : '/month'}</span>
            </div>
            <div className="text-slate-500">Custom App Creation</div>
          </div>
          <div className="pb-4 border-b border-slate-800">
          <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href={annual ? "https://buy.stripe.com/8wM17z4iQ7X527C5kl" : "https://buy.stripe.com/7sI9E52aIfpx3bGdQV"}>
              Get Started <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>
        {/* Enterprise price */}
        <div className="px-6 flex flex-col justify-end">
          <div className="grow pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Enterprise</div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '2000' : '200'}</span><span className="text-sm text-slate-600 font-medium">{annual ? '/payment' : '/month'}</span>
            </div>
            <div className="text-slate-500">Buisness Ai Evaluator</div>
          </div>
          <div className="pb-4 border-b border-slate-800">
          <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href={annual ? "https://buy.stripe.com/4gw9E5cPma5d8w0dQS" : "https://buy.stripe.com/6oEcQh16Eb9hfYs28b"}>
              Get Started <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>
        {/* # Usage */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4">Usage</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Usage</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Usage</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Usage</div>
        </div>
        {/* Customers */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Customers</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>100+ <span className="md:hidden">Customers</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>1,000+ <span className="md:hidden">Customers</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Unlimited <span className="md:hidden">Customers</span></span>
          </div>
        </div>
        {/* Storage Slots */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Storage Slots</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>1<span className="md:hidden">Storage Slots</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>2<span className="md:hidden">Storage Slots</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>10<span className="md:hidden">Storage Slots</span></span>
          </div>
        </div>
        {/* User Role Management */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">User Role Management</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Unlimited <span className="md:hidden">User Role Management</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Unlimited <span className="md:hidden">User Role Management</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Unlimited <span className="md:hidden">User Role Management</span></span>
          </div>
        </div>
        {/* Data Engines */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Data Engines</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>1 <span className="md:hidden">Data Engines</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>5 <span className="md:hidden">Data Engines</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Unlimited <span className="md:hidden">Data Engines</span></span>
          </div>
        </div>
        {/* # Features */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4">Features</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Features</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Features</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Features</div>
        </div>
        {/* Development */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Development</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Development</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Development</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Development</span></span>
          </div>
        </div>
        {/* AI Integrationloyment Options */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">AI Integration</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">AI Integration</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">AI Integration</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">AI Integration</span></span>
          </div>
        </div>
        {/* E-Commerce */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">E-Commerce</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">E-Commerce</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">E-Commerce</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">E-Commerce</span></span>
          </div>
        </div>
        {/* Marketing Tools */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Marketing Tools</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Marketing Tools</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Marketing Tools</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Marketing Tools</span></span>
          </div>
        </div>
        {/* Hawkeyes 24/7 */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Hawkeyes 24/7</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Hawkeyes 24/7</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Hawkeyes 24/7</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Hawkeyes 24/7</span></span>
          </div>
        </div>
        {/* Enterprise Add-ons */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Enterprise Add-ons</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Enterprise Add-ons</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Enterprise Add-ons</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Enterprise Add-ons</span></span>
          </div>
        </div>
        {/* # Support */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4">Support</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 hidden">Support</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Support</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Support</div>
        </div>
        {/* Premium Support */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Premium Support</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Premium Support</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Premium Support</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Premium Support</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}