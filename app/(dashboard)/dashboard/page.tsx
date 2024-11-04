'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, LogOut, Mail, RefreshCw, Settings, User } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Mock data for demonstration
const activeClaims = [
  { id: 'CLM001', flight: 'LHR to JFK', status: 'Processing' },
  { id: 'CLM002', flight: 'CDG to LAX', status: 'Submitted' },
]

const pastClaims = [
  { id: 'CLM003', flight: 'AMS to SIN', status: 'Approved' },
  { id: 'CLM004', flight: 'FRA to DXB', status: 'Rejected' },
]

export default function Dashboard() {
  const [notifications, setNotifications] = useState(['New claim submitted successfully!'])

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="/placeholder.svg?height=32&width=32"
                  alt="TravelClaim Assistant Logo"
                />
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
                )}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/settings" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, User!</h1>
          
          {notifications.length > 0 && (
            <div className="mt-4 p-4 bg-blue-100 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Bell className="h-5 w-5 text-blue-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Notifications</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <ul className="list-disc pl-5 space-y-1">
                      {notifications.map((notification, index) => (
                        <li key={index}>{notification}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Your Active Claims</h2>
            <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {activeClaims.map((claim) => (
                  <li key={claim.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-primary truncate">
                          {claim.flight}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            
                            {claim.status}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            Claim ID: {claim.id}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Past Claims</h2>
            <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {pastClaims.map((claim) => (
                  <li key={claim.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-primary truncate">
                          {claim.flight}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            claim.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {claim.status}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            Claim ID: {claim.id}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div className="mt-8 flex justify-between">
            <Button onClick={() => alert('Refreshing claims...')} className="flex items-center">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Claims
            </Button>
            <Button variant="outline" onClick={() => alert('Email disconnected')} className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Disconnect Email
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}