'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AuthLogo from '../auth-logo'
import { supabase } from '@/app/lib/supabase'

export default function ResetPasswordConfirm() {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if we have a hash in the URL
    const hashParams = new URLSearchParams(window.location.hash.substring(1))
    if (!hashParams.get('access_token')) {
      // If no access token, redirect to reset password page
      router.push('/reset-password')
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (password !== passwordConfirm) {
      setError('Passwords do not match')
      return
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    
    setLoading(true)
    setError(null)
    
    try {
      const { error: resetError } = await supabase.auth.updateUser({
        password
      })
      
      if (resetError) throw resetError
      
      setSuccess(true)
      
      // Redirect after a delay
      setTimeout(() => {
        router.push('/signin')
      }, 3000)
    } catch (err: any) {
      console.error('Password reset error:', err)
      setError(err.message || 'Failed to reset password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12">
        {/* Logo */}
        <AuthLogo />
        {/* Page title */}
        <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Set new password</h1>
      </div>

      {/* Form */}
      <div className="max-w-sm mx-auto">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg p-3 mb-4">
            {error}
          </div>
        )}

        {success ? (
          <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-sm rounded-lg p-4">
            <p>Your password has been successfully reset. You will be redirected to the sign in page shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="password">New Password</label>
                <input 
                  id="password" 
                  className="form-input w-full" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="password-confirm">Confirm New Password</label>
                <input 
                  id="password-confirm" 
                  className="form-input w-full" 
                  type="password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)} 
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
