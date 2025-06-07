'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/data/questions';
import { calculateScores, getDominantSin } from '@/utils/quiz';

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const progress = ((currentQuestion + (selectedAnswer !== null ? 1 : 0)) / questions.length) * 100;

  useEffect(() => {
    setSelectedAnswer(null);
  }, [currentQuestion]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnimating) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null || isAnimating) return;

    setIsAnimating(true);
    
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Save answers to localStorage for the capture page
        localStorage.setItem('quizAnswers', JSON.stringify(newAnswers));
        
        // Calculate results and redirect to capture
        const sinScores = calculateScores(newAnswers);
        const dominantSin = getDominantSin(sinScores);
        
        router.push(`/capture?sin=${dominantSin}`);
      }
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0 && !isAnimating) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const question = questions[currentQuestion];

  return (
    <>
      <div className="hero-bg"></div>
      
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-3xl pb-xl">
          <div className="container">
            <div className="text-center animate-fade-in">
              <h1 className="heading-2 text-gradient mb-sm mt-xl">Sin Desire Profiler</h1>
              <p className="body text-secondary">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
          </div>
        </header>

        {/* Progress Section */}
        <section className="pb-xl">
          <div className="container animate-fade-in delay-100">
            <div className="max-w-2xl mx-auto">
              <div className="flex-between mb-sm">
                <span className="body-sm text-secondary font-medium">Progress</span>
                <span className="body-sm text-gradient font-semibold">{Math.round(progress)}%</span>
              </div>
              <div className="progress">
                <div 
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Quiz Section */}
        <main className="flex-1 pb-xl">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              {/* Question Card */}
              <div className="card mb-2xl animate-scale-in delay-200">
                <div className="text-center mb-2xl">
                  <div className="w-16 h-16 mx-auto mb-lg bg-gradient-to-br from-yellow-400 to-purple-500 rounded-xl flex-center text-xl font-bold text-white">
                    {currentQuestion + 1}
                  </div>
                  <h2 className="heading-2 text-primary m-0">
                    {question.question}
                  </h2>
                </div>

                {/* Answer Options */}
                <div className="space-y-md">
                  {question.options.map((option, index) => (
                    <div
                      key={index}
                      className={`option ${selectedAnswer === index ? 'selected' : ''} ${
                        isAnimating ? 'pointer-events-none' : ''
                      }`}
                      onClick={() => handleAnswerSelect(index)}
                    >
                      <div className="flex gap-md">
                        <div className={`radio ${selectedAnswer === index ? 'selected' : ''}`} />
                        <span className="body text-primary flex-1">
                          {option.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex-between animate-slide-up delay-300">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0 || isAnimating}
                  className={`btn btn-secondary ${
                    currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11H14a1 1 0 110 2H2.586l3.707 3.707a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L2.586 9H14a1 1 0 110 2H7.414l.293-.293z" clipRule="evenodd" />
                  </svg>
                  Previous
                </button>

                {/* Progress Dots */}
                <div className="flex gap-xs">
                  {Array.from({ length: questions.length }, (_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i <= currentQuestion
                          ? 'bg-gradient-to-r from-yellow-400 to-purple-500'
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={selectedAnswer === null || isAnimating}
                  className={`btn btn-primary ${
                    selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isAnimating ? (
                    <div className="loading" />
                  ) : (
                    <>
                      {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Tips Section */}
        <section>
          <div className="container animate-fade-in delay-400">
            <div className="max-w-2xl mx-auto">
              <div className="card card-compact text-center bg-opacity-60 my-2xl">
                <div className="flex-center gap-sm mb-md">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="heading-3 text-gradient m-0">Quick Tip</h3>
                </div>
                <p className="body text-secondary m-0">
                  Answer honestly based on your instinctive reactions. There are no right or wrong answers — 
                  only deeper self-understanding awaits.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 