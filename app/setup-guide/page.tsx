'use client'

import Link from 'next/link'

export default function SetupGuidePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Account Setup Guide
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This page would guide the user through the remaining steps to set up their Nucleus AI account and services.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          (E.g., Configure phone number, set up call routing, AI personality, etc.)
        </p>
        <div className="mt-6">
          <Link href="/" className="text-blue-500 hover:underline">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
} 