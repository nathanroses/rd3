'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, name: string, company: string, password: string, referrer: string) => Promise<void>
  signOut: () => void
  resetPassword: (email: string) => Promise<void>
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
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  // Mock sign-in function
  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)
      setError(null)
      
      // In a real app, this would be an API call to your backend
      // For demo purposes, we'll just check if email contains '@' and password is not empty
      if (!email.includes('@') || !password) {
        throw new Error('Invalid email or password')
      }
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Create a dummy user (in a real app, this would come from your backend)
      const newUser = {
        id: '1',
        email,
        name: email.split('@')[0]
      }
      
      // Save user to localStorage for persistence
      localStorage.setItem('user', JSON.stringify(newUser))
      setUser(newUser)
      
      // Redirect to dashboard or home page
      router.push('/')
    } catch (err: any) {
      setError(err.message || 'Failed to sign in')
    } finally {
      setLoading(false)
    }
  }

  // Mock sign-up function
  const signUp = async (email: string, name: string, company: string, password: string, referrer: string) => {
    try {
      setLoading(true)
      setError(null)
      
      // Validate input
      if (!email.includes('@') || !password || !name || !company) {
        throw new Error('Please fill all required fields')
      }
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Create a dummy user
      const newUser = {
        id: '1',
        email,
        name
      }
      
      // Save user to localStorage
      localStorage.setItem('user', JSON.stringify(newUser))
      setUser(newUser)
      
      // Redirect to dashboard or home page
      router.push('/')
    } catch (err: any) {
      setError(err.message || 'Failed to sign up')
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
      
      if (!email.includes('@')) {
        throw new Error('Please enter a valid email')
      }
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real app, this would send a password reset email
      
      // Redirect to a confirmation page
      router.push('/signin')
    } catch (err: any) {
      setError(err.message || 'Failed to reset password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, error, signIn, signUp, signOut, resetPassword }}>
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
