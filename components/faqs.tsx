export default function Faqs() {
  return (
  <section className="relative">

    {/* Blurred shape */}
    <div className="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
        <defs>
          <linearGradient id="bs3-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path fill="url(#bs3-a)" fillRule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)" />
      </svg>
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <div>
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Getting started with Rose Development</div>
          </div>
          <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Everything you need to know</h2>
        </div>

        {/* Columns */}
        <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">

          {/* Column */}
          <div className="w-full md:w-1/2 space-y-8">

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">What is Rose Development?</h4>
              <p className="text-slate-400"> Rose Development offers premium, tailor-made digital solutions, hence the starting price reflects the high-quality service and personalized attention your project will receive.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">How is the cost determined for each project?</h4>
              <p className="text-slate-400">Pricing is customized based on the project's scope, complexity, and the specific services required. We evaluate your needs to provide a fair and transparent cost estimate.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">Can I get a detailed quote for my specific project?</h4>
              <p className="text-slate-400">Absolutely, we provide itemized quotes to ensure you understand the investment in your project. Contact us for a breakdown of costs tailored to your specifications.</p>
            </div>

          </div>

          {/* Column */}
          <div className="w-full md:w-1/2 space-y-8">

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">How do we accommodate future integrations?</h4>
              <p className="text-slate-400">Our solutions are scalable and future-ready, with pricing structured to support your growth and integration needs. We plan with foresight for your evolving business requirements.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">What is the cancellation policy for ongoing projects?</h4>
              <p className="text-slate-400">We offer flexible cancellation policies that are outlined upfront, with clear terms to ensure fairness for both parties. Should you need to adjust course, we're here to work with you on the best path forward.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">Are there any long-term contracts or can I pay as I go?</h4>
              <p className="text-slate-400">Rose Development provides both subscription-based and one-time payment options to suit your business model. There are no compulsory long-term contracts, offering you full control over your investment.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
  )
}