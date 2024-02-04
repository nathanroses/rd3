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
                  The creation of Rose Development in Dover, Delaware, was fueled by a shared vision to innovate within traditional sectors and the digital landscape. Born from the experiences gained while navigating the academic and practical realms of Vanderbilt University and collaborating with industry leaders, the idea was simple yet profound: to offer businesses a hands-off yet highly effective online presence.
                  </p>
                  <p>
                  At its core, Rose Development was conceived as a <strong className="text-slate-50 font-medium"> solution to a common problem faced by business owners </strong> seeking success in the digital age without the need to immerse themselves in the complexities of technology, The aim was to blend the latest technological advancements with a personalized approach, ensuring that each client's unique needs were met with precision and creativity.
                  </p>
                  <p>
                  Driven by a passion for learning and innovation, the foundation of Rose Development was about more than just creating a product. It was about  establishing a platform for discussion, knowledge sharing  and bringing together diverse perspectives to make technology more accessible  and easier to understand.
                  </p>
                  <p>
                  The essence of Rose Development lies in its ability to connect people around topics and ideas that excite them, using technology to elevate the experience to <a className="text-purple-500 font-medium hover:underline" href="#0">new dimensions</a> It's about diving deep into the details that make up a product, sharing transformative moments, and discussing compelling ideas. The goal has always been to create a space for discussion and knowledge convergence, making it simpler and more approachable.
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