'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/app/context/auth-context'
import Image from 'next/image'
import Link from 'next/link'
import Particles from '@/components/particles'
import Illustration from '@/public/images/page-illustration.svg'

// Component for the Create Report Modal
const CreateReportModal = ({ isOpen, onClose }) => {
  const [reportName, setReportName] = useState('')
  const [reportType, setReportType] = useState('performance')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      setLoading(false)
      alert(`Report "${reportName}" created successfully!`)
      onClose()
      setReportName('')
    }, 1000)
  }

  if (!isOpen)  null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Create New Report</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="report-name">Report Name</label>
              <input 
                id="report-name" 
                className="form-input w-full bg-slate-700 border border-slate-600 text-white" 
                type="text" 
                value={reportName}
                onChange={(e) => setReportName(e.target.value)}
                required 
                placeholder="Q1 Performance Analysis"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="report-type">Report Type</label>
              <select
                id="report-type"
                className="form-select w-full bg-slate-700 border border-slate-600 text-white"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="performance">Performance Report</option>
                <option value="analytics">Analytics Report</option>
                <option value="financial">Financial Report</option>
                <option value="custom">Custom Report</option>
              </select>
            </div>
            <div className="flex space-x-3 pt-4">
              <button 
                type="button" 
                onClick={onClose}
                className="btn-sm text-slate-300 border border-slate-700 hover:bg-slate-700 w-full"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full"
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Report'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

// Component for the Connect Data Source Modal
const ConnectDataSourceModal = ({ isOpen, onClose }) => {
  const [source, setSource] = useState('')
  const [connectionString, setConnectionString] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      setLoading(false)
      alert(`Data source "${source}" connected successfully!`)
      onClose()
      setSource('')
      setConnectionString('')
    }, 1200)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Connect Data Source</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="source-type">Source Type</label>
              <select
                id="source-type"
                className="form-select w-full bg-slate-700 border border-slate-600 text-white"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                required
              >
                <option value="">Select a data source</option>
                <option value="mysql">MySQL Database</option>
                <option value="postgres">PostgreSQL</option>
                <option value="mongodb">MongoDB</option>
                <option value="api">REST API</option>
                <option value="csv">CSV File</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-300 font-medium mb-1" htmlFor="connection-string">Connection Details</label>
              <textarea 
                id="connection-string" 
                className="form-textarea w-full bg-slate-700 border border-slate-600 text-white h-24" 
                value={connectionString}
                onChange={(e) => setConnectionString(e.target.value)}
                placeholder="Connection string or API endpoint URL"
                required
              />
            </div>
            <div className="flex space-x-3 pt-4">
              <button 
                type="button" 
                onClick={onClose}
                className="btn-sm text-slate-300 border border-slate-700 hover:bg-slate-700 w-full"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn-sm text-white bg-green-500 hover:bg-green-600 w-full"
                disabled={loading}
              >
                {loading ? 'Connecting...' : 'Connect Source'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const { user } = useAuth()
  const [greeting, setGreeting] = useState('')
  const [isCreateReportModalOpen, setIsCreateReportModalOpen] = useState(false)
  const [isConnectDataSourceModalOpen, setIsConnectDataSourceModalOpen] = useState(false)

  useEffect(() => {
    // Set personalized greeting based on time of day
    const hours = new Date().getHours()
    if (hours < 12) {
      setGreeting('Good morning')
    } else if (hours < 17) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good evening')
    }
  }, [])

   (
    <section className="relative">
      {/* Modals */}
  <CreateReportModal 
  isOpen={isCreateReportModalOpen} 
  onClose={() => setIsCreateReportModalOpen(false)} 
    />
  <ConnectDataSourceModal 
  isOpen={isConnectDataSourceModalOpen} 
  onClose={() => setIsConnectDataSourceModalOpen(false)} 
   />
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
              {greeting}, {user?.name || user?.email?.split('@')[0] || 'there'}!
            </h1>
            <p className="text-lg text-slate-400">Access your personalized tools and analytics in one place.</p>
          </div>

          {/* Stats section */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
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
                <div className="text-2xl font-bold text-white">57%</div>
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
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-sm text-green-400 flex items-center">
                  +1
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
                <div className="text-2xl font-bold text-white">42</div>
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
                <div className="text-2xl font-bold text-white">98.7%</div>
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
              <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-xl border border-slate-800 p-6">
                <h2 className="text-xl font-bold text-white mb-4">Your Active Solutions</h2>
                
                <div className="space-y-4">
                  {/* Feature 1 */}
                  <div className="flex items-start">
                    <div className="bg-purple-500/10 p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6 fill-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Cloud Analytics</h3>
                      <p className="text-slate-400 mb-2">Real-time data processing with automated reporting.</p>
                      <div className="flex space-x-2">
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Active</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Feature 2 */}
                  <div className="flex items-start pt-4 border-t border-slate-700">
                    <div className="bg-blue-500/10 p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Security Suite</h3>
                      <p className="text-slate-400 mb-2">Advanced protection with end-to-end encryption.</p>
                      <div className="flex space-x-2">
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recent Activity */}
              <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-xl border border-slate-800 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-white">Recent Activity</h2>
                  <Link href="/activity" className="text-sm text-purple-400 hover:text-purple-300">View all</Link>
                </div>
                
                <div className="space-y-4">
                  {/* Activity items */}
                  <div className="flex items-start">
                    <div className="shrink-0 bg-blue-500/20 rounded-full p-2 mr-3">
                      <svg className="w-4 h-4 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white">Data source connection successful</p>
                      <p className="text-xs text-slate-500">2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="shrink-0 bg-green-500/20 rounded-full p-2 mr-3">
                      <svg className="w-4 h-4 fill-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white">Weekly report generated</p>
                      <p className="text-xs text-slate-500">Yesterday</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column */}
            <div className="space-y-6">
              {/* Plan info */}
              <div className="bg-gradient-to-tr from-purple-900/30 to-slate-800/10 rounded-xl border border-purple-800/30 p-6">
                <h2 className="text-xl font-bold text-white mb-4">Your Plan</h2>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="mr-2 bg-purple-500/20 px-2 py-1 rounded text-xs font-medium text-purple-300">LAUNCH</div>
                    <div className="text-sm text-slate-400">Until April 19, 2025</div>
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
                      <span className="text-slate-300">3 / 10 GB</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-700/30 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-1.5 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick actions */}
              <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-xl border border-slate-800 p-6">
  <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
  <div className="space-y-2">
    <button 
      className="flex items-center w-full p-3 bg-slate-800 hover:bg-slate-700 transition-colors rounded-lg text-left"
      onClick={() => setIsCreateReportModalOpen(true)}
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
      onClick={() => setIsConnectDataSourceModalOpen(true)}
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
        </div>
      </div>
    </section>
  )
}
