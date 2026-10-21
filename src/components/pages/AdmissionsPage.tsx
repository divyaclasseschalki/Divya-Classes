import React, { useState } from 'react';
import { StorageService } from '../../services/storage';
import { BoardType, ClassLevel } from '../../types';
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Clock,
  HelpCircle
} from 'lucide-react';

export const AdmissionsPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [board, setBoard] = useState<BoardType>('CBSE');
  const [classLevel, setClassLevel] = useState<ClassLevel>('Class 10');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Mathematics', 'Science']);
  const [preferredBatch, setPreferredBatch] = useState('Morning 7:00 AM - 8:30 AM');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const toggleSubject = (sub: string) => {
    if (selectedSubjects.includes(sub)) {
      if (selectedSubjects.length > 1) {
        setSelectedSubjects(selectedSubjects.filter(s => s !== sub));
      }
    } else {
      setSelectedSubjects([...selectedSubjects, sub]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    StorageService.saveAdmission({
      id: `adm-${Date.now()}`,
      studentName: name.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      board,
      classLevel,
      subjects: selectedSubjects,
      preferredBatch,
      address: address.trim() || undefined,
      message: message.trim() || undefined,
      status: 'Pending',
      createdAt: new Date().toISOString()
    });

    setSubmitted(true);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-4 h-4 text-amber-500" />
          <span>Chalki, Begusarai Center • Call: 9065892913</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Admission Enquiry & Contact Us
        </h1>
        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
          Enroll in Dipak Sir's batches for CBSE and Bihar Board Classes 9 & 10. Limited batch capacity ensures personal doubt clearance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column (5 cols): Institute Information, Direct Call, WhatsApp & Map */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Official Institute Details
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block text-sm">
                    Divya Classes Center
                  </strong>
                  <span>Chalki, Begusarai, Bihar, India</span>
                  <div className="text-xs text-slate-400 mt-0.5">
                    GPS Coordinates: 25.714056, 86.051528
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block text-sm">
                    Contact Dipak Sir
                  </strong>
                  <a href="tel:9065892913" className="text-blue-600 dark:text-amber-400 font-bold hover:underline">
                    +91 9065892913
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Available: 8:00 AM – 7:30 PM (All 7 Days)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block text-sm">
                    Official Email
                  </strong>
                  <span>divyaclasses@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Direct Instant Action Buttons */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:9065892913"
                className="py-3 px-4 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Dipak Sir</span>
              </a>

              <a
                href="https://wa.me/919065892913?text=Namaste%20Dipak%20Sir!%20I%20am%20interested%20in%20admission%20at%20Divya%20Classes%20Begusarai."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Map Embed Container */}
          <div className="bg-slate-900 rounded-3xl p-4 border border-slate-800 shadow-md space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-300 px-1">
              <span className="font-bold">Google Maps Location</span>
              <a
                href="https://www.google.com/maps?q=25.714056,86.051528"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>Open App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="w-full h-60 rounded-2xl overflow-hidden bg-black">
              <iframe
                title="Divya Classes Begusarai Location Map"
                src="https://maps.google.com/maps?q=25.714056,86.051528&hl=en&z=15&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Full Admission Form */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Application Submitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                  Thank you for applying to Divya Classes. Dipak Sir or the admissions coordinator will contact you directly on your phone within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-blue-900 text-white rounded-xl text-xs font-bold hover:bg-blue-800 transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Apply for Admission (2025-2026 Batch)
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill out student and academic details to reserve a seat in the coaching batch.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter student name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Student / Parent Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="9835xxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="student@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Board Target *
                    </label>
                    <select
                      value={board}
                      onChange={(e) => setBoard(e.target.value as BoardType)}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white"
                    >
                      <option value="CBSE">CBSE Board</option>
                      <option value="Bihar Board">Bihar Board (BSEB)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Class Level *
                    </label>
                    <select
                      value={classLevel}
                      onChange={(e) => setClassLevel(e.target.value as ClassLevel)}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white"
                    >
                      <option value="Class 10">Class 10</option>
                      <option value="Class 9">Class 9</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Select Subjects to Enroll
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['Mathematics', 'Science', 'Information Technology (402)', 'Social Science'].map((sub) => {
                      const isSelected = selectedSubjects.includes(sub);
                      return (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => toggleSubject(sub)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                            isSelected
                              ? 'bg-blue-900 text-white border-blue-900'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}
                          {sub}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Preferred Batch Time
                  </label>
                  <select
                    value={preferredBatch}
                    onChange={(e) => setPreferredBatch(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm"
                  >
                    <option value="Morning 6:30 AM - 8:00 AM">Morning 6:30 AM - 8:00 AM</option>
                    <option value="Morning 8:00 AM - 9:30 AM">Morning 8:00 AM - 9:30 AM</option>
                    <option value="Evening 4:00 PM - 5:30 PM">Evening 4:00 PM - 5:30 PM</option>
                    <option value="Evening 5:30 PM - 7:00 PM">Evening 5:30 PM - 7:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Locality / Residential Address in Begusarai
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Chalki, Barauni, or Begusarai town"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Questions or Specific Learning Goals
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Let Dipak Sir know if you need special help in maths numericals or science concepts..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 hover:from-blue-800 hover:to-indigo-800 text-white font-bold rounded-xl text-sm uppercase tracking-wider shadow-lg transition-all"
                >
                  Submit Admission Application
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQs) */}
      <section className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center">
          Frequently Asked Questions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">
              How does Dipak Sir prepare students for board examinations?
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Every chapter begins with foundational concept clarification and derivations. Students then practice numericals, step-by-step problem writing, and weekly timed 25-mark mock tests matching the latest CBSE and Bihar Board formats.
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">
              What is the fee and batch schedule?
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Batch timings and fee details depend on the subject selection (Mathematics, Science, or Combo). Please submit the enquiry form or call 9065892913 for specific batch availability.
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">
              Are both Hindi and English medium students supported?
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Yes! Dipak Sir teaches CBSE students in standard English/bilingual terminology and Bihar Board students in Devnagari Hindi with complete board syllabus notes.
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">
              Can students take online tests from their mobile phones?
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Absolutely. Our examination engine is mobile-optimized with autosave, timers, question palettes, and instant scorecards with printable PDF certificates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
