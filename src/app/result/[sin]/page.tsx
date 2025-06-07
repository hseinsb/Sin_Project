'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { sinProfiles } from '@/data/profiles';
import { Sin } from '@/types/quiz';
import Link from 'next/link';

export default function ResultPage() {
  const params = useParams();
  const router = useRouter();
  const [userData, setUserData] = useState<{name: string; result: string} | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const sin = params.sin as Sin;
  const profile = sinProfiles[sin];

  useEffect(() => {
    // Check if user has completed the quiz
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) {
      router.push('/');
      return;
    }

    try {
      const data = JSON.parse(userDataString);
      if (data.result !== sin) {
        // Redirect to correct result if URL doesn't match
        router.push(`/result/${data.result}`);
        return;
      }
      setUserData(data);
    } catch {
      router.push('/');
      return;
    } finally {
      setIsLoading(false);
    }
  }, [sin, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (!profile) {
    router.push('/');
    return null;
  }

  const getSinIcon = (sinType: Sin) => {
    const icons = {
      pride: '👑',
      greed: '💰',
      wrath: '🔥',
      envy: '👁',
      lust: '🔥',
      gluttony: '🍷',
      sloth: '😴'
    };
    return icons[sinType] || '⭐';
  };

  return (
    <div className="min-h-screen py-12 px-6">
      {/* Background with sin-specific styling */}
      <div className={`absolute inset-0 sin-${sin} opacity-10`}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <div className="text-6xl mb-4">{getSinIcon(sin)}</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 serif">
            {profile.title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-amber-400 font-semibold">
            {profile.archetype}
          </h2>
          {userData && (
            <p className="text-gray-300 mt-4 text-lg">
              Welcome, <span className="text-amber-400 font-medium">{userData.name}</span>
            </p>
          )}
        </div>

        {/* Profile content */}
        <div className="grid md:grid-cols-1 gap-8 mb-12">
          {/* Your Desire */}
          <div className="card slide-up">
            <h3 className="text-2xl font-bold text-amber-400 mb-4 serif flex items-center">
              <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-black text-lg mr-3">
                ✨
              </span>
              Your Desire
            </h3>
            <p className="text-xl text-gray-200 leading-relaxed">
              {profile.desire}
            </p>
          </div>

          {/* Your Shadow */}
          <div className="card slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-red-400 mb-4 serif flex items-center">
              <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-lg mr-3">
                🌑
              </span>
              Your Shadow
            </h3>
            <p className="text-xl text-gray-200 leading-relaxed italic">
              {profile.shadow}
            </p>
          </div>

          {/* Your Path */}
          <div className="card slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-green-400 mb-4 serif flex items-center">
              <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-lg mr-3">
                🌟
              </span>
              Your Path
            </h3>
            <p className="text-xl text-gray-200 leading-relaxed font-medium border-l-4 border-green-400 pl-6">
              {profile.path}
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center card slide-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-white mb-4 serif">
            Want to Master This Shadow?
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Your journey of self-discovery has just begun. 
            Dive deeper into the mysteries of your psyche and unlock your true potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Take Quiz Again
            </Link>
            <button className="btn-secondary">
              Join Private Community
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Ready for deeper insights?
            </p>
            <button className="text-amber-400 hover:text-amber-300 font-medium mt-2 underline">
              Download Extended Shadow Analysis (Premium)
            </button>
          </div>
        </div>

        {/* Share section */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Share your shadow archetype
          </p>
          <div className="flex justify-center space-x-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              Share on Twitter
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              Copy Link
            </button>
          </div>
        </div>

        {/* Footer quote */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm italic max-w-2xl mx-auto">
            &ldquo;One does not become enlightened by imagining figures of light, but by making the darkness conscious.&rdquo;
          </p>
          <p className="text-gray-600 text-xs mt-2">— Carl Jung</p>
        </div>
      </div>
    </div>
  );
} 