'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  name: string
  provider?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, name: string, company: string, password: string, referrer: string) => Promise<void>
  signOut: () => void
  resetPassword: (email: string) => Promise<void>
  signInWithSocial: (provider: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Check if user is already logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (err) {
        localStorage.removeItem('user')
      }
    }
    setLoading(false)
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
      
      // Simple mock authentication
      // In a real application, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const newUser = {
        id: '1',
        email,
        name: email.split('@')[0]
      }
      
      localStorage.setItem('user', JSON.stringify(newUser))
      setUser(newUser)
      
      router.push('/')
    } catch (err: any) {
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
      
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const newUser = {
        id: Math.random().toString(36).substring(2, 9),
        email,
        name
      }
      
      localStorage.setItem('user', JSON.stringify(newUser))
      setUser(newUser)
      
      router.push('/')
    } catch (err: any) {
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
      
      // Mock social authentication
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const newUser = {
        id: Math.random().toString(36).substring(2, 9),
        email: `user@${provider.toLowerCase()}.com`,
        name: `${provider} User`,
        provider
      }
      
      localStorage.setItem('user', JSON.stringify(newUser))
      setUser(newUser)
      
      router.push('/')
    } catch (err: any) {
      setError(err.message || `Failed to sign in with ${provider}`)
    } finally {
      setLoading(false)
    }
  }

  // Sign out function
  const signOut = () => {
    localStorage.removeItem('user')
    setUser(null)
    router.push('/signin')
  }

  // Reset password function
  const resetPassword = async (email: string) => {
    try {
      setLoading(true)
      setError(null)
      
      if (!email || !email.includes('@')) {
        throw new Error('Please enter a valid email address')
      }
      
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // In a real app, would send password reset email
      
      // Success message (handled in component)
    } catch (err: any) {
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
