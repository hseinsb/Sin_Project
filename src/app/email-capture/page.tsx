'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { calculateScores, getDominantSin } from '@/utils/quiz';

export default function EmailCapturePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    consent: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    // Check if user came from quiz
    const answers = localStorage.getItem('quizAnswers');
    if (!answers) {
      router.push('/');
    }
  }, [router]);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Your mystical name is required to reveal your shadow';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Your email is the key to unlock your profile';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email to access the shadow realm';
    }

    if (!formData.consent) {
      newErrors.consent = 'Grant permission to receive wisdom and unlock your shadow profile';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Get quiz answers from localStorage
      const answersString = localStorage.getItem('quizAnswers');
      if (!answersString) {
        router.push('/');
        return;
      }

      const answers = JSON.parse(answersString);
      const scores = calculateScores(answers);
      const dominantSin = getDominantSin(scores);

      // Store user data and result
      const userData = {
        ...formData,
        answers,
        result: dominantSin,
        timestamp: new Date().toISOString()
      };

      localStorage.setItem('userData', JSON.stringify(userData));

      // Simulate API call with dramatic loading
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Redirect to results
      router.push(`/result/${dominantSin}`);
    } catch (error) {
      console.error('Error processing submission:', error);
      setErrors({ submit: 'The shadows resist... Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative">
      {/* Mystical background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 border-4 border-amber-500/30 rounded-full animate-spin"></div>
              <div className="absolute inset-4 w-24 h-24 border-4 border-amber-400/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              <div className="absolute inset-8 w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 serif">Unveiling Your Shadow...</h3>
            <p className="text-amber-400 text-lg">The darkness reveals its secrets</p>
            <div className="mt-6 flex justify-center space-x-2">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-lg relative z-10">
        <div className="card fade-in">
          {/* Mystical header */}
          <div className="text-center mb-10">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 border-2 border-amber-400/50 rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>
                <div className="absolute inset-2 border border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-4 w-8 h-8 bg-gradient-to-r from-amber-400 to-purple-500 rounded-full opacity-80 pulse-glow"></div>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-6 serif">
              Unlock Your <span className="gradient-text">Shadow Profile</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Your psychological archetype awaits revelation.<br/>
              <span className="text-amber-400">Enter the gateway to your true self.</span>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-white font-semibold text-lg flex items-center">
                <span className="text-amber-400 mr-2">✨</span>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-6 py-4 bg-gray-800/70 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-all duration-300 text-lg ${
                  errors.name ? 'border-red-500 bg-red-500/10' : 'border-gray-600 focus:bg-gray-800/90'
                }`}
                placeholder="Enter your mystical name..."
              />
              {errors.name && (
                <p className="text-red-400 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-white font-semibold text-lg flex items-center">
                <span className="text-amber-400 mr-2">🔮</span>
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-6 py-4 bg-gray-800/70 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-all duration-300 text-lg ${
                  errors.email ? 'border-red-500 bg-red-500/10' : 'border-gray-600 focus:bg-gray-800/90'
                }`}
                placeholder="your.mystical@email.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Consent checkbox */}
            <div className="space-y-2">
              <label className="flex items-start space-x-4 cursor-pointer group">
                <div className="relative mt-1">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className={`w-6 h-6 rounded border-2 transition-all duration-300 ${
                    formData.consent 
                      ? 'bg-amber-500 border-amber-500' 
                      : 'border-gray-400 bg-gray-800/50 group-hover:border-amber-400'
                  }`}>
                    {formData.consent && (
                      <svg className="w-4 h-4 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-gray-300 leading-relaxed">
                  I grant permission to receive mystical insights and self-mastery wisdom from 
                  <span className="text-amber-400 font-medium"> Hussein Sbeiti</span>. 
                  Unlock exclusive shadow work guidance and psychological revelations.
                </span>
              </label>
              {errors.consent && (
                <p className="text-red-400 text-sm flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.consent}
                </p>
              )}
            </div>

            {/* Submit error */}
            {errors.submit && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
                <p className="text-red-400 text-center flex items-center justify-center">
                  <span className="mr-2">🌑</span>
                  {errors.submit}
                </p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full btn-primary text-xl font-bold py-6 mystical-glow flex items-center justify-center ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  Penetrating the Veil...
                </>
              ) : (
                <>
                  <span className="mr-2">🗝️</span>
                  Reveal My Shadow
                  <span className="ml-2">✨</span>
                </>
              )}
            </button>
          </form>

          {/* Trust indicators */}
          <div className="mt-8 pt-6 border-t border-gray-700/50">
            <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm">
              <div className="flex items-center">
                <span className="text-green-400 mr-1">🔒</span>
                Secure & Private
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-1">📧</span>
                No Spam Promise
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-1">🎯</span>
                Pure Insights
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mystical encouragement */}
      <div className="mt-12 max-w-lg text-center relative z-10 fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="glass-effect rounded-2xl p-6">
          <p className="text-gray-300 text-lg italic leading-relaxed">
            "Everything that irritates us about others can lead us to an understanding of ourselves."
          </p>
          <p className="text-amber-400 text-sm mt-2 font-medium">— Carl Jung</p>
        </div>
      </div>

      {/* Floating mystical elements */}
      <div className="absolute top-16 right-12 w-3 h-3 bg-purple-400/40 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute bottom-24 left-8 w-4 h-4 bg-amber-400/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-8 w-2 h-2 bg-pink-400/50 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
} 