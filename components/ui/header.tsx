'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '@/public/images/logo.svg'
import { useAuth } from '@/app/context/auth-context'

export default function Header() {
  const pathname = usePathname()
  const [top, setTop] = useState<boolean>(true)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const { user, signOut, loading } = useAuth()

  // Handle nav on page scroll
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [top])

  // Handle sign out
  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header className={`fixed w-full z-30 transition duration-300 ease-in-out ${!top ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link className="block" href="/" aria-label="Rose Development">
              <Image src={Logo} width={42} height={42} alt="Rose Development" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center font-medium">
              <li>
                <Link
                  href="/about"
                  className={`text-sm px-3 py-2 flex items-center transition duration-150 ease-in-out ${pathname === '/about' ? 'text-purple-500' : 'text-slate-300 hover:text-white'}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className={`text-sm px-3 py-2 flex items-center transition duration-150 ease-in-out ${pathname === '/integrations' ? 'text-purple-500' : 'text-slate-300 hover:text-white'}`}
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="/customers"
                  className={`text-sm px-3 py-2 flex items-center transition duration-150 ease-in-out ${pathname === '/customers' ? 'text-purple-500' : 'text-slate-300 hover:text-white'}`}
                >
                  Customers
                </Link>
              </li>
            </ul>

            {/* Desktop sign in links */}
          <ul className="flex items-center">
          {user ? (
            <li>
              <div className="flex items-center">
             <Link 
                href="/dashboard"
                 className="text-slate-300 hover:text-white transition duration-150 ease-in-out px-3 py-2 flex items-center text-sm font-medium mr-2"
               >
                Dashboard
              </Link>
           <span className="text-sm text-slate-300 mr-3">
          {user.name || user.email}
         </span>
        <button 
           onClick={handleSignOut}
          className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out"
                  >
          Sign Out
        </button>
      </div>
    </li>
      ) : (
     <>
      <li>
        <Link
          href="/signin"
          className="text-slate-300 hover:text-white transition duration-150 ease-in-out px-3 py-2 flex items-center text-sm font-medium"
        >
          Sign In
        </Link>
      </li>
      <li>
        <Link 
          href="/signup" 
          className="btn-sm text-white bg-purple-500 hover:bg-purple-600 ml-3"
          >
          Get Started
         </Link>
       </li>
      </>
      )}
    </ul>
             

          {/* Mobile menu */}
          <div className="flex md:hidden">
            {/* Hamburger button */}
            <button
              className={`hamburger ${mobileNavOpen ? 'active' : ''}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-slate-300 hover:text-white transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/* Mobile navigation */}
            <div
              id="mobile-nav"
              className={`fixed top-0 z-20 left-0 w-full h-screen bg-slate-900 overflow-auto transition-all duration-300 ease-in-out ${
                mobileNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="py-5 px-4">
                {/* Logo */}
                <div className="flex justify-between mb-6">
                  <Link href="/" aria-label="Rose Development">
                    <Image src={Logo} width={42} height={42} alt="Rose Development" />
                  </Link>
                  {/* Close button */}
                  <button
                    className="text-slate-300 hover:text-white"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.707 6.707L17.293 5.293 12 10.586 6.707 5.293 5.293 6.707 10.586 12 5.293 17.293 6.707 18.707 12 13.414 17.293 18.707 18.707 17.293 13.414 12z" />
                    </svg>
                  </button>
                </div>

                {/* Links */}
                <div>
                  <ul className="mb-6">
                    <li>
                      <Link
                        href="/about"
                        className="flex text-slate-300 hover:text-white py-2"
                        onClick={() => setMobileNavOpen(false)}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/integrations"
                        className="flex text-slate-300 hover:text-white py-2"
                        onClick={() => setMobileNavOpen(false)}
                      >
                        Integrations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/customers"
                        className="flex text-slate-300 hover:text-white py-2"
                        onClick={() => setMobileNavOpen(false)}
                      >
                        Customers
                      </Link>
                    </li>
                  </ul>
                  <div className="border-t border-slate-800 pt-6">
                    {user ? (
                      <div className="mb-4">
                        <span className="text-slate-300 mb-2 block">
                          Welcome, {user.name || user.email}
                        </span>
                        <button 
                          onClick={() => {
                            handleSignOut();
                            setMobileNavOpen(false);
                          }}
                          className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full mb-4"
                        >
                          Sign Out
                        </button>
                      </div>
                    ) : (
                      <div className="mb-4">
                        <Link
                          href="/signin"
                          className="btn-sm text-white bg-slate-700 hover:bg-slate-600 w-full mb-2"
                          onClick={() => setMobileNavOpen(false)}
                        >
                          Sign In
                        </Link>
                        <Link
                          href="/signup"
                          className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full"
                          onClick={() => setMobileNavOpen(false)}
                        >
                          Get Started
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
