'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/app/context/auth-context'
import Image from 'next/image'
import Particles from '@/components/particles'
import Illustration from '@/public/images/page-illustration.svg'

export default function ProfileSettings() {
  const { user, loading, error, updateUserProfile, clearError } = useAuth()
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  // Populate the form with user data when available
  useEffect(() => {
    if (user) {
      setName(user.name || '')
      setCompany(user.company || '')
      setEmail(user.email || '')
    }
  }, [user])

  // Clear success message after some time
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('')
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [successMessage])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear any existing messages
    clearError()
    setSuccessMessage('')
    
    try {
      setIsSaving(true)
      
      // Call the update profile function from auth context
      await updateUserProfile(name, company)
      
      setSuccessMessage('Profile updated successfully!')
    } catch (err) {
      console.error('Error updating profile:', err)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <section className="relative">
      {/* Radial gradient */}
      <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      {/* Illustration */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Account Settings</div>
            <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Your Profile
            </h1>
            <p className="text-lg text-slate-400">Update your personal information and account settings.</p>
          </div>

          {/* Form */}
          <div className="max-w-xl mx-auto">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg p-4 mb-6">
                {error}
              </div>
            )}

            {successMessage && (
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-sm rounded-lg p-4 mb-6">
                {successMessage}
              </div>
            )}

            <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-xl border border-slate-800 p-6 shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Email field - readonly */}
                  <div>
                    <label className="block text-sm text-slate-300 font-medium mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="form-input w-full bg-slate-800/50 border-slate-700 text-slate-300"
                      type="email"
                      value={email}
                      disabled
                      readOnly
                    />
                    <p className="text-xs text-slate-500 mt-1">Your email address cannot be changed.</p>
                  </div>

                  {/* Name field */}
                  <div>
                    <label className="block text-sm text-slate-300 font-medium mb-2" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      className="form-input w-full bg-slate-800/30"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Company field */}
                  <div>
                    <label className="block text-sm text-slate-300 font-medium mb-2" htmlFor="company">
                      Company Name
                    </label>
                    <input
                      id="company"
                      className="form-input w-full bg-slate-800/30"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                  </div>

                  {/* Provider info */}
                  {user?.provider && user.provider !== 'email' && (
                    <div className="rounded-lg bg-slate-800/50 border border-slate-700/50 p-4">
                      <div className="flex items-center">
                        <div className="bg-purple-500/10 p-2 rounded-lg mr-3">
                          <svg className="w-5 h-5 fill-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-slate-300">
                            Connected with <span className="text-purple-400 font-medium capitalize">{user.provider}</span>
                          </p>
                          <p className="text-xs text-slate-500">
                            Your account is linked to your {user.provider} profile.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submit button */}
                  <div>
                    <button
                      type="submit"
                      className="btn text-white bg-purple-500 hover:bg-purple-600 w-full group shadow-sm"
                      disabled={loading || isSaving}
                    >
                      {isSaving ? 'Saving...' : (
                        <>
                          Save Changes <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
