'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '@/public/images/logo.svg'
import { useAuth } from '@/app/context/auth-context'

export default function Header() {
  const pathname = usePathname()
  const [top, setTop] = useState<boolean>(true)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { user, signOut, loading } = useAuth()
  
  // Fix: Change the ref type to HTMLLIElement to match the <li> element
  const userMenuRef = useRef<HTMLLIElement>(null)

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Handle sign out
  const handleSignOut = async () => {
    setUserMenuOpen(false)
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
                <li className="relative" ref={userMenuRef}>
                  <button 
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center text-slate-300 hover:text-white transition duration-150 ease-in-out px-3 py-2 text-sm font-medium"
                  >
                    <span className="mr-1">{user.name || user.email?.split('@')[0]}</span>
                    <svg 
                      className={`w-4 h-4 ml-1 fill-current text-slate-400 transition-transform duration-150 ${userMenuOpen ? 'rotate-180' : ''}`} 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  
                  {/* User dropdown menu */}
                  <div 
                    className={`absolute right-0 mt-1 py-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg ${userMenuOpen ? 'block' : 'hidden'}`}
                  >
                    <div className="px-4 py-2 border-b border-slate-700">
                      <div className="text-sm font-medium text-white">{user.name || 'User'}</div>
                      <div className="text-xs text-slate-400 truncate">{user.email}</div>
                    </div>
                    <Link 
                      href="/dashboard" 
                      className={`block px-4 py-2 text-sm ${pathname === '/dashboard' ? 'text-purple-400' : 'text-slate-300 hover:text-white hover:bg-slate-700'}`}
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link 
                      href="/profile" 
                      className={`block px-4 py-2 text-sm ${pathname === '/profile' ? 'text-purple-400' : 'text-slate-300 hover:text-white hover:bg-slate-700'}`}
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Profile Settings
                    </Link>
                    <Link 
                      href="/activity" 
                      className={`block px-4 py-2 text-sm ${pathname === '/activity' ? 'text-purple-400' : 'text-slate-300 hover:text-white hover:bg-slate-700'}`}
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Activity Log
                    </Link>
                    <div className="border-t border-slate-700 mt-2 pt-2">
                      <button 
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-slate-700"
                      >
                        Sign Out
                      </button>
                    </div>
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
          </nav>

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
                      <div className="space-y-2">
                        <div className="bg-slate-800/50 p-3 rounded-lg mb-4">
                          <div className="text-white font-medium mb-1">
                            {user.name || 'User'}
                          </div>
                          <div className="text-sm text-slate-400 truncate mb-3">
                            {user.email}
                          </div>
                          <div className="space-y-2">
                            <Link
                              href="/dashboard"
                              className="block text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-800 transition-colors"
                              onClick={() => setMobileNavOpen(false)}
                            >
                              Dashboard
                            </Link>
                            <Link
                              href="/profile"
                              className="block text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-800 transition-colors"
                              onClick={() => setMobileNavOpen(false)}
                            >
                              Profile Settings
                            </Link>
                            <Link
                              href="/activity"
                              className="block text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-slate-800 transition-colors"
                              onClick={() => setMobileNavOpen(false)}
                            >
                              Activity Log
                            </Link>
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            handleSignOut();
                            setMobileNavOpen(false);
                          }}
                          className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full"
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
