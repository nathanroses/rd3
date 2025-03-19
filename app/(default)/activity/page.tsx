'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/app/context/auth-context'
import Image from 'next/image'
import Link from 'next/link'
import Particles from '@/components/particles'
import Illustration from '@/public/images/page-illustration.svg'

interface ActivityItem {
  id: string
  type: string
  description: string
  timestamp: Date
  details?: string
  data?: any
}

export default function ActivityLog() {
  const { user } = useAuth()
  const [activities, setActivities] = useState<ActivityItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState('all')

  // Fetch activity data
  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true)
      
      try {
        if (!user) return
        
        // This would typically fetch from an API endpoint
        // For now, we'll simulate with mock data
        setTimeout(() => {
          const mockActivities: ActivityItem[] = [
            {
              id: '1',
              type: 'connection',
              description: 'Data source connection successful',
              timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
              details: 'Connected to MongoDB Atlas database'
            },
            {
              id: '2',
              type: 'report',
              description: 'Weekly report generated',
              timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
              details: 'Customer acquisition report for Q1'
            },
            {
              id: '3',
              type: 'alert',
              description: 'Anomaly detected in user flow',
              timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
              details: 'Unusual spike in conversion drop-off at checkout'
            },
            {
              id: '4',
              type: 'login',
              description: 'Successful login',
              timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
              details: 'Login from Chrome on Windows'
            },
            {
              id: '5',
              type: 'integration',
              description: 'New integration added',
              timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
              details: 'Added Shopify integration'
            },
            {
              id: '6',
              type: 'data',
              description: 'Data processing completed',
              timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
              details: 'Processed 1.2GB of customer transaction data'
            },
            {
              id: '7',
              type: 'alert',
              description: 'Potential security threat detected',
              timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
              details: 'Multiple failed login attempts from unknown IP'
            },
            {
              id: '8',
              type: 'report',
              description: 'Monthly performance report',
              timestamp: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
              details: 'System performance metrics for previous month'
            }
          ]
          
          setActivities(mockActivities)
          setLoading(false)
        }, 800)
      } catch (err) {
        console.error('Error fetching activities:', err)
        setError('Failed to load activity data. Please try again.')
        setLoading(false)
      }
    }
    
    fetchActivities()
  }, [user])

  // Filter activities based on selected filter
  const filteredActivities = activities.filter(activity => {
    if (filter === 'all') return true
    return activity.type === filter
  })

  // Format date for display
  const formatDate = (date: Date) => {
    const now = new Date()
    const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`
    }
    
    const diffDays = Math.floor(diffHours / 24)
    if (diffDays < 30) {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`
    }
    
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  // Activity icon based on type
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'connection':
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20">
            <svg className="w-5 h-5 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        )
      case 'report':
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20">
            <svg className="w-5 h-5 fill-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
        )
      case 'alert':
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20">
            <svg className="w-5 h-5 fill-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </div>
        )
      case 'login':
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20">
            <svg className="w-5 h-5 fill-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
        )
      case 'integration':
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/20">
            <svg className="w-5 h-5 fill-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2V9h2v3zm4 5h-2V7h2v10z"/>
            </svg>
          </div>
        )
      case 'data':
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20">
            <svg className="w-5 h-5 fill-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 13H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm0 7H4v-5h16v5zm0-16H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 7H4V6h16v5z"/>
            </svg>
          </div>
        )
      default:
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-500/20">
            <svg className="w-5 h-5 fill-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
        )
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

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Activity Log</div>
            <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Your Recent Activity
            </h1>
            <p className="text-lg text-slate-400">Track and monitor your account activities to stay informed about system changes.</p>
          </div>

          {error && (
            <div className="max-w-3xl mx-auto mb-8">
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg p-4">
                {error}
              </div>
            </div>
          )}

          {/* Filter controls */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-xl border border-slate-800 p-4 flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('connection')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'connection'
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Connections
              </button>
              <button
                onClick={() => setFilter('report')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'report'
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Reports
              </button>
              <button
                onClick={() => setFilter('alert')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'alert'
                    ? 'bg-red-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Alerts
              </button>
              <button
                onClick={() => setFilter('login')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'login'
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Logins
              </button>
              <button
                onClick={() => setFilter('integration')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'integration'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Integrations
              </button>
              <button
                onClick={() => setFilter('data')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'data'
                    ? 'bg-amber-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Data
              </button>
            </div>
          </div>

          {/* Activity list */}
          <div className="max-w-3xl mx-auto">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
              </div>
            ) : filteredActivities.length === 0 ? (
              <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-xl border border-slate-800 p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/80 mb-4">
                  <svg className="w-8 h-8 fill-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No activities found</h3>
                <p className="text-slate-400">
                  {filter === 'all' 
                    ? "You don't have any recorded activities yet." 
                    : `No ${filter} activities found. Try selecting a different filter.`}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredActivities.map((activity) => (
                  <div 
                    key={activity.id}
                    className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-xl border border-slate-800 p-4 flex items-start"
                  >
                    {getActivityIcon(activity.type)}
                    <div className="ml-4 flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                        <h3 className="text-lg font-semibold text-white">{activity.description}</h3>
                        <span className="text-sm text-slate-400 sm:ml-4 whitespace-nowrap">{formatDate(activity.timestamp)}</span>
                      </div>
                      {activity.details && (
                        <p className="text-slate-300 text-sm mb-1">{activity.details}</p>
                      )}
                      <div className="flex items-center text-xs mt-2">
                        <span className={`px-2 py-1 rounded-full capitalize
                          ${activity.type === 'connection' ? 'bg-blue-500/10 text-blue-300' : ''}
                          ${activity.type === 'report' ? 'bg-green-500/10 text-green-300' : ''}
                          ${activity.type === 'alert' ? 'bg-red-500/10 text-red-300' : ''}
                          ${activity.type === 'login' ? 'bg-purple-500/10 text-purple-300' : ''}
                          ${activity.type === 'integration' ? 'bg-indigo-500/10 text-indigo-300' : ''}
                          ${activity.type === 'data' ? 'bg-amber-500/10 text-amber-300' : ''}
                          ${!['connection', 'report', 'alert', 'login', 'integration', 'data'].includes(activity.type) ? 'bg-slate-500/10 text-slate-300' : ''}
                        `}
                        >
                          {activity.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
