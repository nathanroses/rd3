'use client'

import { useState } from 'react'
import AuthLogo from '../auth-logo'
import { useAuth } from '@/app/context/auth-context'

export default function ResetPassword() {
  const [email, setEmail] = useState('')
  const [resetSent, setResetSent] = useState(false)
  const { resetPassword, loading, error } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await resetPassword(email)
    setResetSent(true)
  }

  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12">
        {/* Logo */}
        <AuthLogo />
        {/* Page title */}
        <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Reset your password</h1>
      </div>

      {/* Form */}
      <div className="max-w-sm mx-auto">

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg p-3 mb-4">
            {error}
          </div>
        )}

        {resetSent ? (
          <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-sm rounded-lg p-4">
            <p>If your email is registered with us, you'll receive a password reset link shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="email">Email</label>
                <input 
                  id="email" 
                  className="form-input w-full" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
            </div>
            <div className="mt-6">
              <button 
                type="submit"
                className="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group"
                disabled={loading}
              >
                {loading ? 'Processing...' : (
                  <>
                    Reset Password <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </>
  )
}
