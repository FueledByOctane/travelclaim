'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false)

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
            Welcome to TravelClaim Assistant
          </h2>
        </div>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form className="mt-8 space-y-6" action="#" method="POST">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <Label htmlFor="login-email" className="sr-only">
                    Email address
                  </Label>
                  <Input
                    id="login-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="rounded-t-md"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <Label htmlFor="login-password" className="sr-only">
                    Password
                  </Label>
                  <Input
                    id="login-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    className="rounded-b-md"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link href="/forgot-password" className="font-medium text-primary hover:text-primary-dark">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Continue with Google
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="register">
            <form className="mt-8 space-y-6" action="#" method="POST">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <Label htmlFor="register-name" className="sr-only">
                    Full Name
                  </Label>
                  <Input
                    id="register-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="rounded-t-md"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <Label htmlFor="register-email" className="sr-only">
                    Email address
                  </Label>
                  <Input
                    id="register-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <Label htmlFor="register-password" className="sr-only">
                    Password
                  </Label>
                  <Input
                    id="register-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    className="rounded-b-md"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Continue with Google
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}