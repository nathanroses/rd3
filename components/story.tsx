import Image from 'next/image'
import Team from '@/public/images/team.jpg'

export default function Story() {
  return (
    <section className="relative">

      {/* Blurred shape */}
      <div className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7"></stop>
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
        </svg>
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Our Story</h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src={Team} width={420} height={280} alt="Team" />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                   Rose Development was founded in Dover, Delaware, with a clear mission: to bridge the gap between artificial intelligence and small businesses. It all started at Vanderbilt University, where a deep curiosity about AI evolved into a realization—mom-and-pop shops were being left behind in the digital age. While large corporations leveraged advanced technology, smaller businesses struggled to integrate AI into their operations. This insight led to the creation of Rose Development, initially focused on building websites, apps, and software solutions to make technology more accessible.  
                  </p>
                  <p>
                   As we grew, so did its vision. It was never just about creating software—it was about redefining how businesses interact with technology. We saw a pressing need to help companies streamline outdated processes and embrace innovation without unnecessary complexity. Our core values are simple but non-negotiable: prioritize our customers above all else, build solutions that don’t just compete but stand out, and use technology to drive real, positive change in the world.  
                  </p>
                   <p>
                   What truly sets us apart is our commitment to privacy, transparency, and genuine collaboration. Unlike many tech firms, we refuse to profit from our customers' data, ensuring that their information remains secure and uncompromised. We work alongside businesses, not just as service providers but as partners invested in their success. Our mission is to simplify AI integration, helping companies create more efficient, future-ready work environments without unnecessary complications. Rose Development isn’t just about building technology—it’s about empowering businesses to harness it in ways that make a lasting impact.  
                   </p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
