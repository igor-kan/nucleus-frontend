"use client"

import Link from 'next/link';

export default function UpgradePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Upgrade Your Plan</h1>
      <p className="mb-4">Unlock premium features by upgrading your Nucleus AI plan.</p>
      {/* Placeholder for upgrade options/pricing tiers */}
      <div className="mt-6">
        <Link href="/billing" className="text-blue-500 hover:underline mr-4">Go to Billing</Link>
        <Link href="/" className="text-blue-500 hover:underline">Back to Dashboard</Link>
      </div>
    </div>
  );
}
