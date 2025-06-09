'use client';

import { Suspense, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Sin, QuizResult } from '@/types/quiz';
import { subtypeDetails } from '@/data/subtypes';

function SubtypeResultsContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const sin = params?.sin as Sin;
  const subtype = params?.subtype as string;
  const name = searchParams?.get('name');
  const email = searchParams?.get('email');
  
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    // Get quiz results from localStorage
    const storedResult = localStorage.getItem('quizResult');
    console.log('Stored result from localStorage:', storedResult);
    
    if (storedResult) {
      try {
        const result = JSON.parse(storedResult);
        console.log('Parsed quiz result:', result);
        setQuizResult(result);
        
        // Successfully loaded data, now clear localStorage to prevent memory bloat
        localStorage.removeItem('quizResult');
        localStorage.removeItem('quizAnswers');
        console.log('Cleared localStorage after successfully loading quiz data');
      } catch (error) {
        console.error('Error parsing quiz result:', error);
      }
    } else {
      console.log('No quizResult found in localStorage');
      
      // Fallback: try to get from other localStorage keys
      const storedAnswers = localStorage.getItem('quizAnswers');
      console.log('Stored answers:', storedAnswers);
      
      if (storedAnswers) {
        // Try to recalculate results from answers
        import('@/utils/quiz').then(({ calculateQuizResult }) => {
          try {
            const answers = JSON.parse(storedAnswers);
            const recalculatedResult = calculateQuizResult(answers);
            console.log('Recalculated result:', recalculatedResult);
            setQuizResult(recalculatedResult);
            
            // Successfully recalculated, clear localStorage
            localStorage.removeItem('quizResult');
            localStorage.removeItem('quizAnswers');
            console.log('Cleared localStorage after successfully recalculating quiz data');
          } catch (error) {
            console.error('Error recalculating quiz result:', error);
          }
        }).catch(error => {
          console.error('Error importing quiz utils:', error);
        });
      }
    }
  }, []);

  if (!sin || !subtype || !subtypeDetails[subtype]) {
    return (
      <div className="min-h-screen flex-center">
        <div className="container text-center">
          <h1 className="heading-2 text-gradient">Invalid Results</h1>
          <p className="body text-secondary">Please retake the quiz.</p>
          <Link href="/" className="btn btn-primary mt-lg">
            Retake Quiz
          </Link>
        </div>
      </div>
    );
  }

  const result = subtypeDetails[subtype];

  // Calculate percentages for sin scores
  const calculateSinBreakdown = () => {
    if (!quizResult?.sinScores) {
      console.log('No quiz result or sin scores found');
      return [];
    }
    
    console.log('Quiz result sin scores:', quizResult.sinScores);
    const totalScore = Object.values(quizResult.sinScores).reduce((sum, score) => sum + score, 0);
    console.log('Total score:', totalScore);
    
    const breakdown = Object.entries(quizResult.sinScores)
      .map(([sinName, score]) => ({
        sin: sinName as Sin,
        score,
        percentage: totalScore > 0 ? Math.round((score / totalScore) * 100) : 0
      }))
      .sort((a, b) => b.score - a.score);
    
    console.log('Sin breakdown:', breakdown);
    return breakdown;
  };

  const sinBreakdown = calculateSinBreakdown();

  const downloadResults = async () => {
    try {
      // Dynamically import jsPDF
      const jsPDF = (await import('jspdf')).default;

      // Create PDF content
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 20;
      
      // Title
      pdf.setFontSize(20);
      pdf.text('Sin Desire Profiler Results', margin, 30);
      
      // User info
      let yPosition = 50;
      pdf.setFontSize(12);
      if (name) {
        pdf.text(`Name: ${name}`, margin, yPosition);
        yPosition += 10;
      }
      if (email) {
        pdf.text(`Email: ${email}`, margin, yPosition);
        yPosition += 10;
      }
      
      // Main result
      yPosition += 10;
      pdf.setFontSize(16);
      pdf.text(`Primary Result: ${result.title}`, margin, yPosition);
      yPosition += 10;
      pdf.setFontSize(12);
      pdf.text(`Dominant Sin: ${sin.charAt(0).toUpperCase() + sin.slice(1)}`, margin, yPosition);
      yPosition += 15;
      
             // Sin breakdown (moved up for better visibility)
       if (sinBreakdown.length > 0) {
         pdf.setFontSize(14);
         pdf.text('Your Desire Breakdown:', margin, yPosition);
         yPosition += 8;
         pdf.setFontSize(9);
         pdf.text('Understanding your full spectrum of desires', margin, yPosition);
         yPosition += 12;
         pdf.setFontSize(10);
         
         sinBreakdown.forEach(item => {
           const isDominant = item.sin === sin;
           if (isDominant) pdf.setFont('helvetica', 'bold');
           pdf.text(`${item.sin.charAt(0).toUpperCase() + item.sin.slice(1)}: ${item.score} points (${item.percentage}%)${isDominant ? ' (Dominant)' : ''}`, margin, yPosition);
           if (isDominant) pdf.setFont('helvetica', 'normal');
           yPosition += 6;
         });
         yPosition += 15;
       }
       
       // Poetic summary
       if (yPosition > 200) {
         pdf.addPage();
         yPosition = 30;
       }
       pdf.setFontSize(14);
       pdf.text('Your Essence:', margin, yPosition);
       yPosition += 10;
       pdf.setFontSize(10);
       const splitSummary = pdf.splitTextToSize(result.poeticSummary, pageWidth - 2 * margin);
       pdf.text(splitSummary, margin, yPosition);
       yPosition += splitSummary.length * 5 + 15;
      
             // Core wound
       if (yPosition > 200) {
         pdf.addPage();
         yPosition = 30;
       }
       pdf.setFontSize(14);
       pdf.text('Core Wound:', margin, yPosition);
       yPosition += 10;
       pdf.setFontSize(10);
       const splitWound = pdf.splitTextToSize(result.coreWound, pageWidth - 2 * margin);
       pdf.text(splitWound, margin, yPosition);
       yPosition += splitWound.length * 5 + 15;
       
       // Daily problems
       if (yPosition > 200) {
         pdf.addPage();
         yPosition = 30;
       }
       pdf.setFontSize(14);
       pdf.text('Daily Problems:', margin, yPosition);
       yPosition += 10;
       pdf.setFontSize(10);
       result.dailyProblems.forEach((problem, index) => {
         if (yPosition > 250) {
           pdf.addPage();
           yPosition = 30;
         }
         const splitProblem = pdf.splitTextToSize(`${index + 1}. ${problem}`, pageWidth - 2 * margin - 10);
         pdf.text(splitProblem, margin + 5, yPosition);
         yPosition += splitProblem.length * 5 + 3;
       });
       yPosition += 15;
       
       // How to fix it
       if (yPosition > 200) {
         pdf.addPage();
         yPosition = 30;
       }
       pdf.setFontSize(14);
       pdf.text('How to Fix It:', margin, yPosition);
       yPosition += 10;
       pdf.setFontSize(10);
       result.howToFix.forEach((fix, index) => {
         if (yPosition > 250) {
           pdf.addPage();
           yPosition = 30;
         }
         const splitFix = pdf.splitTextToSize(`${index + 1}. ${fix}`, pageWidth - 2 * margin - 10);
         pdf.text(splitFix, margin + 5, yPosition);
         yPosition += splitFix.length * 5 + 3;
       });
       yPosition += 15;
       
       // Self-Reflection Prompts
       if (yPosition > 200) {
         pdf.addPage();
         yPosition = 30;
       }
       pdf.setFontSize(14);
       pdf.text('Self-Reflection Prompts:', margin, yPosition);
       yPosition += 10;
       pdf.setFontSize(10);
       result.reflectionPrompts.forEach((prompt, index) => {
         if (yPosition > 250) {
           pdf.addPage();
           yPosition = 30;
         }
         const splitPrompt = pdf.splitTextToSize(`${index + 1}. ${prompt}`, pageWidth - 2 * margin - 10);
         pdf.text(splitPrompt, margin + 5, yPosition);
         yPosition += splitPrompt.length * 5 + 3;
       });
       yPosition += 15;
       
       // Tip to Start Today
       if (yPosition > 200) {
         pdf.addPage();
         yPosition = 30;
       }
       pdf.setFontSize(14);
       pdf.text('Tip to Start Today:', margin, yPosition);
       yPosition += 10;
       pdf.setFontSize(10);
       const splitTip = pdf.splitTextToSize(result.tipToday, pageWidth - 2 * margin);
       pdf.text(splitTip, margin, yPosition);
       yPosition += splitTip.length * 5 + 15;
       
       // What You Need to Do
       if (yPosition > 200) {
         pdf.addPage();
         yPosition = 30;
       }
       pdf.setFontSize(14);
       pdf.text('What You Need to Do:', margin, yPosition);
       yPosition += 10;
       pdf.setFontSize(10);
       const splitGuidance = pdf.splitTextToSize(result.plainEnglishGuidance, pageWidth - 2 * margin);
       pdf.text(splitGuidance, margin, yPosition);
      
      // Save the PDF
      const fileName = `sin-desire-profile-${name ? name.replace(/\s+/g, '-').toLowerCase() : 'results'}-${new Date().toISOString().split('T')[0]}.pdf`;
      pdf.save(fileName);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback: copy results to clipboard
      const resultsText = `
Sin Desire Profiler Results
===========================

${name ? `Name: ${name}` : ''}
${email ? `Email: ${email}` : ''}

Primary Result: ${result.title}
Dominant Sin: ${sin.charAt(0).toUpperCase() + sin.slice(1)}

Your Essence:
${result.poeticSummary}

${sinBreakdown.length > 0 ? `
Sin Breakdown:
${sinBreakdown.map(item => `${item.sin.charAt(0).toUpperCase() + item.sin.slice(1)}: ${item.score} points (${item.percentage}%)`).join('\n')}
` : ''}

Core Wound:
${result.coreWound}

Daily Problems:
${result.dailyProblems.map((problem, index) => `${index + 1}. ${problem}`).join('\n')}

How to Fix It:
${result.howToFix.map((fix, index) => `${index + 1}. ${fix}`).join('\n')}

Self-Reflection Prompts:
${result.reflectionPrompts.map((prompt, index) => `${index + 1}. ${prompt}`).join('\n')}

Tip to Start Today:
${result.tipToday}

What You Need to Do:
${result.plainEnglishGuidance}
      `.trim();
      
      try {
        await navigator.clipboard.writeText(resultsText);
        alert('Results copied to clipboard! (PDF generation failed, but your results are now in your clipboard)');
      } catch {
        alert('Unable to save results. Please screenshot or copy the content manually.');
      }
    }
  };

  return (
    <>
      <div className="hero-bg"></div>
      
      <div className="min-h-screen py-2xl">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="text-center mb-3xl animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-lg bg-gradient-to-br from-yellow-400 to-purple-500 rounded-full flex-center text-3xl">
                {getSinEmoji(sin)}
              </div>
              <h1 className="heading-2 text-gradient mb-md">
                {name ? `${name}, you are ` : 'You are '}
                <span className="block mt-sm">{result.title}</span>
              </h1>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-md"></div>
              <p className="body-lg text-secondary">
                Your dominant sin: <span className="text-gradient font-semibold">{sin.charAt(0).toUpperCase() + sin.slice(1)}</span>
              </p>
            </header>

            {/* Sin Score Breakdown */}
            {sinBreakdown.length > 0 && (
              <section className="animate-fade-in delay-150 mb-3xl">
                <div className="card">
                  <h2 className="heading-3 text-gradient mb-lg flex-center gap-md">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex-center text-lg">
                      📊
                    </div>
                    Your Desire Breakdown
                  </h2>
                  <p className="body-sm text-muted mb-lg text-center">
                    Understanding your full spectrum of desires
                  </p>
                  
                  <div className="space-y-md">
                    {sinBreakdown.map((item, index) => {
                      const isDominant = item.sin === sin;
                      const maxScore = sinBreakdown[0]?.score || 1;
                      const barWidth = (item.score / maxScore) * 100;
                      
                      return (
                        <div key={item.sin} className="space-y-sm">
                          <div className="flex-between">
                            <span className={`body-sm font-medium ${isDominant ? 'text-gradient font-bold' : 'text-secondary'}`}>
                              {item.sin.charAt(0).toUpperCase() + item.sin.slice(1)}
                              {isDominant && ' (Dominant)'}
                            </span>
                            <span className={`body-sm ${isDominant ? 'text-gradient font-bold' : 'text-muted'}`}>
                              {item.score} pts ({item.percentage}%)
                            </span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all duration-500 ${
                                isDominant 
                                  ? 'bg-gradient-to-r from-yellow-400 to-purple-500' 
                                  : 'bg-gradient-to-r from-gray-500 to-gray-400'
                              }`}
                              style={{ width: `${barWidth}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Poetic Summary */}
            <section className="animate-fade-in delay-200 mb-3xl">
              <div className="card text-center">
                <h2 className="heading-3 text-gradient mb-lg">Your Essence</h2>
                <p className="body-lg text-secondary leading-relaxed italic">
                  {result.poeticSummary}
                </p>
              </div>
            </section>

            {/* Core Wound */}
            <section className="animate-fade-in delay-300 mb-3xl">
              <div className="card">
                <h2 className="heading-3 text-gradient mb-lg flex-center gap-md">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex-center text-lg">
                    💔
                  </div>
                  Core Wound
                </h2>
                <p className="body text-secondary leading-relaxed">
                  {result.coreWound}
                </p>
              </div>
            </section>

            {/* Daily Problems */}
            <section className="animate-fade-in delay-400 mb-3xl">
              <div className="card">
                <h2 className="heading-3 text-gradient mb-lg flex-center gap-md">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex-center text-lg">
                    ⚠️
                  </div>
                  Problems in Daily Life
                </h2>
                <ul className="space-y-md">
                  {result.dailyProblems.map((problem, index) => (
                    <li key={index} className="flex gap-md">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="body text-secondary">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* How to Fix It */}
            <section className="animate-fade-in delay-500 mb-3xl">
              <div className="card">
                <h2 className="heading-3 text-gradient mb-lg flex-center gap-md">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex-center text-lg">
                    🛠️
                  </div>
                  How to Fix It
                </h2>
                <ul className="space-y-md">
                  {result.howToFix.map((fix, index) => (
                    <li key={index} className="flex gap-md">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="body text-secondary">{fix}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Self-Reflection Prompts */}
            <section className="animate-fade-in delay-600 mb-3xl">
              <div className="card">
                <h2 className="heading-3 text-gradient mb-lg flex-center gap-md">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex-center text-lg">
                    🗝️
                  </div>
                  Self-Reflection Prompts
                </h2>
                <ul className="space-y-md">
                  {result.reflectionPrompts.map((prompt, index) => (
                    <li key={index} className="flex gap-md">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="body text-secondary italic">{prompt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Tip to Start Today */}
            <section className="animate-fade-in delay-700 mb-3xl">
              <div className="card bg-gradient-to-br from-yellow-400/10 to-orange-500/10 border-yellow-400/20">
                <h2 className="heading-3 text-gradient mb-lg flex-center gap-md">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex-center text-lg">
                    🪞
                  </div>
                  Tip to Start Today
                </h2>
                <p className="body text-secondary leading-relaxed font-medium">
                  {result.tipToday}
                </p>
              </div>
            </section>

            {/* Plain-English Guidance */}
            <section className="animate-fade-in delay-800 mb-3xl">
              <div className="card">
                <h2 className="heading-3 text-gradient mb-lg flex-center gap-md">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex-center text-lg">
                    🧭
                  </div>
                  What You Need to Do
                </h2>
                <p className="body text-secondary leading-relaxed">
                  {result.plainEnglishGuidance}
                </p>
              </div>
            </section>

            {/* Footer CTA */}
            <footer className="text-center mt-5xl pt-3xl border-t border-gray-700">
              <div className="animate-fade-in delay-900">
                <h3 className="heading-3 text-gradient mb-md">Continue Your Journey</h3>
                <p className="body-sm text-muted mb-xl max-w-lg mx-auto">
                  Your transformation begins with understanding. Take the next step.
                </p>
                <div className="flex-center gap-md mb-lg">
                  <Link href="/" className="btn btn-secondary">
                    Retake Quiz
                  </Link>
                  <button className="btn btn-primary" onClick={downloadResults}>
                    📄 Save Results
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

function getSinEmoji(sin: Sin): string {
  const emojis = {
    lust: '🔥',
    wrath: '💢', 
    gluttony: '🍽️',
    envy: '🐍',
    pride: '🦁',
    greed: '💰',
    sloth: '💤'
  };
  return emojis[sin] || '✨';
}

export default function SubtypeResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex-center">
        <div className="loading" />
      </div>
    }>
      <SubtypeResultsContent />
    </Suspense>
  );
} 