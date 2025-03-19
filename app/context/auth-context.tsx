'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/app/lib/supabase'
import { AuthChangeEvent, Session, User as SupabaseUser } from '@supabase/supabase-js'

interface User {
  id: string
  email: string | null
  name: string | null
  provider?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, name: string, company: string, password: string, referrer: string) => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  signInWithSocial: (provider: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Format Supabase user to our User type
const formatUser = (supabaseUser: SupabaseUser): User => {
  return {
    id: supabaseUser.id,
    email: supabaseUser.email || null, // Convert undefined to null
    name: supabaseUser.user_metadata?.name || supabaseUser.email?.split('@')[0] || null,
    provider: supabaseUser.app_metadata?.provider || 'email'
  }
}

    // Check auth status on mount and subscribe to changes
  useEffect(() => {
    // Get initial session
    const initUser = async () => {
      setLoading(true)
      try {
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session?.user) {
          const formattedUser = formatUser(session.user)
          setUser(formattedUser)
          console.log('User logged in:', formattedUser)
        } else {
          setUser(null)
          console.log('No active session found')
        }
      } catch (err) {
        console.error('Error getting session:', err)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    initUser()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: AuthChangeEvent, session: Session | null) => {
        console.log('Auth state changed:', event)
        
        if (session?.user) {
          const formattedUser = formatUser(session.user)
          setUser(formattedUser)
          console.log('User updated:', formattedUser)
          
          // Navigate based on auth event
           if (event === 'SIGNED_IN') {
              router.push('/dashboard')
              }
        } else {
          setUser(null)
          
          // Navigate based on auth event
          if (event === 'SIGNED_OUT') {
            router.push('/signin')
          }
        }
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // Sign-in function
  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)
      setError(null)
      
      // Basic validation
      if (!email || !email.includes('@')) {
        throw new Error('Please enter a valid email address')
      }
      
      if (!password || password.length < 6) {
        throw new Error('Password must be at least 6 characters')
      }
      
      // Sign in with Supabase
        const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
      password
             })

    if (signInError) throw signInError

    router.push('/dashboard')  // Changed from '/' to '/dashboard'

  // Sign-up function
  const signUp = async (email: string, name: string, company: string, password: string, referrer: string) => {
    try {
      setLoading(true)
      setError(null)
      
      // Validate input
      if (!email || !email.includes('@')) {
        throw new Error('Please enter a valid email address')
      }
      
      if (!password || password.length < 6) {
        throw new Error('Password must be at least 6 characters')
      }
      
      if (!name) {
        throw new Error('Name is required')
      }
      
      if (!company) {
        throw new Error('Company is required')
      }
      
      // Sign up with Supabase
      const { error: signUpError, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            company,
            referrer
          }
        }
      })
      
      if (signUpError) throw signUpError
      
      // If email confirmation is enabled, notify the user
      if (!data?.user?.confirmed_at) {
        alert('Please check your email to confirm your account before signing in.')
        router.push('/signin')
      } else {
        router.push('/')
      }
    } catch (err: any) {
      console.error('Sign up error:', err)
      setError(err.message || 'Failed to sign up')
    } finally {
      setLoading(false)
    }
  }

  // Social sign-in function
  const signInWithSocial = async (provider: string) => {
    try {
      setLoading(true)
      setError(null)
      
      let providerType: 'github' | 'twitter' | 'google';
      
      if (provider.toLowerCase() === 'github') {
        providerType = 'github'
      } else if (provider.toLowerCase() === 'twitter') {
        providerType = 'twitter'
      } else if (provider.toLowerCase() === 'google') {
        providerType = 'google'
      } else {
        throw new Error(`Authentication provider ${provider} is not supported`)
      }
      
      // Sign in with social provider
      const { error: signInError } = await supabase.auth.signInWithOAuth({
        provider: providerType,
        options: {
          redirectTo: window.location.origin
        }
      })
      
      if (signInError) throw signInError
      
      // No need to navigate, the redirect will happen automatically
    } catch (err: any) {
      console.error('Social sign in error:', err)
      setError(err.message || `Failed to sign in with ${provider}`)
      setLoading(false)
    }
  }

  // Sign out function
const signOut = async () => {
  try {
    setLoading(true)
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      console.error('Sign out error:', error)
      throw error
    }
    
    // User will be set to null via the onAuthStateChange listener
    console.log('User signed out successfully')
    
    // Navigate to signin page (this is also handled by the auth state listener)
    router.push('/signin')
  } catch (err: any) {
    console.error('Sign out error:', err)
  } finally {
    setLoading(false)
  }
}

  // Reset password function
  const resetPassword = async (email: string) => {
    try {
      setLoading(true)
      setError(null)
      
      if (!email || !email.includes('@')) {
        throw new Error('Please enter a valid email address')
      }
      
      // Send password reset email
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password-confirm`
      })
      
      if (resetError) throw resetError
      
      // Success message handled in component
    } catch (err: any) {
      console.error('Reset password error:', err)
      setError(err.message || 'Failed to reset password')
    } finally {
      setLoading(false)
    }
  }

return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      error, 
      signIn, 
      signUp, 
      signOut, 
      resetPassword,
      signInWithSocial 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
