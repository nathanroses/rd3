import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.svg'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-2">
              <Link href="/" aria-label="Cruip">
                <Image src={Logo} width={38} height={38} alt="Rose Development" />
              </Link>
            </div>
            <div className="text-sm text-slate-300">
              <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">Terms</Link> · <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">Privacy Policy</Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-200 font-medium mb-2">Products</h6>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">AI Analytics</Link>
              </li>
              <li>
                <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">Data Processing</Link>
              </li>
              <li>
                <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">Predictive Models</Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-200 font-medium mb-2">Resources</h6>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/integrations" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">Integrations</Link>
              </li>
              <li>
                <Link href="/customers" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">Customers</Link>
              </li>
              <li>
                <Link href="/changelog" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">Changelog</Link>
              </li>
              <li>
                <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">Documentation</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-200 font-medium mb-2">Company</h6>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">About us</Link>
              </li>
              <li>
                <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">Blog</Link>
              </li>
              <li>
                <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">Careers</Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-200 font-medium mb-2">Connect</h6>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">Twitter</Link>
              </li>
              <li>
                <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">LinkedIn</Link>
              </li>
              <li>
                <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">Facebook</Link>
              </li>
              <li>
                <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out">Contact us</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-800">

          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10.025C20 4.491 15.52 0 10 0S0 4.491 0 10.025c0 4.852 3.44 8.892 8 9.825v-6.817H6v-3.008h2V7.52a3.508 3.508 0 0 1 3.5-3.509H14v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3V20c5.05-.501 9-4.772 9-9.975Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 3.897c-.75.33-1.5.574-2.25.676.8-.486 1.4-1.262 1.7-2.202-.75.461-1.6.773-2.5.972-.75-.815-1.8-1.343-2.95-1.343-2.2 0-4 1.8-4 4.062 0 .301.05.614.1.904-3.35-.164-6.3-1.793-8.3-4.218-.35.591-.55 1.306-.55 2.032 0 1.4.7 2.651 1.8 3.381-.65 0-1.3-.204-1.8-.506v.059c0 1.953 1.4 3.595 3.2 3.953-.3.103-.65.14-1.05.14-.25 0-.5 0-.75-.055.5 1.605 2 2.757 3.75 2.795-1.4 1.097-3.1 1.754-5 1.754-.35 0-.65-.023-.95-.059 1.75 1.133 3.85 1.789 6.15 1.789 7.4 0 11.45-6.154 11.45-11.5 0-.181 0-.34-.05-.521.8-.301 1.45-1.038 2-1.731Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#0" className="text-slate-300 hover:text-white transition duration-150 ease-in-out" aria-label="Github">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.041 0C4.52 0 0 4.612 0 10.25c0 4.526 2.845 8.37 6.862 9.737.502.085.669-.257.669-.516v-1.813c-2.761.602-3.347-1.357-3.347-1.357-.443-1.159-1.095-1.458-1.095-1.458-.894-.642.084-.6.084-.6.973.073 1.5 1.043 1.5 1.043.885 1.587 2.307 1.117 2.846.857.085-.643.335-1.083.627-1.33-2.22-.257-4.555-1.158-4.555-5.113 0-1.13.39-2.057 1.026-2.773-.084-.257-.46-1.287.126-2.688 0 0 .837-.257 2.761 1.073a9.167 9.167 0 0 1 2.51-.344c.852 0 1.705.114 2.51.344 1.924-1.33 2.76-1.073 2.76-1.073.586 1.401.21 2.43.127 2.688.627.716 1.026 1.643 1.026 2.773 0 3.956-2.345 4.856-4.566 5.113.376.33.71.945.71 1.9v2.83c0 .26.167.602.67.516C17.158 18.62 20 14.784 20 10.25 20 4.612 15.5 0 10.041 0Z" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-slate-400 mr-4">&copy; Rose Development. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
 
