import React from 'react';
import { DipakSirPortrait } from '../common/DipakSirPortrait';
import { BoardBadge } from '../common/BoardBadges';
import {
  Award,
  BookOpen,
  MapPin,
  Phone,
  CheckCircle2,
  Compass,
  BrainCircuit,
  GraduationCap,
  ExternalLink,
  Target
} from 'lucide-react';

interface AboutPageProps {
  onNavigateAdmissions: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateAdmissions }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Mentor Intro Hero */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <DipakSirPortrait size="hero" showBadges={true} />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400 text-amber-800 dark:text-amber-300 text-xs font-black uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-500" />
              <span>★ Best for Teaching Maths & Science ★</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Meet Dipak Kumar{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-amber-400 dark:to-amber-200">
                (Dipak Sir)
              </span>
            </h1>

            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border-l-4 border-amber-400 italic">
              "Meet Dipak Kumar, known to students as Dipak Sir, the teacher behind Divya Classes. Renowned as the <strong>best mentor for teaching Mathematics and Science</strong>, with <strong>7 years of school teaching experience</strong> and <strong>5 years of dedicated coaching experience</strong> (total 12+ years), he focuses on helping students develop clear concepts, practise systematically, and achieve top board examination results."
            </p>

            {/* Experience Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900">
                <div className="font-bold text-2xl text-blue-900 dark:text-blue-300">7 Years</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Formal School Classroom Teaching</div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900">
                <div className="font-bold text-2xl text-amber-600 dark:text-amber-400">5 Years</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Intensive Coaching & Board Mentorship</div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900">
                <div className="font-bold text-2xl text-emerald-600 dark:text-emerald-400">12+ Yrs</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Total Proven Teaching Mastery</div>
              </div>
            </div>

            {/* Location & Contact Details */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Chalki, Begusarai, Bihar, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-500" />
                <a href="tel:9065892913" className="font-bold text-slate-900 dark:text-white hover:underline">
                  +91 9065892913
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodologies Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            Teaching Methodologies & Academic Approach
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            These represent our core teaching methods and pedagogical goals to cultivate lasting problem-solving capability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mathematics Approach */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-500/10 text-amber-600 rounded-2xl">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mathematics Teaching Approach</h3>
                <p className="text-xs text-slate-500">Classes 9 & 10 (CBSE & BSEB)</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Step-by-step problem-solving:</strong> Teaching students how to structure every mathematical step for full board exam presentation marks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Conceptual understanding:</strong> Deep exploration of theorems, geometric properties, and algebraic logic before solving problems.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Formula application:</strong> Regular speed formula drills, derivation understanding, and memorization aids.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Numerical practice & Calculation accuracy:</strong> Targeting the root causes of silly calculation mistakes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Chapter-wise exercises & Revision:</strong> Timed practice on NCERT Exemplar and past 10 years board questions.</span>
              </li>
            </ul>
          </div>

          {/* Science Approach */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-500/10 text-blue-600 rounded-2xl">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Science Teaching Approach</h3>
                <p className="text-xs text-slate-500">Physics, Chemistry, and Biology</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span><strong>Physics, Chemistry, and Biology concepts:</strong> Balanced mastery across electricity, light, reactions, and life processes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span><strong>Scientific reasoning & Real-world applications:</strong> Explaining the physical phenomena around us.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span><strong>Definitions & Precise Diagrams:</strong> Practicing neat ray diagrams, circuit sketches, and anatomical diagrams.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span><strong>Numerical problems:</strong> Optics mirror/lens formulas and Ohm's law circuit calculations simplified.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span><strong>MCQ & Assertion-Reason practice:</strong> Intensive training in modern board objective exam formats.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Classroom Location & Map */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Institute Location
            </span>
            <h3 className="text-2xl font-bold mt-1">Visit Divya Classes in Begusarai, Bihar</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Conveniently situated in Chalki with modern, focused classroom facilities.
            </p>
          </div>

          <a
            href="https://www.google.com/maps?q=25.714056,86.051528"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-amber-300" />
            <span>Open in Google Maps (25.714056, 86.051528)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Responsive Map Embed Container */}
        <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-700 relative bg-slate-950">
          <iframe
            title="Divya Classes Begusarai Location"
            src="https://maps.google.com/maps?q=25.714056,86.051528&hl=en&z=15&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};
