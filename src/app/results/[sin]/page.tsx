'use client';

import { Suspense, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Sin, QuizResult } from '@/types/quiz';
import results from '@/data/results';

function ResultsPageContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const sin = params?.sin as Sin;
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
      pdf.text(`Primary Result: ${result.archetype}`, margin, yPosition);
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
      
      // Your Desire
      pdf.setFontSize(14);
      pdf.text('Your Desire:', margin, yPosition);
      yPosition += 10;
      pdf.setFontSize(10);
      const splitDesire = pdf.splitTextToSize(result.desire, pageWidth - 2 * margin);
      pdf.text(splitDesire, margin, yPosition);
      yPosition += splitDesire.length * 5 + 15;
      
      // Your Shadow
      if (yPosition > 200) {
        pdf.addPage();
        yPosition = 30;
      }
      pdf.setFontSize(14);
      pdf.text('Your Shadow:', margin, yPosition);
      yPosition += 10;
      pdf.setFontSize(10);
      const splitShadow = pdf.splitTextToSize(result.shadow, pageWidth - 2 * margin);
      pdf.text(splitShadow, margin, yPosition);
      yPosition += splitShadow.length * 5 + 15;
      
      // Your Path
      pdf.setFontSize(14);
      pdf.text('Your Path:', margin, yPosition);
      yPosition += 10;
      pdf.setFontSize(10);
      const splitPath = pdf.splitTextToSize(result.path, pageWidth - 2 * margin);
      pdf.text(splitPath, margin, yPosition);
      
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

Primary Result: ${result.archetype}
Dominant Sin: ${sin.charAt(0).toUpperCase() + sin.slice(1)}

${sinBreakdown.length > 0 ? `
Sin Breakdown:
${sinBreakdown.map(item => `${item.sin.charAt(0).toUpperCase() + item.sin.slice(1)}: ${item.score} points (${item.percentage}%)`).join('\n')}
` : ''}

Your Desire:
${result.desire}

Your Shadow:
${result.shadow}

Your Path:
${result.path}
      `.trim();
      
      try {
        await navigator.clipboard.writeText(resultsText);
        alert('Results copied to clipboard! (PDF generation failed, but your results are now in your clipboard)');
      } catch {
        alert('Unable to save results. Please screenshot or copy the content manually.');
      }
    }
  };

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
                    {sinBreakdown.map((item) => {
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
                  <Link
                    href="/"
                    className="btn btn-secondary"
                  >
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

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex-center">
        <div className="loading" />
      </div>
    }>
      <ResultsPageContent />
    </Suspense>
  );
} 