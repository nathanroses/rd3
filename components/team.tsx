import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Member01 from '@/public/images/team-01.png'
import Member02 from '@/public/images/team-02.png'
import Member03 from '@/public/images/team-03.png'
import Member04 from '@/public/images/team-04.png'
import Member05 from '@/public/images/team-05.png'
import Member06 from '@/public/images/team-06.png'
import Member07 from '@/public/images/team-07.png'
import Member08 from '@/public/images/team-08.png'
import Member09 from '@/public/images/team-09.png'
import Member10 from '@/public/images/team-10.png'
import Member11 from '@/public/images/team-11.png'
import Member12 from '@/public/images/team-12.png'
import Member13 from '@/public/images/team-13.png'
import Member14 from '@/public/images/team-14.png'
import Member15 from '@/public/images/team-15.png'
import Member16 from '@/public/images/team-16.png'
import Member17 from '@/public/images/team-17.png'
import Member18 from '@/public/images/team-18.png'
import Member19 from '@/public/images/team-19.png'
import Member20 from '@/public/images/team-20.png'

interface Item {
  img: StaticImageData
  name: string
  role: string
  twitter: string
}

export default function Team() {

  const items: Item[] = [
    {
      img: Member01,
      name: 'Nathan Rose',
      role: 'CEO & Founder',
      twitter: '#0',
    },
    {
      img: Member02,
      name: 'Lee Alverson',
      role: 'Finance Manager',
      twitter: '#0',
    },
    {
      img: Member03,
      name: 'Jonathan Mandano',
      role: 'Software Engineer',
      twitter: '#0',
    },
    {
      img: Member05,
      name: 'Jack Nicholson',
      role: 'Software Engineer',
      twitter: '#0',
    },
    {
      img: Member08,
      name: 'Katie Foster',
      role: 'Marketing Manager',
      twitter: '#0',
    },
  ]

  return (
    <section className="relative">
      {/* Radial gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">We are a happy, small team</h2>
            <p className="text-lg text-slate-400">Our tight-knit team is driven by innovation and a shared goal to revolutionize the digital business world. We're dedicated to creating personalized solutions for our clients.</p>
          </div>
          {/* Team members */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
            {items.map((item, index) => ( 
              <div key={index} className="relative flex items-center justify-between py-4 pl-4 pr-3 group before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-0 hover:before:opacity-10 focus-within:before:opacity-10 before:rounded-xl before:transition-opacity">
                <div className="flex items-center space-x-4">
                  <Image className="shrink-0" src={item.img} width="48" height="48" alt={item.name} />
                  <div className="grow">
                    <div className="font-bold text-slate-100 mb-0.5">{item.name}</div>
                    <div className="text-sm text-purple-500 font-medium">{item.role}</div>
                  </div>
                </div>
                <a className="shrink-0 text-slate-500 md:opacity-0 group-hover:opacity-100 transition-opacity focus-within:opacity-100 focus:outline-none group-hover:before:absolute group-hover:before:inset-0" href={item.twitter} aria-label={`${item.name}'s Twitter`}>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}