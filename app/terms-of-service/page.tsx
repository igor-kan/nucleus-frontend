'use client'
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: [Date]</p>
      <p className="mb-4">Please read these terms of service carefully before using Our Service.</p>
      <h2 className="text-2xl font-semibold mb-3 mt-5">Interpretation and Definitions</h2>
      <p className="mb-4">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
      {/* Add more placeholder terms of service content here */}
      <Link href="/" className="text-blue-500 hover:underline mt-6">Back to Dashboard</Link>
    </div>
  );
} 