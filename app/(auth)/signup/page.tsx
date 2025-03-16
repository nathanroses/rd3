'use client'

import { useState } from 'react'
import Link from 'next/link'
import AuthLogo from '../auth-logo'
import { useAuth } from '@/app/context/auth-context'

export default function SignUp() {
  const [company, setCompany] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [referrer, setReferrer] = useState('Google')
  const { signUp, loading, error, signInWithSocial } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await signUp(email, fullName, company, password, referrer)
  }

  const handleSocialSignIn = async (provider: string) => {
    await signInWithSocial(provider)
  }

  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12">
        {/* Logo */}
        <AuthLogo />
        {/* Page title */}
        <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Create your free account</h1>
      </div>

      {/* Form */}
      <div className="max-w-sm mx-auto">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg p-3 mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="company">Company <span className="text-rose-500">*</span></label>
              <input 
                id="company" 
                className="form-input w-full" 
                type="text" 
                placeholder="E.g., Acme Inc." 
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required 
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="full-name">Full Name <span className="text-rose-500">*</span></label>
              <input 
                id="full-name" 
                className="form-input w-full" 
                type="text" 
                placeholder="E.g., Mark Rossi" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required 
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="email">Email <span className="text-rose-500">*</span></label>
              <input 
                id="email" 
                className="form-input w-full" 
                type="email" 
                placeholder="markrossi@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="password">Password <span className="text-rose-500">*</span></label>
              <input 
                id="password" 
                className="form-input w-full" 
                type="password" 
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="referrer">Where did you hear about us? <span className="text-rose-500">*</span></label>
              <select 
                id="referrer" 
                className="form-select text-sm py-2 w-full" 
                value={referrer}
                onChange={(e) => setReferrer(e.target.value)}
                required
              >
                <option>Google</option>
                <option>Medium</option>
                <option>GitHub</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <button 
              type="submit"
              className="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group"
              disabled={loading}
            >
              {loading ? 'Creating account...' : (
                <>
                  Sign Up <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
    </>
  )
}
