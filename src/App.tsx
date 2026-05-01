/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, GraduationCap, FileText, CheckCircle2, ChevronRight, Home as HomeIcon, AlertCircle } from 'lucide-react';
import { theoryData, essayQuestions } from './data/theory';
import { quizData, Question } from './data/quiz';

type Section = 'home' | 'theory' | 'quiz' | 'essay';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home onNavigate={setActiveSection} />;
      case 'theory': return <TheoryView />;
      case 'quiz': return <QuizView />;
      case 'essay': return <EssayView />;
      default: return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => setActiveSection('home')}
            className="flex items-center gap-2 font-bold text-blue-600 text-xl"
            id="nav-logo"
          >
            <GraduationCap className="w-8 h-8" />
            <span className="hidden sm:inline">Công nghệ 6</span>
          </button>
          <div className="flex gap-1">
            <NavButton active={activeSection === 'home'} onClick={() => setActiveSection('home')} icon={<HomeIcon className="w-5 h-5"/>} label="Trang chủ" />
            <NavButton active={activeSection === 'theory'} onClick={() => setActiveSection('theory')} icon={<BookOpen className="w-5 h-5"/>} label="Lý thuyết" />
            <NavButton active={activeSection === 'quiz'} onClick={() => setActiveSection('quiz')} icon={<CheckCircle2 className="w-5 h-5"/>} label="Trắc nghiệm" />
            <NavButton active={activeSection === 'essay'} onClick={() => setActiveSection('essay')} icon={<FileText className="w-5 h-5"/>} label="Tự luận" />
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200">
        <p>© 2026 Ôn tập Công nghệ 6 - Học kỳ II</p>
      </footer>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: ReactNode, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
        active ? 'bg-blue-50 text-blue-600 font-medium' : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </button>
  );
}

function Home({ onNavigate }: { onNavigate: (s: Section) => void }) {
  return (
    <div className="space-y-8 py-4 sm:py-12">
      <div className="text-center space-y-4">
        <motion.h1 
          className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Ôn tập Kiểm tra Cuối học kỳ II
        </motion.h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Ứng dụng giúp học sinh lớp 6 nắm vững kiến thức môn Công nghệ, chuẩn bị tốt nhất cho kỳ kiểm tra năm học 2025-2026.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
        <MenuCard 
          icon={<BookOpen className="w-10 h-10 text-blue-500" />}
          title="Tóm tắt lý thuyết"
          description="Ôn lại các kiến thức trọng tâm từ Bài 10 đến Bài 12."
          onClick={() => onNavigate('theory')}
          id="menu-theory"
        />
        <MenuCard 
          icon={<CheckCircle2 className="w-10 h-10 text-green-500" />}
          title="Luyện trắc nghiệm"
          description="Thử thách với 20 câu hỏi bao gồm trắc nghiệm và đúng/sai."
          onClick={() => onNavigate('quiz')}
          id="menu-quiz"
        />
        <MenuCard 
          icon={<FileText className="w-10 h-10 text-purple-500" />}
          title="Câu hỏi tự luận"
          description="Tham khảo đáp án các câu hỏi tự luận thường gặp."
          onClick={() => onNavigate('essay')}
          id="menu-essay"
        />
      </div>
    </div>
  );
}

function MenuCard({ icon, title, description, onClick, id }: { icon: ReactNode, title: string, description: string, onClick: () => void, id: string }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className="group p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all text-left flex flex-col h-full"
    >
      <div className="mb-4 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-slate-500 text-sm flex-grow">{description}</p>
      <div className="mt-4 flex items-center text-blue-600 font-medium text-sm">
        Bắt đầu ngay <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </button>
  );
}

function TheoryView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-100 rounded-xl">
          <BookOpen className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold">Kiến thức lý thuyết</h2>
      </div>

      {theoryData.map((item, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">{index + 1}</span>
            {item.title}
          </h3>
          <ul className="space-y-3">
            {item.content.map((point, pIdx) => (
              <li key={pIdx} className="flex gap-3 text-slate-700 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function EssayView() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-purple-100 rounded-xl">
          <FileText className="w-6 h-6 text-purple-600" />
        </div>
        <h2 className="text-3xl font-bold">Câu hỏi tự luận</h2>
      </div>

      {essayQuestions.map((q) => (
        <div key={q.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <button
            onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
            className="w-full text-left p-6 flex justify-between items-start gap-4 hover:bg-slate-50 transition-colors"
          >
            <div className="space-y-1">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Câu {q.id}</span>
              <h3 className="text-lg font-bold">{q.question}</h3>
            </div>
            <div className={`mt-1 p-1 rounded-full bg-slate-100 transition-transform ${expandedId === q.id ? 'rotate-180' : ''}`}>
              <ChevronRight className="w-5 h-5 text-slate-500" />
            </div>
          </button>
          
          <AnimatePresence>
            {expandedId === q.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
                  <div className="prose prose-blue max-w-none text-slate-700 whitespace-pre-line">
                    {q.answer.split('\n').map((line, i) => {
                      if (line.trim().startsWith('**')) {
                        return <h4 key={i} className="font-bold text-slate-900 mt-4 mb-2">{line.replace(/\*\*/g, '')}</h4>;
                      }
                      if (line.trim().startsWith('-')) {
                        return <div key={i} className="flex gap-2 mb-1 pl-4"><span className="text-blue-500">•</span> <span>{line.substring(1).trim()}</span></div>;
                      }
                      return <p key={i}>{line}</p>;
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function QuizView() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const [isSelectionLocked, setIsSelectionLocked] = useState(false);
  const [feedback, setFeedback] = useState<{isCorrect: boolean, message: string} | null>(null);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleMultipleChoice = (option: string) => {
    if (isSelectionLocked) return;

    const isCorrect = option === currentQuestion.answer;
    if (isCorrect) setScore(score + 1);
    
    setIsSelectionLocked(true);
    setFeedback({
      isCorrect,
      message: isCorrect ? "Chính xác!" : `Sai rồi. Đáp án đúng là: ${currentQuestion.answer}`
    });

    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsSelectionLocked(false);
        setFeedback(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const [tfAnswers, setTfAnswers] = useState<boolean[]>([]);
  const handleTfSubmit = (answers: boolean[]) => {
    const correctCount = (currentQuestion.answer as boolean[]).filter((ans, idx) => ans === answers[idx]).length;
    // For true-false questions in this simple logic, let's say they score 1 if they get all right
    const isFullyCorrect = correctCount === (currentQuestion.answer as boolean[]).length;
    if (isFullyCorrect) setScore(score + 1);

    setIsSelectionLocked(true);
    setFeedback({
      isCorrect: isFullyCorrect,
      message: isFullyCorrect ? "Tất cả đều đúng!" : `Một số câu bị sai.`
    });

    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsSelectionLocked(false);
        setFeedback(null);
        setTfAnswers([]);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  if (showResult) {
    return (
      <div className="text-center py-12 space-y-6 max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <CheckCircle2 className="w-12 h-12" />
          </div>
        </div>
        <h2 className="text-3xl font-bold">Hoàn thành!</h2>
        <div className="py-6">
          <p className="text-slate-500 mb-2">Điểm số của bạn</p>
          <div className="text-6xl font-black text-blue-600">
            {score}/{quizData.length}
          </div>
        </div>
        <p className="text-slate-600">
          {score === quizData.length ? "Tuyệt vời! Bạn đã nắm vững toàn bộ kiến thức." : 
           score > quizData.length / 2 ? "Khá lắm! Hãy ôn lại những câu sai nhé." : 
           "Bạn cần cố gắng ôn tập thêm một chút nữa."}
        </p>
        <button
          onClick={() => {
            setCurrentQuestionIndex(0);
            setScore(0);
            setShowResult(false);
            setFeedback(null);
            setIsSelectionLocked(false);
          }}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
        >
          Làm lại bài thi
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Câu {currentQuestionIndex + 1} / {quizData.length}
        </span>
        <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${(currentQuestionIndex / quizData.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden">
        {feedback && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`absolute top-0 left-0 w-full p-2 text-center text-white font-bold flex items-center justify-center gap-2 ${feedback.isCorrect ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {feedback.isCorrect ? <CheckCircle2 className="w-5 h-5"/> : <AlertCircle className="w-5 h-5"/>}
            {feedback.message}
          </motion.div>
        )}

        <h3 className="text-xl font-bold mb-8 mt-4 leading-relaxed">{currentQuestion.question}</h3>

        {currentQuestion.type === 'multiple-choice' ? (
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options?.map((option, i) => (
              <button
                key={i}
                disabled={isSelectionLocked}
                onClick={() => handleMultipleChoice(option)}
                className={`p-4 text-left rounded-2xl border-2 transition-all ${
                  isSelectionLocked 
                    ? option === currentQuestion.answer 
                      ? 'bg-green-50 border-green-500 text-green-700 font-bold' 
                      : 'bg-white border-slate-100 text-slate-300'
                    : 'bg-white border-slate-100 hover:border-blue-300 hover:bg-blue-50 active:scale-[0.98]'
                }`}
              >
                <span className="inline-block w-8 font-bold text-blue-500">{String.fromCharCode(65 + i)}.</span>
                {option}
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {currentQuestion.subQuestions?.map((subQ, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 rounded-2xl gap-3">
                <p className="text-slate-700 font-medium">{subQ}</p>
                <div className="flex gap-2">
                  <button 
                    disabled={isSelectionLocked}
                    onClick={() => {
                      const newAns = [...tfAnswers];
                      newAns[idx] = true;
                      setTfAnswers(newAns);
                    }}
                    className={`px-4 py-2 rounded-lg font-bold transition-all border-2 ${
                      tfAnswers[idx] === true 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'bg-white border-slate-200 text-slate-400 hover:border-blue-300'
                    }`}
                  >Đúng</button>
                  <button 
                    disabled={isSelectionLocked}
                    onClick={() => {
                      const newAns = [...tfAnswers];
                      newAns[idx] = false;
                      setTfAnswers(newAns);
                    }}
                    className={`px-4 py-2 rounded-lg font-bold transition-all border-2 ${
                      tfAnswers[idx] === false 
                        ? 'bg-red-600 text-white border-red-600' 
                        : 'bg-white border-slate-200 text-slate-400 hover:border-red-300'
                    }`}
                  >Sai</button>
                </div>
              </div>
            ))}
            <button
              disabled={isSelectionLocked || tfAnswers.filter(a => a !== undefined).length < 4}
              onClick={() => handleTfSubmit(tfAnswers)}
              className="w-full mt-6 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Nộp câu trả lời
            </button>
          </div>
        )}
      </div>

      <div className="p-4 bg-blue-50 rounded-2xl flex gap-3 items-start border border-blue-100">
        <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <p className="text-sm text-blue-800">
          <strong>Ghi nhớ:</strong> Phải cẩn thận đọc kỹ từng từ trong câu hỏi. Các đại lượng vật lý như Vôn (V) và Oát (W) thường dễ gây nhầm lẫn.
        </p>
      </div>
    </div>
  );
}
