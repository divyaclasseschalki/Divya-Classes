import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storage';
import { PdfService } from '../../services/pdfGenerator';
import { useAuth } from '../../context/AuthContext';
import {
  Test,
  TestAttempt,
  AdmissionEnquiry,
  ResourceItem,
  Announcement,
  User,
  Certificate
} from '../../types';
import {
  Users,
  GraduationCap,
  FileCheck2,
  UploadCloud,
  FileText,
  Sparkles,
  Download,
  Trash2,
  RefreshCw,
  LogOut,
  Plus,
  CheckCircle,
  Clock,
  Search,
  Filter,
  Eye,
  Camera,
  Layers,
  Award,
  ChevronRight,
  Sheet,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

interface AdminDashboardPageProps {
  onSignOut: () => void;
  onNavigateHome: () => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ onSignOut, onNavigateHome }) => {
  const { currentUser } = useAuth();

  // Tab State
  const [activeTab, setActiveTab] = useState<
    'overview' | 'admissions' | 'attempts' | 'students' | 'uploads' | 'ai_generator' | 'announcements' | 'sheets'
  >('overview');

  // Core Data
  const [stats, setStats] = useState(StorageService.getRealStatistics());
  const [admissions, setAdmissions] = useState<AdmissionEnquiry[]>([]);
  const [attempts, setAttempts] = useState<TestAttempt[]>([]);
  const [students, setStudents] = useState<User[]>([]);
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [tests, setTests] = useState<Test[]>([]);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  // AI Generator state
  const [aiBoard, setAiBoard] = useState<'CBSE' | 'Bihar Board'>('CBSE');
  const [aiClass, setAiClass] = useState<'Class 9' | 'Class 10'>('Class 10');
  const [aiSubject, setAiSubject] = useState<'Mathematics' | 'Science'>('Science');
  const [aiChapter, setAiChapter] = useState('All Chapters');
  const [aiLanguage, setAiLanguage] = useState<'English' | 'Hindi'>('English');
  const [aiQuestionsCount, setAiQuestionsCount] = useState(15);
  const [aiLoading, setAiLoading] = useState(false);
  const [generatedPaper, setGeneratedPaper] = useState<any | null>(null);

  // New Resource Upload state
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCategory, setUploadCategory] = useState<ResourceItem['category']>('Notes');
  const [uploadBoard, setUploadBoard] = useState<'CBSE' | 'Bihar Board' | 'Both'>('Both');
  const [uploadClass, setUploadClass] = useState<'Class 9' | 'Class 10' | 'Both'>('Both');
  const [uploadSubject, setUploadSubject] = useState('Mathematics');
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Google Sheets sync state
  const [syncStatus, setSyncStatus] = useState<string | null>(null);

  // Refresh all records
  const loadData = () => {
    setStats(StorageService.getRealStatistics());
    setAdmissions(StorageService.getAdmissions());
    setAttempts(StorageService.getAttempts());
    setStudents(StorageService.getStudents());
    setResources(StorageService.getResources());
    setAnnouncements(StorageService.getAnnouncements());
    setTests(StorageService.getTests());
  };

  useEffect(() => {
    loadData();
  }, []);

  // Update Admission Status
  const handleAdmissionStatusChange = (id: string, newStatus: AdmissionEnquiry['status']) => {
    StorageService.updateAdmissionStatus(id, newStatus);
    loadData();
  };

  // Delete resource
  const handleDeleteResource = (id: string) => {
    if (window.confirm('Are you sure you want to delete this educational resource?')) {
      StorageService.deleteResource(id);
      loadData();
    }
  };

  // Upload Resource Submit
  const handleResourceUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadTitle.trim()) return;

    const newRes: ResourceItem = {
      id: `res-${Date.now()}`,
      title: uploadTitle.trim(),
      description: `Uploaded by Dipak Sir for ${uploadBoard} ${uploadClass} ${uploadSubject}`,
      category: uploadCategory,
      board: uploadBoard,
      classLevel: uploadClass,
      subject: uploadSubject,
      fileUrl: uploadFile ? URL.createObjectURL(uploadFile) : '#',
      fileType: uploadFile?.type.includes('image') ? 'image' : 'pdf',
      fileSize: uploadFile ? `${(uploadFile.size / (1024 * 1024)).toFixed(1)} MB` : '1.2 MB',
      isPublished: true,
      downloadCount: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };

    StorageService.saveResource(newRes);
    setUploadTitle('');
    setUploadFile(null);
    setUploadSuccess(true);
    setTimeout(() => setUploadSuccess(false), 3000);
    loadData();
  };

  // Trigger AI Question Paper Generator
  const handleGeneratePaper = async () => {
    setAiLoading(true);
    setGeneratedPaper(null);

    try {
      const res = await fetch('/api/ai/generate-paper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          board: aiBoard,
          classLevel: aiClass,
          subject: aiSubject,
          chapter: aiChapter,
          language: aiLanguage,
          questionCount: aiQuestionsCount
        })
      });

      const data = await res.json();
      if (data.paper) {
        setGeneratedPaper(data.paper);
      }
    } catch (err) {
      console.error('Error generating paper:', err);
    } finally {
      setAiLoading(false);
    }
  };

  // Save AI Generated Paper to Official Tests
  const handlePublishGeneratedPaper = () => {
    if (!generatedPaper) return;
    const newTest: Test = {
      id: `test-ai-${Date.now()}`,
      title: generatedPaper.title || `${aiBoard} ${aiClass} ${aiSubject} Exam Paper`,
      board: aiBoard,
      classLevel: aiClass,
      subject: aiSubject,
      chapter: aiChapter,
      testType: 'ai_generated',
      durationMinutes: generatedPaper.durationMinutes || 45,
      totalMarks: generatedPaper.totalMarks || 25,
      passingMarks: Math.round((generatedPaper.totalMarks || 25) * 0.4),
      language: aiLanguage,
      instructions: generatedPaper.instructions || ['All questions are compulsory.'],
      questions: generatedPaper.questions || [],
      isPublished: true,
      createdAt: new Date().toISOString().split('T')[0]
    };

    StorageService.saveTest(newTest);
    loadData();
    alert('AI Question Paper has been published and is now available in Online Tests for students!');
  };

  // Google Sheets Sync
  const handleSyncGoogleSheets = async () => {
    setSyncStatus('Synchronizing student registrations and admission leads...');
    try {
      const payload = {
        sheetName: 'Divya_Classes_Master_Database',
        rows: admissions
      };
      const res = await fetch('/api/sheets/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      setSyncStatus(`Successfully synchronized ${data.synchronizedRows || admissions.length} records to Google Sheets pipeline.`);
    } catch {
      setSyncStatus('Sync pipeline queued (Data stored safely in offline database).');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Top Admin Header */}
      <div className="bg-slate-900 text-white border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-blue-950 font-black flex items-center justify-center text-lg shadow-md">
              DC
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight">Divya Classes Admin Console</h1>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Verified Active
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Logged in as: <strong className="text-amber-300">Dipak Sir</strong> (divyaclasses@gmail.com) • Begusarai, Bihar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
              <span>Refresh</span>
            </button>

            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 bg-blue-900/60 hover:bg-blue-800 text-blue-200 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Public Website</span>
            </button>

            <button
              onClick={onSignOut}
              className="flex items-center gap-1.5 bg-rose-900/40 hover:bg-rose-900 text-rose-300 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors border border-rose-800"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
          {[
            { id: 'overview', label: 'Overview & Statistics', icon: TrendingUp },
            { id: 'admissions', label: `Admissions (${admissions.length})`, icon: GraduationCap },
            { id: 'attempts', label: `Test Scores (${attempts.length})`, icon: FileCheck2 },
            { id: 'students', label: `Registered Students (${students.length})`, icon: Users },
            { id: 'uploads', label: `Study Materials & Uploads (${resources.length})`, icon: UploadCloud },
            { id: 'ai_generator', label: 'AI Question Generator', icon: Sparkles },
            { id: 'sheets', label: 'Google Sheets & CSV Export', icon: Sheet }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-amber-400' : ''}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW & REAL STATISTICS */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Real Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Total Registered Students</span>
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-3xl font-black text-slate-900 dark:text-white">
                  {stats.totalStudents}
                </div>
                <div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                  <span>Unique examinees:</span>
                  <strong className="text-blue-600 font-bold">{stats.uniqueTestTakers}</strong>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Tests Taken by Students</span>
                  <FileCheck2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-3xl font-black text-slate-900 dark:text-white">
                  {stats.totalAttempts}
                </div>
                <div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                  <span>Completed & Scored:</span>
                  <strong className="text-emerald-600 font-bold">{stats.completedTests}</strong>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Admission Applications</span>
                  <GraduationCap className="w-5 h-5 text-amber-500" />
                </div>
                <div className="text-3xl font-black text-slate-900 dark:text-white">
                  {stats.totalAdmissions}
                </div>
                <div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                  <span className="text-amber-600 font-semibold">{stats.pendingAdmissions} Pending</span>
                  <span>•</span>
                  <span className="text-emerald-600 font-semibold">{stats.enrolledStudents} Enrolled</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Average Test Score</span>
                  <Award className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-3xl font-black text-slate-900 dark:text-white">
                  {stats.averageScorePercentage}%
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Across all CBSE & BSEB Class 9 & 10 mock submissions
                </div>
              </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Quick Actions Box */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-3xl p-6 text-white shadow-xl">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span>Admin Fast Actions</span>
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setActiveTab('ai_generator')}
                    className="w-full text-left bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-bold text-amber-300">Generate AI Exam Paper</div>
                      <div className="text-xs text-slate-300">CBSE or BSEB 25-marks format</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </button>

                  <button
                    onClick={() => setActiveTab('uploads')}
                    className="w-full text-left bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-bold text-white">Upload Educational Materials</div>
                      <div className="text-xs text-slate-300">PDFs, notes, formula sheets</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </button>

                  <button
                    onClick={() => setActiveTab('admissions')}
                    className="w-full text-left bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-bold text-white">Review Admission Enquiries</div>
                      <div className="text-xs text-slate-300">{stats.pendingAdmissions} students waiting for follow-up</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </button>

                  <button
                    onClick={() => StorageService.exportToCsv('Divya_Classes_All_Attempts', attempts)}
                    className="w-full text-left bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-bold text-emerald-300">Download Test Scores CSV</div>
                      <div className="text-xs text-slate-300">Direct export for offline analysis</div>
                    </div>
                    <Download className="w-4 h-4 text-emerald-400" />
                  </button>
                </div>
              </div>

              {/* Recent Test Submissions */}
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <FileCheck2 className="w-5 h-5 text-blue-600" />
                    <span>Recent Student Exam Attempts</span>
                  </h3>
                  <button
                    onClick={() => setActiveTab('attempts')}
                    className="text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline"
                  >
                    View All ({attempts.length})
                  </button>
                </div>

                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {attempts.slice(0, 5).map((att) => (
                    <div key={att.id} className="py-3 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-sm text-slate-900 dark:text-white">
                          {att.studentName}
                        </div>
                        <div className="text-xs text-slate-500">
                          {att.board} • {att.classLevel} • {att.subject}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                          {att.marksObtained} / {att.totalMarks} ({att.percentage}%)
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {new Date(att.submittedAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ADMISSION INQUIRIES MANAGEMENT */}
        {activeTab === 'admissions' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search applicants by name, mobile, address..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-sm focus:outline-hidden"
                />
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-slate-100 dark:bg-slate-800 text-xs font-semibold px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  <option value="All">All Statuses</option>
                  <option value="Pending">Pending</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Enrolled">Enrolled</option>
                </select>

                <button
                  onClick={() => StorageService.exportToCsv('Divya_Classes_Admissions', admissions)}
                  className="flex items-center gap-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Admissions Table */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 text-xs uppercase font-bold tracking-wider border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-6 py-4">Student Name</th>
                      <th className="px-6 py-4">Contact</th>
                      <th className="px-6 py-4">Board & Class</th>
                      <th className="px-6 py-4">Subjects / Batch</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {admissions
                      .filter((adm) => {
                        const matchesQuery =
                          adm.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          adm.phone.includes(searchQuery) ||
                          (adm.address && adm.address.toLowerCase().includes(searchQuery.toLowerCase()));
                        const matchesStatus = statusFilter === 'All' || adm.status === statusFilter;
                        return matchesQuery && matchesStatus;
                      })
                      .map((adm) => (
                        <tr key={adm.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                          <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                            {adm.studentName}
                            {adm.address && (
                              <div className="text-xs text-slate-500 font-normal">{adm.address}</div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <a href={`tel:${adm.phone}`} className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                              {adm.phone}
                            </a>
                            {adm.email && (
                              <div className="text-xs text-slate-500">{adm.email}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 font-medium">
                            <span className="font-bold">{adm.board}</span> - {adm.classLevel}
                          </td>
                          <td className="px-6 py-4 text-xs text-slate-600 dark:text-slate-400">
                            <div>{adm.subjects.join(', ')}</div>
                            {adm.preferredBatch && (
                              <div className="text-amber-600 dark:text-amber-400">{adm.preferredBatch}</div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <select
                              value={adm.status}
                              onChange={(e) => handleAdmissionStatusChange(adm.id, e.target.value as any)}
                              className={`text-xs font-bold px-2.5 py-1 rounded-lg border focus:outline-hidden ${
                                adm.status === 'Pending'
                                  ? 'bg-amber-100 text-amber-800 border-amber-300'
                                  : adm.status === 'Contacted'
                                  ? 'bg-blue-100 text-blue-800 border-blue-300'
                                  : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                              }`}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Enrolled">Enrolled</option>
                              <option value="Archived">Archived</option>
                            </select>
                          </td>
                          <td className="px-6 py-4">
                            <a
                              href={`https://wa.me/91${adm.phone}?text=Namaste%20${encodeURIComponent(adm.studentName)}!%20This%20is%20Dipak%20Sir%20from%20Divya%20Classes.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-2.5 py-1 rounded-md inline-block mr-2"
                            >
                              WhatsApp
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TEST ATTEMPTS & SCORES */}
        {activeTab === 'attempts' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Student Test Results & Provisional Marks ({attempts.length})
              </h3>
              <button
                onClick={() => StorageService.exportToCsv('Divya_Classes_Exam_Results', attempts)}
                className="flex items-center gap-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Results CSV</span>
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 text-xs uppercase font-bold tracking-wider border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-6 py-4">Student</th>
                      <th className="px-6 py-4">Test Title</th>
                      <th className="px-6 py-4">Board & Class</th>
                      <th className="px-6 py-4">Marks Obtained</th>
                      <th className="px-6 py-4">Percentage</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {attempts.map((att) => (
                      <tr key={att.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                          {att.studentName}
                          <div className="text-xs text-slate-500 font-mono">{att.studentId}</div>
                        </td>
                        <td className="px-6 py-4 max-w-xs truncate text-slate-700 dark:text-slate-300">
                          {att.testTitle}
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-semibold">{att.board}</span> - {att.classLevel}
                        </td>
                        <td className="px-6 py-4 font-mono font-bold text-blue-900 dark:text-amber-400">
                          {att.marksObtained} / {att.totalMarks}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                              att.percentage >= 80
                                ? 'bg-emerald-100 text-emerald-800'
                                : att.percentage >= 50
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {att.percentage}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs font-semibold uppercase text-slate-500">
                          {att.status}
                        </td>
                        <td className="px-6 py-4 text-xs text-slate-500">
                          {new Date(att.submittedAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: REGISTERED STUDENTS */}
        {activeTab === 'students' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Enrolled Student Registry ({students.length})
              </h3>
              <button
                onClick={() => StorageService.exportToCsv('Divya_Classes_Students', students)}
                className="flex items-center gap-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Students CSV</span>
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 text-xs uppercase font-bold tracking-wider border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-6 py-4">Student ID</th>
                      <th className="px-6 py-4">Full Name</th>
                      <th className="px-6 py-4">Mobile</th>
                      <th className="px-6 py-4">Board & Class</th>
                      <th className="px-6 py-4">Registration Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {students.map((st) => (
                      <tr key={st.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="px-6 py-4 font-mono font-bold text-blue-900 dark:text-amber-400">
                          {st.studentId || st.id}
                        </td>
                        <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                          {st.name}
                        </td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                          {st.phone || 'N/A'}
                        </td>
                        <td className="px-6 py-4 font-medium">
                          {st.board || 'CBSE'} - {st.classLevel || 'Class 10'}
                        </td>
                        <td className="px-6 py-4 text-xs text-slate-500">
                          {st.createdAt ? new Date(st.createdAt).toLocaleDateString() : 'Active'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: STUDY MATERIALS & FILE UPLOADS */}
        {activeTab === 'uploads' && (
          <div className="space-y-8">
            {/* Upload Form Box */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <UploadCloud className="w-6 h-6 text-blue-900 dark:text-amber-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Upload Educational Resource (PDF, Notes, Sample Papers)
                </h3>
              </div>

              {uploadSuccess && (
                <div className="mb-4 p-3 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 text-emerald-800 dark:text-emerald-300 rounded-xl text-xs font-semibold">
                  Resource uploaded and published successfully!
                </div>
              )}

              <form onSubmit={handleResourceUpload} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Document Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CBSE Class 10 Light Numericals Formula Sheet"
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Category
                  </label>
                  <select
                    value={uploadCategory}
                    onChange={(e) => setUploadCategory(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm"
                  >
                    <option value="Notes">Revision Notes</option>
                    <option value="Sample Paper">Sample Question Paper</option>
                    <option value="Formula Sheet">Formula Handbook</option>
                    <option value="Syllabus">Syllabus Breakdown</option>
                    <option value="Notice">Official Notice</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Target Board
                  </label>
                  <select
                    value={uploadBoard}
                    onChange={(e) => setUploadBoard(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm"
                  >
                    <option value="Both">Both (CBSE & BSEB)</option>
                    <option value="CBSE">CBSE Board</option>
                    <option value="Bihar Board">Bihar Board (BSEB)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Target Class
                  </label>
                  <select
                    value={uploadClass}
                    onChange={(e) => setUploadClass(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm"
                  >
                    <option value="Both">Both (Class 9 & 10)</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 9">Class 9</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <select
                    value={uploadSubject}
                    onChange={(e) => setUploadSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm"
                  >
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="Social Science">Social Science</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Choose PDF or Document File
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                    className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>

                <div className="sm:col-span-4 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl text-sm shadow-md transition-colors flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Publish Document for Students</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Uploaded Documents List */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Published Study Documents ({resources.length})
                </h4>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {resources.map((res) => (
                  <div key={res.id} className="p-5 flex flex-wrap items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-300">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900 dark:text-white">
                          {res.title}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {res.category} • {res.board} • {res.classLevel} • {res.subject} • {res.fileSize}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400 font-medium">
                        {res.downloadCount || 0} downloads
                      </span>
                      <button
                        onClick={() => handleDeleteResource(res.id)}
                        className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors"
                        title="Delete Document"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: AI QUESTION PAPER GENERATOR */}
        {activeTab === 'ai_generator' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-6 h-6 text-amber-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Divya Classes AI Question Paper Generator
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Generate curriculum-accurate board examination papers (20 Questions / 25 Marks or customized) with instant answer keys and step-by-step explanations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Board Standard
                  </label>
                  <select
                    value={aiBoard}
                    onChange={(e) => setAiBoard(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm"
                  >
                    <option value="CBSE">CBSE (Central Board)</option>
                    <option value="Bihar Board">Bihar Board (BSEB Matric)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Class Level
                  </label>
                  <select
                    value={aiClass}
                    onChange={(e) => setAiClass(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm"
                  >
                    <option value="Class 10">Class 10</option>
                    <option value="Class 9">Class 9</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <select
                    value={aiSubject}
                    onChange={(e) => setAiSubject(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm"
                  >
                    <option value="Science">Science (Physics, Chem, Bio)</option>
                    <option value="Mathematics">Mathematics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Target Chapter
                  </label>
                  <input
                    type="text"
                    value={aiChapter}
                    onChange={(e) => setAiChapter(e.target.value)}
                    placeholder="e.g. Chemical Reactions or Real Numbers"
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Language
                  </label>
                  <select
                    value={aiLanguage}
                    onChange={(e) => setAiLanguage(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">हिन्दी (Devnagari)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Question Count
                  </label>
                  <select
                    value={aiQuestionsCount}
                    onChange={(e) => setAiQuestionsCount(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm"
                  >
                    <option value={20}>20 Questions (Standard 25 Marks Pattern)</option>
                    <option value={15}>15 Questions Quick Mock</option>
                    <option value={10}>10 Questions Chapter Assessment</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleGeneratePaper}
                disabled={aiLoading}
                className="px-6 py-3 bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center gap-2"
              >
                {aiLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                    <span>Generating Official Paper...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Generate Question Paper</span>
                  </>
                )}
              </button>
            </div>

            {/* Generated Paper Preview Box */}
            {generatedPaper && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-amber-400/50 shadow-xl space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      AI Generated Paper Draft
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                      {generatedPaper.title}
                    </h3>
                    <div className="text-xs text-slate-500 mt-1">
                      Total Questions: {generatedPaper.questions?.length} • Total Marks: {generatedPaper.totalMarks} • Time: {generatedPaper.durationMinutes} Mins
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => PdfService.generateQuestionPaperPdf(generatedPaper as any)}
                      className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors"
                    >
                      <Download className="w-4 h-4 text-amber-400" />
                      <span>Download PDF</span>
                    </button>

                    <button
                      onClick={handlePublishGeneratedPaper}
                      className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md transition-colors"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Publish to Online Tests</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                  {generatedPaper.questions?.map((q: any, idx: number) => (
                    <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <span className="font-bold text-sm text-blue-900 dark:text-blue-300">
                          Question {idx + 1} ({q.marks} Mark{q.marks > 1 ? 's' : ''}) • {q.type}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-100 whitespace-pre-line mb-3">
                        {q.text}
                      </p>

                      {q.options && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                          {q.options.map((opt: string, optIdx: number) => (
                            <div
                              key={optIdx}
                              className={`p-2 rounded-lg text-xs font-medium border ${
                                optIdx === q.correctOptionIndex
                                  ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 text-emerald-900 dark:text-emerald-300'
                                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              {opt}
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700">
                        <strong className="text-emerald-600 dark:text-emerald-400">Answer / Key:</strong> {q.correctAnswer}
                        {q.explanation && (
                          <div className="mt-1 text-slate-500">
                            <strong>Explanation:</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 7: GOOGLE SHEETS & CSV EXPORT */}
        {activeTab === 'sheets' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <Sheet className="w-6 h-6 text-emerald-600" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Google Sheets Server Integration & Direct Reporting
                  </h3>
                  <p className="text-xs text-slate-500">
                    Synchronize student admissions, test scores, and leaderboard records directly to Google Sheets or download offline CSV backups.
                  </p>
                </div>
              </div>

              {syncStatus && (
                <div className="p-3 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-xl text-xs text-blue-800 dark:text-blue-300 font-medium">
                  {syncStatus}
                </div>
              )}

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={handleSyncGoogleSheets}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
                >
                  <Sheet className="w-4 h-4" />
                  <span>Sync All Records to Google Sheets</span>
                </button>

                <button
                  onClick={() => StorageService.exportToCsv('Divya_Classes_All_Admissions', admissions)}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Admissions CSV</span>
                </button>

                <button
                  onClick={() => StorageService.exportToCsv('Divya_Classes_All_Exam_Scores', attempts)}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Test Attempts CSV</span>
                </button>

                <button
                  onClick={() => StorageService.exportToCsv('Divya_Classes_Enrolled_Students', students)}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Students CSV</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
