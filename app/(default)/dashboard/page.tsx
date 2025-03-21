'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/app/context/auth-context'
import Image from 'next/image'
import Link from 'next/link'
import Particles from '@/components/particles'
import Illustration from '@/public/images/page-illustration.svg'
import { supabase } from '@/app/lib/supabase'

// Define interfaces for type safety
interface UserStats {
  dataUsage: number;
  integrations: number;
  activeUsers: number;
  performance: number;
  growth?: {
    dataUsage: number;
    integrations: number;
    activeUsers: number;
    performance: number;
  }
}

interface ActiveSolution {
  id: string;
  name: string;
  description: string;
  status: string;
  icon: string;
}

interface ActivityItem {
  id: string;
  description: string;
  timeAgo: string;
  icon: string;
  iconBg: string;
}

export default function Dashboard() {
  const { user } = useAuth()
  const [greeting, setGreeting] = useState('')
  const [stats, setStats] = useState<UserStats>({
    dataUsage: 0,
    integrations: 0,
    activeUsers: 0,
    performance: 0
  })
  const [activeSolutions, setActiveSolutions] = useState<ActiveSolution[]>([])
  const [recentActivity, setRecentActivity] = useState<ActivityItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [storageUsed, setStorageUsed] = useState(0)
  const [storageLimit, setStorageLimit] = useState(10)
  const [planEndDate, setPlanEndDate] = useState('')

  // Set personalized greeting based on time of day
  useEffect(() => {
    const hours = new Date().getHours()
    if (hours < 12) {
      setGreeting('Good morning')
    } else if (hours < 17) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good evening')
    }
  }, [])

  // Fetch user data from Supabase
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true)
      
      try {
        if (!user) return
        
        // This would typically be an actual API call to your backend
        // For now, we'll simulate data with a timeout to mimic actual loading
        setTimeout(() => {
          // Simulate fetching user stats
          setStats({
    dataUsage: 57,
    integrations: 3,
    activeUsers: 42,
      performance: 98.7,
      growth: {
          dataUsage: 12,
         integrations: 1,
         activeUsers: 8,
         performance: 1.2
                  }
               })
          
          // Simulate fetching active solutions
          setActiveSolutions([
            {
              id: '1',
              name: 'Cloud Analytics',
              description: 'Real-time data processing with automated reporting.',
              status: 'Active',
              icon: 'cloud'
            },
            {
              id: '2',
              name: 'Security Suite',
              description: 'Advanced protection with end-to-end encryption.',
              status: 'Active',
              icon: 'shield'
            }
          ])
          
          // Simulate fetching recent activity
          setRecentActivity([
            {
              id: '1',
              description: 'Data source connection successful',
              timeAgo: '2 hours ago',
              icon: 'check',
              iconBg: 'blue-500'
            },
            {
              id: '2',
              description: 'Weekly report generated',
              timeAgo: 'Yesterday',
              icon: 'document',
              iconBg: 'green-500'
            }
          ])
          
          // Simulate fetching storage usage
          setStorageUsed(3)
          setStorageLimit(10)
          
          // Set plan end date to one month from now
          const endDate = new Date()
          endDate.setMonth(endDate.getMonth() + 1)
          setPlanEndDate(endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))
          
          setLoading(false)
        }, 800)
      } catch (err) {
        console.error('Error fetching user data:', err)
        setError('Failed to load dashboard data. Please try again.')
        setLoading(false)
      }
    }
    
    fetchUserData()
  }, [user])

  // Function to render activity icon
  const renderActivityIcon = (iconName: string, bgColor: string) => {
    switch (iconName) {
      case 'check':
        return (
          <div className={`shrink-0 bg-${bgColor}/20 rounded-full p-2 mr-3`}>
            <svg className={`w-4 h-4 fill-${bgColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        )
      case 'document':
        return (
          <div className={`shrink-0 bg-${bgColor}/20 rounded-full p-2 mr-3`}>
            <svg className={`w-4 h-4 fill-${bgColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
        )
      default:
        return (
          <div className={`shrink-0 bg-${bgColor}/20 rounded-full p-2 mr-3`}>
            <svg className={`w-4 h-4 fill-${bgColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </div>
        )
    }
  }

  // Function to render solution icon
  const renderSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'cloud':
        return (
          <div className="bg-purple-500/10 p-2 rounded-lg mr-4">
            <svg className="w-6 h-6 fill-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
            </svg>
          </div>
        )
      case 'shield':
        return (
          <div className="bg-blue-500/10 p-2 rounded-lg mr-4">
            <svg className="w-6 h-6 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
          </div>
        )
      default:
        return (
          <div className="bg-purple-500/10 p-2 rounded-lg mr-4">
            <svg className="w-6 h-6 fill-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
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

          {/* Welcome section */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Your Dashboard</div>
            <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              {loading ? 'Loading...' : `${greeting}, ${user?.name || user?.email?.split('@')[0] || 'there'}!`}
            </h1>
            <p className="text-lg text-slate-400">Access your personalized tools and analytics in one place.</p>
          </div>

          {error && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg p-4 mb-8">
                {error}
              </div>
            </div>
          )}

          {loading ? (
            // Loading state
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : (
            <>
              {/* Stats section */}
              <div className="grid md:grid-cols-4 gap-6 mb-12" data-aos="fade-up">
                {/* Stat 1 */}
                <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-xl border border-slate-800 p-5">
                  <div className="flex items-center space-x-2">
                    <div className="bg-purple-500/10 p-2 rounded-lg">
                      <svg className="w-6 h-6 fill-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-slate-400">Data Usage</span>
                  </div>
                  <div className="flex items-end justify-between mt-3">
                    <div className="text-2xl font-bold text-white">{stats.dataUsage}%</div>
                    <div className="text-sm text-green-400 flex items-center">
                      +12%
                      <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                    {/* Stat 2 */}
<div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-xl border border-slate-800 p-5">
  <div className="flex items-center space-x-2">
    <div className="bg-blue-500/10 p-2 rounded-lg">
      <svg className="w-6 h-6 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-5h5v5zm5-5h-3v5h3v-5zm0-5H7V7h10v5z"/>
      </svg>
    </div>
    <span className="text-sm text-slate-400">Integrations</span>
  </div>
  <div className="flex items-end justify-between mt-3">
    <div className="text-2xl font-bold text-white">{stats.integrations}</div>
    <div className="text-sm text-green-400 flex items-center">
      +{stats.growth?.integrations || 1}
      <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
</div>

                
   
                
                {/* Stat 3 */}
                <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-xl border border-slate-800 p-5">
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-500/10 p-2 rounded-lg">
                      <svg className="w-6 h-6 fill-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-slate-400">Active Users</span>
                  </div>
                  <div className="flex items-end justify-between mt-3">
                    <div className="text-2xl font-bold text-white">{stats.activeUsers}</div>
                    <div className="text-sm text-green-400 flex items-center">
                      +8%
                      <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Stat 4 */}
                <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-xl border border-slate-800 p-5">
                  <div className="flex items-center space-x-2">
                    <div className="bg-orange-500/10 p-2 rounded-lg">
                      <svg className="w-6 h-6 fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-slate-400">Performance</span>
                  </div>
                  <div className="flex items-end justify-between mt-3">
                    <div className="text-2xl font-bold text-white">{stats.performance}%</div>
                    <div className="text-sm text-green-400 flex items-center">
                      +1.2%
                      <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main content columns */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left column - Features */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Active Solutions */}
                  <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-xl border border-slate-800 p-6" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-xl font-bold text-white mb-4">Your Active Solutions</h2>
                    
                    <div className="space-y-4">
                      {activeSolutions.map((solution) => (
                        <div key={solution.id} className="flex items-start">
                          {renderSolutionIcon(solution.icon)}
                          <div>
                            <h3 className="text-lg font-semibold text-white">{solution.name}</h3>
                            <p className="text-slate-400 mb-2">{solution.description}</p>
                            <div className="flex space-x-2">
                              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">{solution.status}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Recent Activity */}
                  <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-xl border border-slate-800 p-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold text-white">Recent Activity</h2>
                      <Link href="/activity" className="text-sm text-purple-400 hover:text-purple-300">View all</Link>
                    </div>
                    
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start">
                          {renderActivityIcon(activity.icon, activity.iconBg)}
                          <div>
                            <p className="text-sm text-white">{activity.description}</p>
                            <p className="text-xs text-slate-500">{activity.timeAgo}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right column */}
                <div className="space-y-6">
                  {/* Plan info */}
                  <div className="bg-gradient-to-tr from-purple-900/30 to-slate-800/10 rounded-xl border border-purple-800/30 p-6" data-aos="fade-up" data-aos-delay="400">
                    <h2 className="text-xl font-bold text-white mb-4">Your Plan</h2>
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <div className="mr-2 bg-purple-500/20 px-2 py-1 rounded text-xs font-medium text-purple-300">LAUNCH</div>
                        <div className="text-sm text-slate-400">Until {planEndDate}</div>
                      </div>
                      <p className="text-sm text-slate-400 mb-3">Your current plan includes basic analytics.</p>
                      <Link href="/pricing" className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full text-center">
                        Upgrade Plan
                      </Link>
                    </div>
                    
                    {/* Usage indicators */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-400">Data Storage</span>
                          <span className="text-slate-300">{storageUsed} / {storageLimit} GB</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-700/30 rounded-full overflow-hidden">
                          <div 
                            className="bg-purple-500 h-1.5 rounded-full" 
                            style={{width: `${(storageUsed / storageLimit) * 100}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick actions */}
                  <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-xl border border-slate-800 p-6" data-aos="fade-up" data-aos-delay="500">
                    <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
                    <div className="space-y-2">
                      <button 
                        className="flex items-center w-full p-3 bg-slate-800 hover:bg-slate-700 transition-colors rounded-lg text-left"
                        onClick={() => alert('Create report feature will be implemented in a future update.')}
                      >
                        <div className="bg-blue-500/10 p-2 rounded-lg mr-3">
                          <svg className="w-5 h-5 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                          </svg>
                        </div>
                        <span className="text-sm text-slate-300">Create New Report</span>
                      </button>
                      <button 
                        className="flex items-center w-full p-3 bg-slate-800 hover:bg-slate-700 transition-colors rounded-lg text-left"
                        onClick={() => alert('Connect data source feature will be implemented in a future update.')}
                      >
                        <div className="bg-green-500/10 p-2 rounded-lg mr-3">
                          <svg className="w-5 h-5 fill-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                          </svg>
                        </div>
                        <span className="text-sm text-slate-300">Connect Data Source</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
