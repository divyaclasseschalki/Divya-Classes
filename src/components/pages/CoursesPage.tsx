import React, { useState } from 'react';
import { BoardBadge } from '../common/BoardBadges';
import {
  GraduationCap,
  Clock,
  Calendar,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Shield,
  Phone
} from 'lucide-react';

interface CoursesPageProps {
  onSelectCourseForAdmission: (courseName: string) => void;
  onExploreSyllabus: () => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  onSelectCourseForAdmission,
  onExploreSyllabus
}) => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'cbse' | 'bseb'>('all');

  const courses = [
    {
      id: 'cbse-10',
      board: 'CBSE' as const,
      classLevel: 'Class 10',
      title: 'CBSE Class 10 Board Excellence Program',
      academicSession: '2025-2026',
      subjects: ['Mathematics (Standard & Basic)', 'Science (Physics, Chemistry, Biology)', 'Information Technology (402)'],
      timings: 'Morning Batch: 6:30 AM - 8:00 AM | Evening Batch: 4:30 PM - 6:00 PM',
      format: 'Offline at Chalki Center & Digital Learning',
      keyHighlights: [
        'Complete NCERT line-by-line coverage with NCERT Exemplar problems',
        'Special emphasis on Assertion-Reason, Case-Study & Competency questions',
        'Weekly 20-Questions, 25-Marks practice tests with immediate solutions',
        'Formula handbooks, ray diagram sheets, and reaction charts provided'
      ]
    },
    {
      id: 'cbse-9',
      board: 'CBSE' as const,
      classLevel: 'Class 9',
      title: 'CBSE Class 9 Foundation Mastery Course',
      academicSession: '2025-2026',
      subjects: ['Mathematics', 'Science (Physics, Chemistry, Biology)', 'Foundation IT'],
      timings: 'Morning Batch: 8:00 AM - 9:30 AM | Evening Batch: 6:00 PM - 7:30 PM',
      format: 'Offline at Chalki Center & Digital Learning',
      keyHighlights: [
        'Building rigorous algebra and geometry foundational intuition',
        'Detailed graphical analysis in Physics (Motion, Force & Laws of Motion)',
        'Periodic chapter tests and personal mistake-analysis sessions',
        'Seamless conceptual bridge to Class 10 board readiness'
      ]
    },
    {
      id: 'bseb-10',
      board: 'Bihar Board' as const,
      classLevel: 'Class 10',
      title: 'बिहार बोर्ड मैट्रिक (Class 10) टॉपर स्पेशल बैच',
      academicSession: '2025-2026',
      subjects: ['गणित (Mathematics)', 'विज्ञान (भौतिकी, रसायन, जीव विज्ञान)', 'संस्कृत एवं सामाजिक विज्ञान मार्गदर्शन'],
      timings: 'प्रातःकालीन बैच: 7:00 AM - 8:30 AM | सायंकालीन बैच: 3:30 PM - 5:00 PM',
      format: 'चलकी संस्थान में ऑफलाइन कक्षाएं',
      keyHighlights: [
        'बिहार बोर्ड के 50% वस्तुनिष्ठ (OMR) प्रश्नों का गहन दैनिक अभ्यास',
        'लघु एवं दीर्घ उत्तरीय प्रश्नों के सटीक उत्तर लेखन का नियमित प्रशिक्षण',
        'पिछले 10 वर्षों के पूछे गए प्रश्न-पत्रों (PYQ) का संपूर्ण विश्लेषण',
        'दीपक सर द्वारा तैयार हस्तलिखित नोट्स एवं सूत्र तालिका'
      ]
    },
    {
      id: 'bseb-9',
      board: 'Bihar Board' as const,
      classLevel: 'Class 9',
      title: 'बिहार बोर्ड कक्षा 9वीं आधारभूत संपूर्ण पाठ्यक्रम',
      academicSession: '2025-2026',
      subjects: ['गणित', 'विज्ञान'],
      timings: 'प्रातःकालीन बैच: 8:30 AM - 10:00 AM | सायंकालीन बैच: 5:00 PM - 6:30 PM',
      format: 'चलकी संस्थान में ऑफलाइन कक्षाएं',
      keyHighlights: [
        'मूलभूत गणितीय गणनाओं और प्रमेय को सरल हिंदी भाषा में समझना',
        'विज्ञान के सभी प्रयोगों और आरेखों की विस्तृत व्याख्या',
        'साप्ताहिक रविवार टेस्ट और रिपोर्ट कार्ड द्वारा निरंतर मूल्यांकन',
        'कमजोर विद्यार्थियों के लिए विशेष समाधान कक्षाएं'
      ]
    }
  ];

  const filteredCourses = courses.filter((c) => {
    if (selectedTab === 'cbse') return c.board === 'CBSE';
    if (selectedTab === 'bseb') return c.board === 'Bihar Board';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
          <GraduationCap className="w-4 h-4 text-amber-500" />
          <span>Academic Session 2025-2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Board Programs & Batch Schedules
        </h1>
        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
          Tailored curriculum for CBSE and Bihar Board Classes 9 and 10 under the direct supervision of Dipak Sir.
        </p>

        {/* Board Switcher */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            onClick={() => setSelectedTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedTab === 'all'
                ? 'bg-blue-900 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            All Courses
          </button>
          <button
            onClick={() => setSelectedTab('cbse')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedTab === 'cbse'
                ? 'bg-blue-900 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            CBSE Board (Class 9 & 10)
          </button>
          <button
            onClick={() => setSelectedTab('bseb')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedTab === 'bseb'
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            बिहार बोर्ड (कक्षा 9वीं एवं 10वीं)
          </button>
        </div>
      </div>

      {/* Courses Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <BoardBadge board={course.board} size="sm" />
                <span className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                  Session: {course.academicSession}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {course.title}
              </h3>

              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-start gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200">Subjects:</strong>{' '}
                    {course.subjects.join(', ')}
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200">Batch Timings:</strong>{' '}
                    {course.timings}
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200">Class Format:</strong>{' '}
                    {course.format}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2 uppercase tracking-wider">
                  Course Inclusions & Teaching Plan:
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  {course.keyHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={onExploreSyllabus}
                className="text-xs font-bold text-blue-900 dark:text-amber-400 hover:underline"
              >
                View Syllabus Outline
              </button>

              <button
                onClick={() => onSelectCourseForAdmission(course.title)}
                className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Enroll in this Batch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
