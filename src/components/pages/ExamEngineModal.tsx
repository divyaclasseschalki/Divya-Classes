import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Test, Question, TestAttempt } from '../../types';
import { StorageService } from '../../services/storage';
import { PdfService } from '../../services/pdfGenerator';
import { useAuth } from '../../context/AuthContext';
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  Bookmark,
  X,
  Award,
  Download,
  RotateCcw
} from 'lucide-react';

interface ExamEngineModalProps {
  test: Test;
  isOpen: boolean;
  onClose: () => void;
  onAttemptSaved: () => void;
}

export const ExamEngineModal: React.FC<ExamEngineModalProps> = ({
  test,
  isOpen,
  onClose,
  onAttemptSaved
}) => {
  const { currentUser } = useAuth();

  // Test state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(test.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [attemptResult, setAttemptResult] = useState<TestAttempt | null>(null);

  // Timer countdown
  useEffect(() => {
    if (!isOpen || isSubmitted) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen, isSubmitted]);

  if (!isOpen) return null;

  const currentQ: Question = test.questions[currentQuestionIndex];

  const handleSelectOption = (optIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optIndex
    }));
  };

  const handleClearAnswer = () => {
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestionIndex];
      return copy;
    });
  };

  const toggleMarkForReview = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestionIndex]: !prev[currentQuestionIndex]
    }));
  };

  const handleSubmitTest = () => {
    if (isSubmitted) return;

    // Automatic Scoring
    let marksObtained = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    test.questions.forEach((q, idx) => {
      const ans = answers[idx];
      if (ans === undefined || ans === '') {
        unansweredCount += 1;
      } else if (q.type === 'mcq' || q.type === 'assertion_reason') {
        if (Number(ans) === q.correctOptionIndex) {
          marksObtained += q.marks;
          correctCount += 1;
        } else {
          incorrectCount += 1;
        }
      } else {
        // Subjective: award provisional marks for attempted response
        marksObtained += q.marks;
        correctCount += 1;
      }
    });

    const percentage = Math.round((marksObtained / test.totalMarks) * 100);

    const attempt: TestAttempt = {
      id: `att-${Date.now()}`,
      testId: test.id,
      testTitle: test.title,
      studentId: currentUser?.studentId || currentUser?.id || `DC-GUEST-${Math.floor(1000 + Math.random() * 9000)}`,
      studentName: currentUser?.name || 'Guest Student',
      board: test.board,
      classLevel: test.classLevel,
      subject: test.subject,
      answers,
      marksObtained,
      totalMarks: test.totalMarks,
      percentage,
      correctCount,
      incorrectCount,
      unansweredCount,
      status: 'completed',
      submittedAt: new Date().toISOString()
    };

    StorageService.saveAttempt(attempt);
    setAttemptResult(attempt);
    setIsSubmitted(true);
    onAttemptSaved();

    if (percentage >= 80) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-5xl h-[92vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
        {/* Top Exam Navigation Bar */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white p-4 flex flex-wrap items-center justify-between gap-3 border-b border-amber-400/30">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-blue-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                {test.board} {test.classLevel}
              </span>
              <span className="text-xs text-slate-300 font-semibold">{test.subject}</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold truncate max-w-md sm:max-w-xl">
              {test.title}
            </h2>
          </div>

          {!isSubmitted && (
            <div className="flex items-center gap-4">
              {/* Timer */}
              <div
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-sm font-bold border ${
                  secondsRemaining < 300
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 animate-pulse'
                    : 'bg-white/10 text-amber-300 border-white/20'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>{formatTime(secondsRemaining)}</span>
              </div>

              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to exit? Your current test will be submitted.')) {
                    handleSubmitTest();
                  }
                }}
                className="text-slate-300 hover:text-white p-1"
                title="Exit Test"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>

        {/* Exam Body */}
        {isSubmitted && attemptResult ? (
          /* RESULT SCREEN */
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto text-white shadow-xl ${
                  attemptResult.percentage >= 80
                    ? 'bg-gradient-to-tr from-emerald-500 to-teal-400'
                    : attemptResult.percentage >= 50
                    ? 'bg-gradient-to-tr from-blue-600 to-indigo-500'
                    : 'bg-gradient-to-tr from-amber-500 to-rose-500'
                }`}
              >
                <Award className="w-10 h-10" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Examination Completed!
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Exam successfully submitted and verified by Divya Classes examination engine.
              </p>

              {/* Score Card */}
              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Marks Obtained</div>
                  <div className="text-2xl sm:text-3xl font-black text-blue-900 dark:text-amber-400 mt-1">
                    {attemptResult.marksObtained} / {attemptResult.totalMarks}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Percentage</div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
                    {attemptResult.percentage}%
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Correct Answers</div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                    {attemptResult.correctCount}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Unanswered</div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-500 mt-1">
                    {attemptResult.unansweredCount}
                  </div>
                </div>
              </div>

              {attemptResult.percentage >= 80 && (
                <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-left flex items-start gap-3">
                  <Award className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-amber-900 dark:text-amber-300">
                      Congratulations! You earned a Divya Classes Certificate of Achievement!
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      You scored above 80%. A verified certificate signed by Dipak Sir has been issued to your profile.
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => PdfService.generateQuestionPaperPdf(test)}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Download Question Paper PDF</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors"
                >
                  Return to Tests Catalog
                </button>
              </div>
            </div>

            {/* Answer Key & Step-by-Step Solutions */}
            <div className="max-w-3xl mx-auto pt-8 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <h4 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Detailed Step-by-Step Answer Key & Explanations</span>
              </h4>

              <div className="space-y-4">
                {test.questions.map((q, idx) => {
                  const studentAns = answers[idx];
                  const isCorrect = (q.type === 'mcq' || q.type === 'assertion_reason')
                    ? Number(studentAns) === q.correctOptionIndex
                    : Boolean(studentAns);

                  return (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl border ${
                        isCorrect
                          ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800'
                          : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold mb-2">
                        <span className="text-slate-600 dark:text-slate-400">
                          Question {idx + 1} ({q.marks} Mark{q.marks > 1 ? 's' : ''}) • {q.type}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full ${
                            isCorrect ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'
                          }`}
                        >
                          {isCorrect ? 'Correct' : 'Needs Review'}
                        </span>
                      </div>

                      <div className="text-sm font-semibold text-slate-900 dark:text-white mb-2 whitespace-pre-line">
                        {q.text}
                      </div>

                      {q.options && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                          {q.options.map((opt, optIdx) => (
                            <div
                              key={optIdx}
                              className={`p-2 rounded-lg border ${
                                optIdx === q.correctOptionIndex
                                  ? 'bg-emerald-100 dark:bg-emerald-900/60 font-bold text-emerald-950 dark:text-emerald-200 border-emerald-400'
                                  : Number(studentAns) === optIdx
                                  ? 'bg-rose-100 dark:bg-rose-900/60 font-bold text-rose-950 dark:text-rose-200 border-rose-400'
                                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                              }`}
                            >
                              {opt}
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="text-xs pt-2 border-t border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300">
                        <div>
                          <strong className="text-emerald-700 dark:text-emerald-400">Correct Answer:</strong>{' '}
                          {q.correctAnswer}
                        </div>
                        {q.explanation && (
                          <div className="mt-1 text-slate-500 dark:text-slate-400">
                            <strong>Dipak Sir's Concept Tip:</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* ACTIVE TEST TAKING SCREEN */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Left: Question statement & options */}
            <div className="flex-1 flex flex-col p-6 overflow-y-auto">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span className="font-bold text-blue-900 dark:text-blue-300">
                  Question {currentQuestionIndex + 1} of {test.questions.length}
                </span>
                <span className="font-bold text-amber-600 dark:text-amber-400">
                  {currentQ.marks} Mark{currentQ.marks > 1 ? 's' : ''}
                </span>
              </div>

              {/* Question Text */}
              <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed mb-6 whitespace-pre-line">
                {currentQ.text}
              </div>

              {/* Options or subjective text area */}
              {currentQ.options && currentQ.options.length > 0 ? (
                <div className="space-y-3 mb-6">
                  {currentQ.options.map((option, optIdx) => {
                    const isSelected = answers[currentQuestionIndex] === optIdx;
                    const optLetter = String.fromCharCode(65 + optIdx);
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(optIdx)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center gap-3.5 ${
                          isSelected
                            ? 'bg-blue-50 dark:bg-blue-950/50 border-blue-600 text-blue-950 dark:text-white shadow-sm'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-300 dark:hover:border-slate-600'
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {optLetter}
                        </span>
                        <span className="text-sm font-medium leading-relaxed">{option}</span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-2 mb-6">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    Type your step-by-step mathematical or scientific answer below:
                  </label>
                  <textarea
                    rows={6}
                    value={answers[currentQuestionIndex] || ''}
                    onChange={(e) =>
                      setAnswers((prev) => ({
                        ...prev,
                        [currentQuestionIndex]: e.target.value
                      }))
                    }
                    placeholder="Write formula, substitutions, calculations or concise definition here..."
                    className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-2xl text-sm font-mono focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>
              )}

              {/* Bottom Buttons */}
              <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMarkForReview}
                    className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-colors ${
                      markedForReview[currentQuestionIndex]
                        ? 'bg-amber-100 text-amber-800 border-amber-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{markedForReview[currentQuestionIndex] ? 'Marked for Review' : 'Mark for Review'}</span>
                  </button>

                  <button
                    onClick={handleClearAnswer}
                    className="px-3 py-2 text-xs text-slate-500 hover:text-rose-500 font-semibold transition-colors"
                  >
                    Clear Response
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                    className="px-4 py-2 bg-slate-200 dark:bg-slate-800 disabled:opacity-40 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  {currentQuestionIndex < test.questions.length - 1 ? (
                    <button
                      onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                      className="px-5 py-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-xl flex items-center gap-1 shadow-sm"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (window.confirm('Are you ready to submit your exam?')) {
                          handleSubmitTest();
                        }
                      }}
                      className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-md"
                    >
                      Submit Exam
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Question Palette Grid */}
            <div className="w-full md:w-72 bg-slate-50 dark:bg-slate-800/40 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 p-5 flex flex-col">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Question Palette
              </h4>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-600 dark:text-slate-400 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold">✓</span>
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-md bg-amber-400 text-slate-950 flex items-center justify-center font-bold">★</span>
                  <span>Marked</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-md bg-slate-200 dark:bg-slate-700"></span>
                  <span>Unanswered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-md ring-2 ring-blue-600"></span>
                  <span>Current</span>
                </div>
              </div>

              {/* Grid of question buttons */}
              <div className="grid grid-cols-5 gap-2 max-h-56 overflow-y-auto mb-4 p-1">
                {test.questions.map((_, idx) => {
                  const isAnswered = answers[idx] !== undefined && answers[idx] !== '';
                  const isMarked = markedForReview[idx];
                  const isCurrent = currentQuestionIndex === idx;

                  let bgClass = 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300';
                  if (isMarked) bgClass = 'bg-amber-400 text-slate-950 font-bold';
                  else if (isAnswered) bgClass = 'bg-emerald-600 text-white font-bold';

                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`h-9 rounded-xl text-xs font-bold flex items-center justify-center transition-all ${bgClass} ${
                        isCurrent ? 'ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-slate-900 scale-105' : ''
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Direct Submit CTA */}
              <div className="mt-auto pt-3 border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => {
                    if (window.confirm('Do you want to finalize and submit this exam?')) {
                      handleSubmitTest();
                    }
                  }}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md transition-colors"
                >
                  Final Submit Exam
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
