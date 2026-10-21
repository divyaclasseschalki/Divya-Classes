import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.dipak_sir': 'Dipak Sir',
    'nav.courses': 'Courses',
    'nav.syllabus': 'Syllabus',
    'nav.study_materials': 'Study Materials',
    'nav.online_tests': 'Online Tests',
    'nav.leaderboard': 'Leaderboard',
    'nav.certificates': 'Certificates',
    'nav.youtube': 'YouTube Classes',
    'nav.admissions': 'Admissions',
    'nav.contact': 'Contact Us',
    'nav.student_login': 'Student Login',
    'nav.student_register': 'Register',
    'nav.dashboard': 'My Dashboard',
    'nav.admin_login': 'Admin Portal',
    'nav.logout': 'Sign Out',

    // Hero
    'hero.title': 'Learn Better. Practice Smarter. Achieve More with Divya Classes.',
    'hero.subtitle': 'Prepare for CBSE and Bihar Board examinations with concept-focused Maths and Science teaching, chapter-wise study resources, practice tests, AI-generated question papers, and performance tracking.',
    'hero.btn_test': 'Start Online Test',
    'hero.btn_syllabus': 'Explore Syllabus',
    'hero.btn_samples': 'Download Sample Papers',
    'hero.btn_youtube': 'Watch YouTube Classes',
    'hero.btn_join': 'Join Divya Classes',

    // Stats
    'stats.students': 'Active Students',
    'stats.tests': 'Tests Completed',
    'stats.admissions': 'Admission Inquiries',
    'stats.resources': 'Study Resources',

    // Sections
    'section.courses': 'Targeted Board Courses',
    'section.announcements': 'Latest Updates & Notices',
    'section.teacher': 'Meet Your Mentor: Dipak Sir',
    'section.methodology': 'Our Proven Teaching Approach',
    'section.top_performers': 'Monthly Top Performers',

    // Boards
    'board.cbse': 'CBSE Board',
    'board.bseb': 'Bihar Board (BSEB)',
    'board.class9': 'Class 9',
    'board.class10': 'Class 10',

    // Subjects
    'subj.maths': 'Mathematics',
    'subj.science': 'Science',
    'subj.physics': 'Physics',
    'subj.chemistry': 'Chemistry',
    'subj.biology': 'Biology',

    // Test Engine
    'test.start': 'Start Test Now',
    'test.time_remaining': 'Time Remaining',
    'test.question': 'Question',
    'test.of': 'of',
    'test.prev': 'Previous',
    'test.next': 'Next',
    'test.mark_review': 'Mark for Review',
    'test.clear': 'Clear Answer',
    'test.submit': 'Submit Test',
    'test.confirm_submit': 'Are you sure you want to submit your test?',
    'test.results': 'Test Results & Performance',
    'test.score': 'Score',
    'test.accuracy': 'Accuracy',

    // Contact
    'contact.institute': 'Divya Classes',
    'contact.teacher': 'Dipak Kumar (Dipak Sir)',
    'contact.location': 'Chalki, Begusarai, Bihar, India',
    'contact.phone': '9065892913',
    'contact.call_now': 'Call Dipak Sir',
    'contact.whatsapp': 'Chat on WhatsApp',
    'contact.maps': 'View on Google Maps'
  },
  hi: {
    // Navigation
    'nav.home': 'मुख्य पृष्ठ',
    'nav.about': 'हमारे बारे में',
    'nav.dipak_sir': 'दीपक सर',
    'nav.courses': 'पाठ्यक्रम',
    'nav.syllabus': 'पाठ्यचर्या (Syllabus)',
    'nav.study_materials': 'अध्ययन सामग्री',
    'nav.online_tests': 'ऑनलाइन टेस्ट',
    'nav.leaderboard': 'लीडरबोर्ड',
    'nav.certificates': 'प्रमाणपत्र',
    'nav.youtube': 'यूट्यूब कक्षाएं',
    'nav.admissions': 'नामांकन (Admissions)',
    'nav.contact': 'संपर्क करें',
    'nav.student_login': 'छात्र लॉगिन',
    'nav.student_register': 'पंजीकरण करें',
    'nav.dashboard': 'मेरा डैशबोर्ड',
    'nav.admin_login': 'एडमिन पोर्टल',
    'nav.logout': 'लॉग आउट',

    // Hero
    'hero.title': 'बेहतर सीखें। स्मार्ट अभ्यास करें। दिव्या क्लासेस के साथ सफलता पाएं।',
    'hero.subtitle': 'CBSE और बिहार बोर्ड की परीक्षाओं के लिए गणित और विज्ञान की अवधारणात्मक पढ़ाई, अध्यायवार सामग्री, अभ्यास टेस्ट, AI प्रश्न-पत्र और प्रगति रिपोर्ट के साथ आत्मविश्वास से तैयारी करें।',
    'hero.btn_test': 'ऑनलाइन टेस्ट शुरू करें',
    'hero.btn_syllabus': 'पाठ्यक्रम देखें',
    'hero.btn_samples': 'सैंपल पेपर डाउनलोड करें',
    'hero.btn_youtube': 'यूट्यूब कक्षाएं देखें',
    'hero.btn_join': 'दिव्या क्लासेस से जुड़ें',

    // Stats
    'stats.students': 'पंजीकृत छात्र',
    'stats.tests': 'पूर्ण किए गए टेस्ट',
    'stats.admissions': 'नामांकन आवेदन',
    'stats.resources': 'अध्ययन संसाधन',

    // Sections
    'section.courses': 'बोर्ड आधारित पाठ्यक्रम',
    'section.announcements': 'नवीनतम सूचनाएं एवं सूचना पट्ट',
    'section.teacher': 'मिलिए अपने शिक्षक से: दीपक सर',
    'section.methodology': 'हमारी शिक्षण पद्धति',
    'section.top_performers': 'मासिक शीर्ष प्रदर्शनकर्ता',

    // Boards
    'board.cbse': 'CBSE बोर्ड',
    'board.bseb': 'बिहार बोर्ड (BSEB)',
    'board.class9': 'कक्षा 9वीं',
    'board.class10': 'कक्षा 10वीं',

    // Subjects
    'subj.maths': 'गणित',
    'subj.science': 'विज्ञान',
    'subj.physics': 'भौतिकी',
    'subj.chemistry': 'रसायन शास्त्र',
    'subj.biology': 'जीव विज्ञान',

    // Test Engine
    'test.start': 'टेस्ट शुरू करें',
    'test.time_remaining': 'शेष समय',
    'test.question': 'प्रश्न संख्या',
    'test.of': 'का',
    'test.prev': 'पिछला',
    'test.next': 'अगला',
    'test.mark_review': 'समीक्षा के लिए चिह्नित करें',
    'test.clear': 'उत्तर हटाएं',
    'test.submit': 'टेस्ट सबमिट करें',
    'test.confirm_submit': 'क्या आप वाकई अपना टेस्ट सबमिट करना चाहते हैं?',
    'test.results': 'परीक्षा परिणाम और विश्लेषण',
    'test.score': 'प्राप्तांक',
    'test.accuracy': 'सटीकता',

    // Contact
    'contact.institute': 'दिव्या क्लासेस',
    'contact.teacher': 'दीपक कुमार (दीपक सर)',
    'contact.location': 'चलकी, बेगूसराय, बिहार, भारत',
    'contact.phone': '9065892913',
    'contact.call_now': 'दीपक सर से बात करें',
    'contact.whatsapp': 'व्हाट्सएप पर संदेश भेजें',
    'contact.maps': 'गूगल मैप्स पर देखें'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('divya_lang');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('divya_lang', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
