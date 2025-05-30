'use client'

import Link from 'next/link'

export default function ScheduleDemoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Schedule a Demo
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This page would typically contain a form (e.g., Calendly embed or a custom form) 
          to allow users to schedule a demonstration with the sales team.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          For now, it's a placeholder.
        </p>
        {/* Placeholder for scheduling widget/form */}
        <div className="mt-6">
          <Link href="http://localhost:3000" className="text-blue-500 hover:underline">
            Back to Landing Page
          </Link>
        </div>
      </div>
    </div>
  )
} 