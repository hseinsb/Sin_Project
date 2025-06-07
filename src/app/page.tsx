'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Background */}
      <div className="hero-bg"></div>
      
      {/* Main Content */}
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="section flex-1 flex-center">
          <div className="container text-center">
            {/* Hero Content */}
            <div className="max-w-4xl mx-auto mb-3xl">
              <h1 className="heading-1 text-gradient mb-lg animate-fade-in">
                Discover Your Deepest Sin Desire
              </h1>
              
              <p className="body-lg text-muted mb-lg animate-fade-in delay-100">
                By Hussein Sbeiti
              </p>
              
              <div className="space-y-lg animate-fade-in delay-200">
                <p className="body-lg text-secondary max-w-2xl mx-auto">
                  Face your shadow. <span className="text-gradient font-semibold">Find your truth.</span> 
                  This isn't just a quiz — it's a mirror into your unconscious mind.
                </p>
                
                <p className="body text-muted italic">
                  Based on Jungian psychology and the seven deadly sins archetype system.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mb-5xl animate-scale-in delay-400">
              <Link href="/quiz" className="btn btn-primary btn-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Begin Your Journey
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <p className="body-sm text-muted mt-md">
                ✨ Unlock your psychological archetype in 5 minutes
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid-auto mb-lg animate-slide-up delay-500">
              <div className="card card-compact">
                <div className="flex-center flex-col text-center">
                  <div className="w-16 h-16 mb-lg bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex-center text-2xl">
                    🔮
                  </div>
                  <h3 className="heading-3 text-gradient">Psychological Profiling</h3>
                  <p className="body text-secondary m-0">
                    Deep dive into the seven deadly sins through advanced Jungian psychology and shadow work principles.
                  </p>
                </div>
              </div>

              <div className="card card-compact">
                <div className="flex-center flex-col text-center">
                  <div className="w-16 h-16 mb-lg bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex-center text-2xl">
                    🌙
                  </div>
                  <h3 className="heading-3 text-gradient">Shadow Integration</h3>
                  <p className="body text-secondary m-0">
                    Explore your unconscious patterns and hidden motivations to achieve authentic self-awareness.
                  </p>
                </div>
              </div>

              <div className="card card-compact">
                <div className="flex-center flex-col text-center">
                  <div className="w-16 h-16 mb-lg bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex-center text-2xl">
                    ⚡
                  </div>
                  <h3 className="heading-3 text-gradient">Personal Transformation</h3>
                  <p className="body text-secondary m-0">
                    Get actionable insights and practical guidance for mastering your inner world and unlocking potential.
                  </p>
                </div>
              </div>
            </div>

            {/* Carl Jung Quote */}
            <div className="max-w-3xl mx-auto mb-2xl animate-fade-in delay-700">
              <div className="card text-center">
                <blockquote className="body-lg text-secondary italic mb-md">
                  "Until you make the unconscious conscious, it will direct your life and you will call it fate."
                </blockquote>
                
                <cite className="text-gradient font-bold">— Carl Jung</cite>
                <p className="body-sm text-muted mt-xs m-0">Swiss Psychiatrist & Psychoanalyst</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto py-3xl">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              
              {/* Top Divider */}
              <div className="w-16 h-px bg-gray-600 mx-auto mb-2xl"></div>
              
              {/* Social Links */}
              <div className="mb-2xl">
                <div className="flex-center gap-lg">
                  <a
                    href="https://www.instagram.com/huss.sbeiti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-lg hover:border-pink-500 transition-colors"
                  >
                    📷 Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@huss.sbeiti?_t=ZT-8wmNKSPD33y&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-lg hover:border-red-500 transition-colors"
                  >
                    🎬 TikTok
                  </a>
                  <a
                    href="https://www.youtube.com/@huss.sbeiti?si=mQviRGE5A1elgcxu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-lg hover:border-red-600 transition-colors"
                  >
                    🎥 YouTube
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-gray-600 mx-auto mb-xl"></div>

              {/* Tagline */}
              <div className="mb-xl">
                <p className="body text-secondary">
                  🧠 Built for seekers of self-mastery
                </p>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-gray-600 mx-auto mb-xl"></div>

              {/* Copyright */}
              <div>
                <p className="body-sm text-muted">
                  © 2025 <span className="text-gradient font-semibold">Hussein Sbeiti</span> · All rights reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
