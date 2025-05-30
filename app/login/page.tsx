'use client'

import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Login to Demo App
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          This is a placeholder login page.
        </p>
        {/* Add login form elements here */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-500 hover:underline">
            Go to Dashboard (Placeholder)
          </Link>
        </div>
         <div className="mt-4 text-center">
          <Link href="http://localhost:3000" className="text-sm text-gray-500 hover:underline">
            Back to Landing Page
          </Link>
        </div>
      </div>
    </div>
  )
} 