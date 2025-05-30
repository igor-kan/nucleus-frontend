'use client'
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();
  useEffect(() => {
    // Simulate logout action
    console.log('User logged out');
    // Redirect to login page or home page after a short delay
    setTimeout(() => {
      router.push('/login'); // Or router.push('/') if you prefer homepage
    }, 1000);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Signing Out...</h1>
      <p>You are being redirected.</p>
    </div>
  );
} 