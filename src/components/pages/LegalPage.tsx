import React from 'react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-slate-800 dark:text-slate-200">
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
          Official Institute Policy
        </span>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">
          {isPrivacy ? 'Privacy Policy & Student Data Protection' : 'Terms of Use & Academic Code'}
        </h1>
        <p className="text-xs text-slate-500">
          Last Updated: October 2026 • Divya Classes, Chalki, Begusarai, Bihar
        </p>
      </div>

      {isPrivacy ? (
        <div className="space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Student Information Protection</h2>
            <p>
              Divya Classes is committed to protecting the privacy of our students and parents. We collect only necessary information such as student full name, mobile number, board, and class level for academic test evaluation, leaderboard ranking (optional with display name), and batch coordination.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Minor Privacy Safeguards</h2>
            <p>
              As an institute serving secondary school students (Classes 9 and 10), we enforce strict privacy boundaries. Personal phone numbers, parent contacts, and residential addresses are never displayed publicly on leaderboards or public pages.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Data Retention and Security</h2>
            <p>
              All academic examination records and certificates are stored securely. Students have full access to their private performance histories and may request data modifications or deletions by contacting Dipak Sir at divyaclasses@gmail.com.
            </p>
          </section>
        </div>
      ) : (
        <div className="space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Academic Integrity & Online Tests</h2>
            <p>
              All study materials, practice questions, and sample papers provided on Divya Classes are intended exclusively for educational preparation for CBSE and Bihar Board examinations. Students are encouraged to take practice tests with honesty to accurately evaluate their conceptual preparedness.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Board Affiliation Disclaimer</h2>
            <p>
              Divya Classes is an independent tutoring and mentorship institute founded and run by Dipak Kumar (Dipak Sir). Central Board of Secondary Education (CBSE) and Bihar School Examination Board (BSEB) are official examination authorities. Divya Classes does not claim official affiliation with, or endorsement by, either board.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Certificate Usage</h2>
            <p>
              Certificates of Achievement issued by Divya Classes signify completion and merit in internal coaching examinations and are signed under the authority of Dipak Kumar. They do not substitute for official state or central secondary board certificates.
            </p>
          </section>
        </div>
      )}
    </div>
  );
};
