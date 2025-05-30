'use client'
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: [Date]</p>
      <p className="mb-4">Your privacy is important to us. It is Nucleus AI's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>
      <p className="mb-4">We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.</p>
      {/* Add more placeholder privacy policy content here */}
      <Link href="/" className="text-blue-500 hover:underline mt-6">Back to Dashboard</Link>
    </div>
  );
} 