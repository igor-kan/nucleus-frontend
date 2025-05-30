'use client'
import Link from 'next/link';

export default function BillingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Billing</h1>
      <p className="mb-4">Manage your subscription, payment methods, and view invoices here.</p>
      <Link href="/" className="text-blue-500 hover:underline">Back to Dashboard</Link>
    </div>
  );
} 