import { Mail } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function PermissionsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/placeholder.svg?height=48&width=48"
            alt="TravelClaim Assistant Logo"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Connect Your Email
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            To automate your claims, we need access to your flight confirmation emails.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <Button className="w-full group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <Mail className="h-5 w-5 text-primary-dark group-hover:text-primary" aria-hidden="true" />
              </span>
              Connect Your Email
            </Button>
          </div>
          <div className="text-sm text-center">
            <Link href="/dashboard" className="font-medium text-primary hover:text-primary-dark">
              Skip for now
            </Link>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-600">
          <p>
            By connecting your email, you agree to our{' '}
            <Link href="/terms" className="font-medium text-primary hover:text-primary-dark">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="font-medium text-primary hover:text-primary-dark">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}