import Link from 'next/link'
import Image from 'next/image'
import CustomerImg01 from '@/public/images/new-04.svg'
import CustomerBg01 from '@/public/images/customer-bg-01.png'
import CustomerImg02 from '@/public/images/new-01.svg'
import CustomerBg02 from '@/public/images/customer-bg-02.png'
import CustomerImg03 from '@/public/images/new-07.svg'
import CustomerBg03 from '@/public/images/customer-bg-03.png'
import CustomerImg04 from '@/public/images/customer-bg-01.png'
import CustomerBg04 from '@/public/images/customer-bg-04.png'
import CustomerImg05 from '@/public/images/customer-bg-01.png'
import CustomerBg05 from '@/public/images/customer-bg-05.png'
import CustomerImg06 from '@/public/images/customer-bg-01.png'
import CustomerBg06 from '@/public/images/customer-bg-06.png'
import CustomerImg07 from '@/public/images/customer-bg-01.png'
import CustomerBg07 from '@/public/images/customer-bg-07.png'
import CustomerImg08 from '@/public/images/customer-bg-01.png'
import CustomerBg08 from '@/public/images/customer-bg-08.png'
import CustomerImg09 from '@/public/images/customer-bg-01.png'
import CustomerBg09 from '@/public/images/customer-bg-09.png'
import CustomerImg10 from '@/public/images/customer-bg-01.png'
import CustomerBg10 from '@/public/images/customer-bg-10.png'
import CustomerAvatar01 from '@/public/images/new-05.svg'
import CustomerAvatar02 from '@/public/images/new-08.svg'
import Particles from '@/components/particles'
import Highlighter, { HighlighterItem02 } from '@/components/highlighter'

export default function CustomersList() {

  const items = [
    {
      name: 'Customer name',
      img: CustomerImg01,
      bg: CustomerBg01,
      link: '/customers/single-post',
    },
    {
      name: 'Customer name',
      img: CustomerImg02,
      bg: CustomerBg02,
      link: '/customers/single-post',
    },
    {
      name: 'Customer name',
      img: CustomerImg03,
      bg: CustomerBg03,
      link: '/customers/single-post',
    },
    {
      name: 'Customer name',
      img: CustomerImg04,
      bg: CustomerBg04,
      link: '/customers/single-post',
    },
    {
      name: 'Customer name',
      img: CustomerImg05,
      bg: CustomerBg05,
      link: '/customers/single-post',
    },
    {
      name: 'Customer name',
      img: CustomerImg06,
      bg: CustomerBg06,
      link: '/customers/single-post',
    },
    {
      name: 'Customer name',
      img: CustomerImg07,
      bg: CustomerBg07,
      link: '/customers/single-post',
    },
    {
      name: 'Customer name',
      img: CustomerImg08,
      bg: CustomerBg08,
      link: '/customers/single-post',
    },
    {
      name: 'Customer name',
      img: CustomerImg09,
      bg: CustomerBg09,
      link: '/customers/single-post',
    },
    {
      name: 'Customer name',
      img: CustomerImg10,
      bg: CustomerBg10,
      link: '/customers/single-post',
    },
  ]

  return (
  <div className="max-w-[352px] mx-auto sm:max-w-[728px] lg:max-w-none pb-12 md:pb-20">
    <Highlighter className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 group [&_*:nth-child(n+5):not(:nth-child(n+12))]:order-1 [&_*:nth-child(n+10):not(:nth-child(n+11))]:!order-2">

      {items.map((item, index) => (
        <div key={index}>
          <Link href={item.link}>
            <HighlighterItem02>
              <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                {/* Particles animation */}
                <Particles className="absolute inset-0 -z-10" quantity={3} />
                <div className="flex items-center justify-center">
                  <Image className="w-full h-full aspect-video object-cover" src={item.bg} width={352} height={198} alt="Customer Background" aria-hidden="true" />
                  <Image className="absolute" src={item.img} alt={item.name} />
                </div>
              </div>
            </HighlighterItem02>
          </Link>
        </div>
      ))}

      {/* Testimonial #01 */}
      <div className="flex flex-col items-center justify-center text-center p-4">
        <p className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
          <span className="line-clamp-4">
          We took our business to the next level with Rose Development. Building better technology for tommorow.
          </span>
        </p>
        <div className="inline-flex mb-2">
        Tim 
        </div>
        <div className="text-sm font-medium text-slate-300">
         <a className="text-purple-500 hover:underline" href="#0">Carolina Boat Company</a>
        </div>
      </div>
      {/* Testimonial #02 */}
      <div className="flex flex-col items-center justify-center text-center p-4">
        <p className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
          <span className="line-clamp-4">
            We turned our recruitment process into a competitive advantage with Rose Development. We are now able to attract the best talent.
          </span>
        </p>
        <div className="inline-flex mb-2">
        Zach
        </div>
        <div className="text-sm font-medium text-slate-300">
     <a className="text-purple-500 hover:underline" href="#0">Eco Shield</a>
        </div>
      </div>

    </Highlighter>
  </div>
  )
}
