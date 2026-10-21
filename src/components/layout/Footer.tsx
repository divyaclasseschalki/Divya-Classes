import React from 'react';
import { Logo } from '../common/Logo';
import { useLanguage } from '../../context/LanguageContext';
import {
  MapPin,
  Phone,
  Mail,
  Video,
  Award,
  BookOpen,
  Shield,
  CheckCircle,
  ExternalLink,
  Heart
} from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  const { language, t } = useLanguage();

  const handleNav = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Institute Overview */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-slate-400 text-sm leading-relaxed">
              {language === 'hi'
                ? 'दिव्या क्लासेस, चलकी, बेगूसराय में स्थित एक प्रतिष्ठित शिक्षण संस्थान है। यहाँ दीपक सर के मार्गदर्शन में कक्षा 9वीं और 10वीं के विद्यार्थियों को गणित एवं विज्ञान में निपुण बनाया जाता है।'
                : 'Premier coaching institute in Chalki, Begusarai, Bihar. Mentored by Dipak Sir for CBSE and Bihar Board Classes 9 & 10 Mathematics and Science.'}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs px-3 py-1 rounded-full font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>★ Best for Maths & Science • 7 Yrs School + 5 Yrs Coaching</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>{language === 'hi' ? 'महत्वपूर्ण लिंक' : 'Quick Navigation'}</span>
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors">
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-400 transition-colors">
                  {t('nav.about')} & Dipak Sir
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-amber-400 transition-colors">
                  {t('nav.courses')} (CBSE & Bihar Board)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('syllabus')} className="hover:text-amber-400 transition-colors">
                  {t('nav.syllabus')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('online_tests')} className="hover:text-amber-400 transition-colors font-medium text-amber-300">
                  {t('nav.online_tests')} (25 Marks Pattern)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('study_materials')} className="hover:text-amber-400 transition-colors">
                  {t('nav.study_materials')} & Sample Papers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('leaderboard')} className="hover:text-amber-400 transition-colors">
                  {t('nav.leaderboard')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('certificates')} className="hover:text-amber-400 transition-colors">
                  Certificate Verification
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Board Curriculum & Online Classes */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{language === 'hi' ? 'बोर्ड एवं डिजिटल कक्षाएं' : 'Curriculum & Channels'}</span>
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>CBSE Class 9 & 10 (Maths & Science)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Bihar Board (BSEB) मैट्रिक Class 9 & 10</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.youtube.com/@EASYSCIENCE-j3w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md"
                >
                  <Video className="w-4 h-4" />
                  <span>Easy Science by Dipak Sir</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="text-xs text-slate-400 pt-1">
                Official YouTube channel for chapter-wise concept videos and numerical tricks.
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-400" />
              <span>{language === 'hi' ? 'संपर्क एवं पता' : 'Institute Contact'}</span>
            </h3>

            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">Divya Classes</div>
                  <div>Chalki, Begusarai, Bihar, India</div>
                  <div className="text-xs text-slate-400">Coordinates: 25.714056, 86.051528</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:9065892913" className="hover:text-emerald-400 font-bold text-slate-200">
                  +91 9065892913
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-300 text-xs">divyaclasses@gmail.com</span>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.google.com/maps?q=25.714056,86.051528"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer per prompt specification */}
        <div className="border-t border-slate-800/80 pt-6 pb-4 text-xs text-slate-400 text-center space-y-2">
          <p className="max-w-4xl mx-auto">
            <strong>Disclaimer:</strong> Divya Classes is an independent educational coaching and mentorship institute run by Dipak Kumar. CBSE (Central Board of Secondary Education) and Bihar School Examination Board (BSEB) names and emblems are trademarks of their respective government bodies and are referenced strictly for educational syllabus alignment.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Divya Classes, Chalki, Begusarai. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Use
            </button>
            <span>•</span>
            <button
              onClick={() => handleNav('admin_login')}
              className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors font-medium"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Admin Login</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
