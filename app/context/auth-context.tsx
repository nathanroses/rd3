'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/app/lib/supabase'
import { 
  AuthChangeEvent, 
  Session, 
  User as SupabaseUser, 
  ApiError, 
  Provider 
} from '@supabase/supabase-js'

interface User {
  id: string
  email: string | null
  name: string | null
  company?: string | null
  provider?: string
  avatarUrl?: string | null
  lastLogin?: Date | null
}

interface UserMetadata {
  name?: string
  company?: string
  referrer?: string
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
  updateUserProfile: (name: string, company: string) => Promise<void>
  clearError: () => void
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
      email: supabaseUser.email || null,
      name: supabaseUser.user_metadata?.name || supabaseUser.email?.split('@')[0] || null,
      company: supabaseUser.user_metadata?.company || null,
      provider: supabaseUser.app_metadata?.provider || 'email',
      avatarUrl: supabaseUser.user_metadata?.avatar_url || null,
      lastLogin: supabaseUser.last_sign_in_at ? new Date(supabaseUser.last_sign_in_at) : null
    }
  }

  // Clear error message
  const clearError = () => {
    setError(null)
  }

  // Check auth status on mount and subscribe to changes
  useEffect(() => {
    // Get initial session
    const initUser = async () => {
      setLoading(true)
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError) {
          throw sessionError
        }
        
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
  }, [router])

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
      const { error: signInError, data } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      
      if (signInError) throw signInError
      
      // Update last login timestamp in user metadata if needed
      // This would typically be done on the server with a Supabase function
      
      router.push('/dashboard')
    } catch (err: any) {
      console.error('Sign in error:', err)
      setError(err.message || 'Failed to sign in')
    } finally {
      setLoading(false)
    }
  }

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
        router.push('/dashboard')
      }
    } catch (err: any) {
      console.error('Sign up error:', err)
      setError(err.message || 'Failed to sign up')
    } finally {
      setLoading(false)
    }
  }

  // Social sign-in function
  const signInWithSocial = async (providerName: string) => {
    try {
      setLoading(true)
      setError(null)
      
      let provider: Provider;
      
      // Convert provider name to Supabase Provider type
      switch (providerName.toLowerCase()) {
        case 'github':
          provider = 'github';
          break;
        case 'twitter':
          provider = 'twitter';
          break;
        case 'google':
          provider = 'google';
          break;
        default:
          throw new Error(`Authentication provider ${providerName} is not supported`);
      }
      
      // Sign in with social provider
      const { error: signInError } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      })
      
      if (signInError) throw signInError
      
      // No need to navigate, the redirect will happen automatically
    } catch (err: any) {
      console.error('Social sign in error:', err)
      setError(err.message || `Failed to sign in with ${providerName}`)
      setLoading(false)
    }
  }

  // Sign out function
  const signOut = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Call Supabase sign out
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('Sign out error:', error);
        throw error;
      }
      
      // Let the auth state listener handle navigation
      console.log('User signed out successfully');
      
      // Force-clear user state
      setUser(null);
      
    } catch (err: any) {
      console.error('Sign out error:', err);
      setError(err.message || 'Failed to sign out');
    } finally {
      setLoading(false);
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

  // Update user profile function
  const updateUserProfile = async (name: string, company: string) => {
    try {
      setLoading(true)
      setError(null)
      
      if (!name) {
        throw new Error('Name is required')
      }
      
      // Update user metadata
      const { error: updateError, data } = await supabase.auth.updateUser({
        data: {
          name,
          company
        }
      })
      
      if (updateError) throw updateError
      
      // Update local user state if the update was successful
      if (data.user) {
        setUser(formatUser(data.user))
      }
      
    } catch (err: any) {
      console.error('Update profile error:', err)
      setError(err.message || 'Failed to update profile')
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
      signInWithSocial,
      updateUserProfile,
      clearError
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
