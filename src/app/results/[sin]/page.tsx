'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { Sin } from '@/types/quiz';
import results from '@/data/results';

export default function ResultsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const sin = params?.sin as Sin;
  const email = searchParams?.get('email');
  const name = searchParams?.get('name');

  if (!sin || !results[sin]) {
    return (
      <div className="min-h-screen flex-center">
        <div className="container text-center">
          <h1 className="heading-2 text-gradient">Invalid Results</h1>
          <p className="body text-secondary">Please retake the quiz.</p>
        </div>
      </div>
    );
  }

  const result = results[sin];

  // Helper function to format text with italics
  const formatText = (text: string) => {
    return text.split('*').map((part, index) => {
      if (index % 2 === 1) {
        return <em key={index} className="italic text-gradient">{part}</em>;
      }
      return part;
    });
  };

  return (
    <>
      <div className="hero-bg"></div>
      
      <div className="min-h-screen py-2xl">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="text-center mb-3xl animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-lg bg-gradient-to-br from-yellow-400 to-purple-500 rounded-full flex-center text-3xl">
              </div>
              <h1 className="heading-2 text-gradient mb-md">
                {name ? `${name}, you are ` : 'You are '}
                <span className="block mt-sm">{result.archetype}</span>
              </h1>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-md"></div>
              <p className="body-lg text-secondary">
                Your dominant archetype: <span className="text-gradient font-semibold">{sin.charAt(0).toUpperCase() + sin.slice(1)}</span>
              </p>
            </header>

            {/* Profile Sections */}
            <main>
              {/* Your Desire */}
              <section className="animate-fade-in delay-200 mb-3xl">
                <div className="card">
                  <h2 className="heading-3 text-gradient mb-lg flex-center gap-md">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex-center text-lg">
                    </div>
                    Your Desire
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="body text-secondary leading-relaxed m-0 text-center">
                      {formatText(result.desire)}
                    </p>
                  </div>
                </div>
              </section>

              {/* Your Shadow */}
              <section className="animate-fade-in delay-300 mb-3xl">
                <div className="card">
                  <h2 className="heading-3 text-gradient mb-lg flex-center gap-md">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex-center text-lg">
                      🌙
                    </div>
                    Your Shadow
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="body text-secondary leading-relaxed m-0 text-center">
                      {formatText(result.shadow)}
                    </p>
                  </div>
                </div>
              </section>

              {/* Your Path */}
              <section className="animate-fade-in delay-400">
                <div className="card">
                  <h2 className="heading-3 text-gradient mb-lg flex-center gap-md">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex-center text-lg">
                      ⚡
                    </div>
                    Your Path
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="body text-secondary leading-relaxed m-0 text-center">
                      {formatText(result.path)}
                    </p>
                  </div>
                </div>
              </section>
            </main>

            {/* Footer CTA */}
            <footer className="text-center mt-5xl pt-3xl border-t border-gray-700">
              <div className="animate-fade-in delay-500">
                <h3 className="heading-3 text-gradient mb-md mt-lg">Continue Your Journey</h3>
                <p className="body-sm text-muted mb-xl max-w-lg mx-auto">
                  Dive deeper into shadow work and psychological transformation.
                </p>
                <div className="flex-center gap-md mb-lg">
                  <a
                    href="/"
                    className="btn btn-secondary"
                  >
                    Retake Quiz
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
} 