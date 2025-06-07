'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { saveUserData, saveEmailLead } from '@/lib/firebase';
import { calculateScores } from '@/utils/quiz';

function CapturePageContent() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dominantSin, setDominantSin] = useState<string>('');
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const sin = searchParams?.get('sin');
    if (sin) {
      setDominantSin(sin);
    } else {
      // If no sin parameter, redirect back to quiz
      router.push('/quiz');
    }
  }, [searchParams, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate required fields
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!gender) {
      setError('Please select your gender');
      return;
    }

    if (!age) {
      setError('Please enter your age');
      return;
    }

    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 13 || ageNum > 120) {
      setError('Please enter a valid age between 13 and 120');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get quiz data from localStorage if available
      const storedAnswers = localStorage.getItem('quizAnswers');
      let sinScores = {};
      let answers: number[] = [];

      if (storedAnswers) {
        answers = JSON.parse(storedAnswers);
        sinScores = calculateScores(answers);
      }

      // Create timestamp
      const submittedAt = new Date().toISOString();

      // Save to Firebase with new structure
      await saveUserData({
        email,
        name: name.trim(),
        gender,
        age: ageNum,
        sinResult: dominantSin,
        sinScores,
        answers,
        submittedAt,
      });

      // Also save as email lead
      await saveEmailLead({
        email,
        name: name.trim(),
        sinResult: dominantSin,
        source: 'quiz_completion',
      });

      // Send data to Google Sheets webhook
      try {
        console.log('Sending data to Google Sheets:', {
          email: email,
          name: name.trim(),
          gender: gender,
          sinResult: dominantSin
        });

        const response = await fetch("https://script.google.com/macros/s/AKfycbz_JPMO1-pWgyaZzDV_GJwujENZaKWep9qAOoe8_DYy3imK9ENxhcPK_O-rFstPb3sc/exec", {
          method: "POST",
          mode: "no-cors", // This bypasses CORS issues
          body: JSON.stringify({
            email: email,
            name: name.trim(),
            gender: gender,
            sinResult: dominantSin
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        
        console.log('Google Sheets webhook response status:', response.status);
        console.log('Successfully sent data to Google Sheets webhook');
      } catch (webhookError) {
        // Don't block the user flow if webhook fails
        console.error('Failed to send data to Google Sheets webhook:', webhookError);
        console.error('Webhook error details:', {
          message: webhookError instanceof Error ? webhookError.message : 'Unknown error',
          name: webhookError instanceof Error ? webhookError.name : 'Unknown'
        });
      }

      // Clear localStorage
      localStorage.removeItem('quizAnswers');

      // Redirect to results
      router.push(`/results/${dominantSin}?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name.trim())}`);
    } catch (error) {
      console.error('Error saving data:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSinDisplayName = (sin: string) => {
    const sinNames: Record<string, string> = {
      pride: 'Pride',
      envy: 'Envy',
      wrath: 'Wrath',
      sloth: 'Sloth',
      greed: 'Greed',
      lust: 'Lust',
      gluttony: 'Gluttony',
    };
    return sinNames[sin] || sin;
  };

  if (!dominantSin) {
    return (
      <div className="min-h-screen flex-center">
        <div className="loading" />
      </div>
    );
  }

  return (
    <>
      <div className="hero-bg"></div>
      
      <div className="min-h-screen flex flex-col justify-center">
        <main className="py-5xl">
          <div className="container">
            <div className="max-w-lg mx-auto">
              {/* Header */}
              <div className="text-center mb-2xl animate-fade-in">
                <div className="w-20 h-20 mx-auto mb-sm bg-gradient-to-br from-yellow-400 to-purple-500 rounded-full flex-center text-2xl">
                  🎭
                </div>
                <h1 className="heading-2 text-gradient mb-lg">
                  Your Results Are Ready
                </h1>
                <p className="body text-secondary mb-sm">
                  Your dominant sin archetype is <span className="text-gradient font-bold blur-result">{getSinDisplayName(dominantSin)}</span>.
                </p>
                <p className="body-sm text-muted">
                  Complete your profile to unlock your personalized analysis.
                </p>
              </div>

              {/* Form Card */}
              <div className="card animate-scale-in delay-200">
                <form onSubmit={handleSubmit} className="space-y-xl">
                  {/* Email */}
                  <div className="pt-sm">
                    <label htmlFor="email" className="block body font-medium text-primary mb-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="input"
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  {/* Name & Gender Row */}
                  <div className="grid grid-cols-2 gap-lg pt-sm">
                    <div>
                      <label htmlFor="name" className="block body font-medium text-primary mb-sm mt-sm">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="input"
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="gender" className="block body font-medium text-primary mb-sm mt-sm">
                        Gender
                      </label>
                      <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="input"
                        disabled={isSubmitting}
                        required
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  {/* Age */}
                  <div className="pt-sm">
                    <label htmlFor="age" className="block body font-medium text-primary mb-sm mt-sm">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="25"
                      min="13"
                      max="120"
                      className="input"
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-md">
                      <p className="body-sm text-red-400 text-center m-0">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || !email || !name.trim() || !gender || !age}
                    className={`btn btn-primary btn w-full mt-lg ${
                      isSubmitting || !email || !name.trim() || !gender || !age ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading" />
                        Analyzing Your Profile...
                      </>
                    ) : (
                      'Reveal My Psychology'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default function CapturePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex-center">
        <div className="loading" />
      </div>
    }>
      <CapturePageContent />
    </Suspense>
  );
} 