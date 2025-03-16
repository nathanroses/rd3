
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

// Mock user database for demonstration
const MOCK_USERS = [
  {
    id: '1',
    email: 'admin@rosedevelopment.com',
    password: 'password123',
    name: 'Admin User'
  },
  {
    id: '2',
    email: 'user@example.com',
    password: 'test123',
    name: 'Test User'
  }
];

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

  // Sign-in function with validation
  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)
      setError(null)
      
      // Basic validation
      if (!email || !password) {
        throw new Error('Email and password are required')
      }
      
      if (!email.includes('@')) {
        throw new Error('Please enter a valid email address')
      }
      
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters')
      }
      
      // For demo purposes: check if user exists in mock database
      const foundUser = MOCK_USERS.find(
        u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );
      
      if (!foundUser) {
        // For easier testing, allow any credentials if not found in mock database
        if (email === 'test@test.com' && password === 'test123') {
          const newUser = {
            id: '999',
            email,
            name: 'Test User'
          }
          
          localStorage.setItem('user', JSON.stringify(newUser))
          setUser(newUser)
          router.push('/')
          return;
        }
        
        // To make authentication work easily for the user
        if (password.length >= 6) {
          const newUser = {
            id: Math.random().toString(36).substring(2, 9),
            email,
            name: email.split('@')[0]
          }
          
          localStorage.setItem('user', JSON.stringify(newUser))
          setUser(newUser)
          router.push('/')
          return;
        }
        
        throw new Error('Invalid email or password')
      }
      
      // Authentication successful
      const { password: _, ...userWithoutPassword } = foundUser;
      localStorage.setItem('user', JSON.stringify(userWithoutPassword))
      setUser(userWithoutPassword)
      
      // Redirect to dashboard or home page
      router.push('/')
    } catch (err: any) {
      setError(err.message || 'Failed to sign in')
    } finally {
      setLoading(false)
    }
  }

  // Social sign-in function
  const signInWithSocial = async (provider: string) => {
    try {
      setLoading(true)
      setError(null)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // In a real app, this would redirect to OAuth flow
      // For demo purposes, we'll create a mock user based on the provider
      const mockEmail = `user@${provider.toLowerCase()}.com`;
      const mockName = provider === 'Twitter' ? 'Twitter User' : 'GitHub User';
      
      const newUser = {
        id: Math.random().toString(36).substring(2, 9),
        email: mockEmail,
        name: mockName,
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

  // Sign-up function with validation
  const signUp = async (email: string, name: string, company: string, password: string, referrer: string) => {
    try {
      setLoading(true)
      setError(null)
      
      // Validate input
      if (!email || !password || !name || !company) {
        throw new Error('All fields are required')
      }
      
      if (!email.includes('@')) {
        throw new Error('Please enter a valid email address')
      }
      
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters')
      }
      
      // Check if email already exists
      const emailExists = MOCK_USERS.some(
        u => u.email.toLowerCase() === email.toLowerCase()
      );
      
      if (emailExists) {
        throw new Error('Email is already registered')
      }
      
      // Create a new user
      const newUser = {
        id: Math.random().toString(36).substring(2, 9),
        email,
        name,
        // In a real app, you would hash the password and save to database
      }
      
      // Save user to localStorage
      localStorage.setItem('user', JSON.stringify(newUser))
      setUser(newUser)
      
      // Redirect to home page
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
      
      if (!email) {
        throw new Error('Email is required')
      }
      
      if (!email.includes('@')) {
        throw new Error('Please enter a valid email address')
      }
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Display success message (handled in component)
      
      // In a real app, this would send a password reset email
      
      // Don't redirect immediately so user can see success message
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
