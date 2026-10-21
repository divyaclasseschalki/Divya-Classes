import React, { useState } from 'react';
import { StorageService } from '../../services/storage';
import { PdfService } from '../../services/pdfGenerator';
import { Certificate } from '../../types';
import { Award, Download, Search, CheckCircle2, ShieldCheck, XCircle } from 'lucide-react';

export const CertificatesPage: React.FC = () => {
  const [certificates] = useState<Certificate[]>(StorageService.getCertificates());
  const [verifyInput, setVerifyInput] = useState('');
  const [verifiedCert, setVerifiedCert] = useState<Certificate | null | undefined>(undefined);

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyInput.trim()) return;
    const match = StorageService.verifyCertificate(verifyInput.trim());
    setVerifiedCert(match || null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Award className="w-4 h-4 text-amber-500" />
          <span>Verified Academic Credentials</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Certificates & Verification Portal
        </h1>
        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
          Download authenticated print-ready PDF certificates awarded for academic excellence and verify the authenticity of any issued Divya Classes certificate.
        </p>
      </div>

      {/* Verification Tool Box */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto space-y-6 border border-amber-400/30">
        <div className="text-center space-y-1">
          <ShieldCheck className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-xl font-bold">Online Certificate Verification</h3>
          <p className="text-xs text-slate-300">
            Enter the unique Certificate ID (e.g. CERT-DC-2026-001) or Verification Code to confirm authenticity.
          </p>
        </div>

        <form onSubmit={handleVerifySubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            required
            placeholder="Enter Certificate ID or Verification Code..."
            value={verifyInput}
            onChange={(e) => setVerifyInput(e.target.value)}
            className="flex-1 px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-sm font-mono text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Verify Authenticity</span>
          </button>
        </form>

        {/* Verification Result Feedback */}
        {verifiedCert !== undefined && (
          <div className="pt-2">
            {verifiedCert ? (
              <div className="p-5 rounded-2xl bg-emerald-950/60 border border-emerald-500 text-emerald-200 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Verified Genuine Certificate!</span>
                </div>
                <div>
                  <strong>Student Name:</strong> {verifiedCert.studentName} ({verifiedCert.studentId})
                </div>
                <div>
                  <strong>Award:</strong> {verifiedCert.achievement} in {verifiedCert.title}
                </div>
                <div>
                  <strong>Issue Date:</strong> {verifiedCert.issueDate} • <strong>Authorized by:</strong> {verifiedCert.authorizedBy}
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => PdfService.generateCertificatePdf(verifiedCert)}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Verified PDF Certificate</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-rose-950/60 border border-rose-500 text-rose-300 text-xs flex items-center gap-2">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>No certificate was found matching "{verifyInput}". Please check the code and try again.</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Available Student Certificates */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          <span>Recently Awarded Certificates ({certificates.length})</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{cert.id}</span>
                  <span className="text-amber-500 font-bold">{cert.achievement}</span>
                </div>

                <div className="pt-2">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {cert.studentName}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {cert.title} ({cert.board} - {cert.classLevel})
                  </p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs space-y-1">
                  <div className="text-slate-600 dark:text-slate-400">
                    <strong>Score:</strong> {cert.score}/{cert.totalScore} ({cert.percentage}%)
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    Issued on {cert.issueDate} by Dipak Sir
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400">
                  {cert.verificationCode}
                </span>

                <button
                  onClick={() => PdfService.generateCertificatePdf(cert)}
                  className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
