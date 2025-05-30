'use client'

import Link from 'next/link'

export default function DemoFeaturePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Demo Feature Showcase
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This page would showcase a specific feature of the Nucleus AI platform.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Imagine an interactive demo or video here!
        </p>
        <div className="mt-6">
          <Link href="http://localhost:3000" className="text-blue-500 hover:underline">
            Back to Landing Page
          </Link>
        </div>
      </div>
    </div>
  )
} 